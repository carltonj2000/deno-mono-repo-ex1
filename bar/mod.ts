import chalk from "chalk";
import { helloHelper } from "@carltonj2000/bar";

export function foo() {
  return chalk.red(helloHelper() + "foo");
}
