import { Application } from "@palico-ai/app"
import IntentClassifierAgent from "../agents/intent_classifier"

const run = async () => {
  const response = await Application.chat({
    agentName: IntentClassifierAgent.NAME,
    content: {
      userMessage: "Hello"
    },
  })

  console.log(response)
}

run()