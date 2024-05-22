import {
  ExperimentTestCaseDataset,
} from "@palico-ai/app";
import { testCase } from "../../utils/datasets";

const TestCaseDataset: ExperimentTestCaseDataset[] = [
  testCase({
    message: "Hello",
    greeting: true,
    professionalism: true
  }),
  testCase({
    message: "What is 2 + 2?",
    math: true,
    exactMatch: "4"
  }),
  testCase({
    message: "Goodbye",
    greeting: true,
    professionalism: true
  }),
  testCase({
    message: "What is 3 + 3?",
    math: true,
    exactMatch: "6"
  }),
  testCase({
    message: "Hello",
    greeting: true,
    professionalism: true
  }),
  testCase({
    message: "Who is the president of the United States?",
    factuality: "Biden"
  }),
  testCase({
    message: "What is 4 + 4?",
    math: true,
    exactMatch: "8"
  }),
  testCase({
    message: "Goodbye",
    greeting: true,
    professionalism: true
  }),
  testCase({
    message: "What's my name?",
    contains: "Asif"
  })
];

export default TestCaseDataset;
