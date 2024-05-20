import {
  ExactMatchEvalMetric,
  ExperimentTestCaseDataset,
  ProfessionalismEvalMetric,
} from '@palico-ai/app';

const TestCaseDataset: ExperimentTestCaseDataset[] = [
  {
    agentInput: {
      userMessage: 'Hello, how are you?',
    },
    tags: [
      {
        category: 'intent',
        value: 'greeting',
      },
    ],
    metrics: [
      {
        label: 'Professionalism',
        metric: new ProfessionalismEvalMetric(),
      },
    ],
  },
  {
    agentInput: {
      userMessage:
        "What's 2+2. Only answer with the result number, nothing else.",
    },
    tags: [
      {
        category: 'intent',
        value: 'math',
      },
    ],
    metrics: [
      {
        label: 'exact_match',
        metric: new ExactMatchEvalMetric({
          expected: {
            message: '4',
          },
        }),
      },
    ],
  },
];

export default TestCaseDataset;