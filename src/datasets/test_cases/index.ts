import { Dataset, ExperimentTestCaseDataset } from "@palico-ai/app";
import dataset from "./tests";

export default class DefaultTestCaseDataset
  implements Dataset<ExperimentTestCaseDataset>
{
  async fetch(): Promise<ExperimentTestCaseDataset[]> {
    return dataset;
  }
}
