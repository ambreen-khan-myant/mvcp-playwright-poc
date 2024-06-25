class BasePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate(path) {
      await this.page.goto(`https://scwp.dev.skiinserver.com${path}`);
    }
  }
  
  module.exports = { BasePage };