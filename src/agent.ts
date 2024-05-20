import {
  AgentRequestContent,
  AgentRequestContext,
  LLMAgent,
  LLMAgentResponse,
} from "@palico-ai/app";
import { OpenAIConversation } from "./services/openai";
import { trace } from "@opentelemetry/api";
import ConversationHistory from "./tables/conversation_history";

const tracer = trace.getTracer("conversational-agent");

export type AgentResponseData = Record<string, unknown>;

export class ConversationalAgent implements LLMAgent {
  static agentId = "v1";

  async chat(
    conversationId: string,
    content: AgentRequestContent,
    context: AgentRequestContext
  ): Promise<LLMAgentResponse<AgentResponseData>> {
    return tracer.startActiveSpan("Agent Chat", async (span) => {
      console.log("Trace ID: " + span.spanContext().traceId);
      const convoExists = await ConversationHistory.doesConversationExist(
        conversationId
      );
      span.setAttributes({
        conversationId,
        isOldConversation: convoExists,
      });
      if (!convoExists) {
        const response = await this.handleNewConversation(
          conversationId,
          content
        );
        span.end();
        return response;
      } else {
        const response = this.handleReplyToConversation(
          conversationId,
          content
        );
        span.end();
        return response;
      }
    });
  }

  async handleNewConversation(
    conversationId: string,
    content: AgentRequestContent
  ): Promise<LLMAgentResponse<AgentResponseData>> {
    if (!content.userMessage) {
      throw new Error("userMessage is required");
    }
    const conversation = await OpenAIConversation.newConversation({
      conversationId,
      systemPrompt: "You are a helpful assistant",
    });
    const response = await conversation.sendUserMessage(content.userMessage);
    return response;
  }

  async handleReplyToConversation(
    conversationId: string,
    content: AgentRequestContent
  ): Promise<LLMAgentResponse<AgentResponseData>> {
    if (!content.userMessage) {
      throw new Error("userMessage is required");
    }
    const conversation = await OpenAIConversation.fromConversationId(
      conversationId
    );
    const response = await conversation.sendUserMessage(content.userMessage);
    return response;
  }
}
