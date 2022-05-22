import 'dotenv/config';
import Products from '../models/Products';

class ProductsController {
  async getAll(req, res) {
    try {
      const products = await Products.findAll();

      return res.json(products);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async getByFilter(req, res) {
    try {
      const { body } = req;
      const product = await Products.findAll({ where: body });

      return res.json(product);
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

      const product = await Products.create(req.body);

      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const product = await Products.findByPk(id);

      if (!product) {
        return res.status(400).json({ error: 'This product does not exists' });
      }

      await product.update(req.body);

      return res.json(product);
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
