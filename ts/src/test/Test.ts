export class Test {
  private static passedTestsCounter: number = 0;
  private static failedTestsCounter: number = 0;
  private static totalTestsCounter: number = 0;

  static GREEN: string = '\x1b[32m';
  static RED: string = '\x1b[31m';
  static YELLOW: string = '\x1b[33m';
  static BLUE: string = '\x1b[34m';
  static RESET: string = '\x1b[0m';

  public static getPassedTestsCounter(): number {
    return this.passedTestsCounter;
  }
  public static getFailedTestsCounter(): number {
    return this.failedTestsCounter;
  }
  public static getTotalTestsCounter(): number {
    return this.totalTestsCounter;
  }

  static assertEquals<T>(
    expected: T,
    result: T,
    description: string = '',
  ): void {
    const error = new Error();
    if (expected === result) {
      this.passedTestsCounter++;
      this.totalTestsCounter++;
      console.log(`${this.GREEN}\u2713 ${description} -> Passed!${this.RESET}`);
    } else {
      this.failedTestsCounter++;
      this.totalTestsCounter++;
      console.log(
        `${this.RED}\n--------------------------------------------------`,
      );
      console.log(
        `${this.RED}Test ${this.totalTestsCounter} failed: ${description}`,
      );
      console.log(`${this.YELLOW}Expected: ${expected}`);
      console.log(`${this.RED}Result:   ${result}`);
      console.log(
        `--------------------------------------------------${this.RESET}\n`,
      );
    }
  }
  public static printSummary(): void {
    Reporter.printSummary();
  }
}

class Reporter {
  static printSummary(): void {
    console.log(
      `${Test.RESET}\n\n--------------------------------------------------`,
    );
    console.log(`${Test.BLUE}SUMMARY OF TESTS`);
    console.log(`${Test.YELLOW} Total: ${Test['totalTestsCounter']}`);
    console.log(`${Test.GREEN}Passed: ${Test['passedTestsCounter']}`);
    console.log(`${Test.RED}Failed: ${Test['failedTestsCounter']}`);
    console.log(
      `${Test.RESET}--------------------------------------------------\n\n`,
    );
  }
}
