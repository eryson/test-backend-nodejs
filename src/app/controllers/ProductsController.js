import 'dotenv/config';
import Products from '../models/Products';
import Categories from '../models/Categories';
import convertMoneyToCents from '../utils/convertMoneyToCents';
import convertCentsToMoney from '../utils/convertCentsToMoney';

class ProductsController {
  async getAll(req, res) {
    try {
      const products = await Products.findAll();
      if (!products) return res.json(products);

      const newProducts = await convertCentsToMoney(products);

      return res.json(newProducts);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async getByFilter(req, res) {
    try {
      const { body } = req;

      const products = await Products.findAll({ where: body });
      if (!products) return res.json(products);

      const newProducts = await convertCentsToMoney(products);

      return res.json(newProducts);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async create(req, res) {
    try {
      const { title, description, price, categoryId } = req.body;

      if (!title || !description || !price || !categoryId) {
        return res.status(401).json('Incorrectly reported data.');
      }

      const category = await Categories.findOne({ where: { id: categoryId } });

      if (!category) {
        return res.status(400).json({ error: 'This category does not exists' });
      }

      const newPrice = await convertMoneyToCents(price);

      const product = await Products.create({
        title,
        description,
        price: newPrice,
        categoryId,
      });

      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { price } = req.body;
      const product = await Products.findByPk(id);

      if (!product) {
        return res.status(400).json({ error: 'This product does not exists' });
      }

      if (price) req.body.price = await convertMoneyToCents(price);

      await product.update(req.body);
      const newProduct = await convertCentsToMoney(product, true);

      console.log(newProduct);

      return res.json(newProduct);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Products.findByPk(id);

      if (!product) {
        return res.status(400).json({ error: 'This product does not exists.' });
      }

      await product.destroy();

      return res.json({ success: 'Product successfully deleted.' });
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }
}

export default new ProductsController();
