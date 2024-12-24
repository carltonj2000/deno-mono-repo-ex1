import chalk from "chalk";

export function bar() {
  return chalk.green(helloHelper() + "bar");
}

export function helloHelper() {
  return "Hello, from ";
}
