const AppBusiness = require("../business/appBusiness");

class AppController {
  getAllProducts = async (req, res) => {
    try {
      const appBusiness = new AppBusiness();
      const listProducts = await appBusiness.getProducts();
      
      res.status(200).send({ notebooks: listProducts });
    } catch (error) {
      console.warn(error);
      res.status(error.StatusCode || 400).send(error.message);
    }
  };
}

module.exports = AppController;
