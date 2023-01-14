const puppeteer = require("puppeteer");
class AppBusiness {
  getProducts = async (url) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const url =
        "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops";
      await page.goto(url);

      const listProducts = await page.$$eval("div > .thumbnail", (elements) =>
        elements.map((e) => {
          return {
            image: e.querySelector(".img-responsive").href,
            productName: e.querySelector(".title").innerText,
            price: e.querySelector(".pull-right").innerText,
            description: e.querySelector(".description").innerText,
            reviews: e.querySelector(".ratings > .pull-right").innerText,
          };
        })
      );

      await browser.close();
      return listProducts;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

module.exports = AppBusiness;
