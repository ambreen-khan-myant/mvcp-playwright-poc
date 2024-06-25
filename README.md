# MVCP - E2E Automation using Playwright - POC

## Running the tests on your local machine

### Step 1: Configure your environment

[VS Code](https://code.visualstudio.com/)
[Node](https://nodejs.org/en)
[Git](https://git-scm.com/download/mac)
[Homebrew](https://brew.sh/)
[Playwright extension (Microsoft)](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

### Step 2: Get the repo
Clone the repo on your local machine.

### Step 3: Install dependencies
Install the dependencies by running the below comannd:
```sh
npm install
```

### Running the tests on demand
To run the GitHub action morkflow manually:

1. Go to your GitHub repository.
2. Click on the "Actions" tab.
3. Find the "Playwright Tests" workflow.
4. Click on "Run workflow" dropdown button.
5. Choose the branch you want to run the workflow on and click "Run workflow".

## Data Handling: 

### Data handled using ENV File
Please use `.env` file for the sensitive information such as email & password. (You can rename the env.txt file provided in the repo to `.env` and populate it with your own data.) 

<!-- .env -->
EMAIL=
PASSWORD=

### Other Data
Other data will be populated using JSON files.

## Commands
* Run All Tests in Headless mode: `npx playwright test`
* Show Test Report: `npx playwright show-report`
* Run Tests in Headed Mode: `npx playwright test --headed`
* Start the interactive UI mode: `npx playwright test --ui`
* Runs the tests only on specific browser (e.g. Chrome): `npx playwright test --project=chromium`
* Runs the tests in a specific file (e.g. login.spec.js): `npx playwright test login`
* Runs the tests in debug mode: `npx playwright test --debug`



