export class Test {
    static passedTestsCounter = 0;
    static failedTestsCounter = 0;
    static totalTestsCounter = 0;
    static GREEN = '\x1b[32m';
    static RED = '\x1b[31m';
    static YELLOW = '\x1b[33m';
    static BLUE = '\x1b[34m';
    static RESET = '\x1b[0m';
    static getPassedTestsCounter() {
        return this.passedTestsCounter;
    }
    static getFailedTestsCounter() {
        return this.failedTestsCounter;
    }
    static getTotalTestsCounter() {
        return this.totalTestsCounter;
    }
    static assertEquals(expected, result, description = '') {
        const error = new Error();
        if (expected === result) {
            this.passedTestsCounter++;
            this.totalTestsCounter++;
            console.log(`${this.GREEN}\u2713 ${description} -> Passed!${this.RESET}`);
        }
        else {
            this.failedTestsCounter++;
            this.totalTestsCounter++;
            console.log(`${this.RED}\n--------------------------------------------------`);
            console.log(`${this.RED}Test ${this.totalTestsCounter} failed: ${description}`);
            console.log(`${this.YELLOW}Expected: ${expected}`);
            console.log(`${this.RED}Result:   ${result}`);
            console.log(`--------------------------------------------------${this.RESET}\n`);
        }
    }
    static printSummary() {
        Reporter.printSummary();
    }
}
class Reporter {
    static printSummary() {
        console.log(`${Test.RESET}\n\n--------------------------------------------------`);
        console.log(`${Test.BLUE}SUMMARY OF TESTS`);
        console.log(`${Test.YELLOW} Total: ${Test['totalTestsCounter']}`);
        console.log(`${Test.GREEN}Passed: ${Test['passedTestsCounter']}`);
        console.log(`${Test.RED}Failed: ${Test['failedTestsCounter']}`);
        console.log(`${Test.RESET}--------------------------------------------------\n\n`);
    }
}
