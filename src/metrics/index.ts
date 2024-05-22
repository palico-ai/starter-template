import {
  AgentRequestContent,
  EvalMetric,
  EvalMetricOutput,
  ConversationResponse
} from "@palico-ai/app";

interface CreateParams {
  fact: string;
}

export class FactualityMetrics implements EvalMetric {
  label = "factuality";
  constructor(private readonly params: CreateParams) {}

  async evaluate(
    input: AgentRequestContent<Record<string, unknown>>,
    response: ConversationResponse<Record<string, unknown>>
  ): Promise<EvalMetricOutput> {
    return Math.random() > 0.5;
  }
}

export class MemoryMetrics implements EvalMetric {
  label = "memory";
  constructor(private expected: string) {}

  async evaluate(
    input: AgentRequestContent<Record<string, unknown>>,
    response: ConversationResponse
  ): Promise<EvalMetricOutput> {
    return Math.random() > 0.5;
  }
}

export class Contains implements EvalMetric {
  label = "contains";
  constructor(private expected: string) {}

  async evaluate(
    input: AgentRequestContent<Record<string, unknown>>,
    response: ConversationResponse
  ): Promise<EvalMetricOutput> {
    return response.message?.includes(this.expected) || false;
  }
}
