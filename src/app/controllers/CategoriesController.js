import 'dotenv/config';
import Categories from '../models/Categories';

class CategoriesController {
  async getAll(req, res) {
    try {
      const categories = await Categories.findAll();

      return res.json(categories);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async getByFilter(req, res) {
    try {
      const { body } = req;
      const category = await Categories.findAll({ where: body });

      return res.json(category);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async create(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(401).json('Incorrectly reported data.');
      }

      const category = await Categories.create(req.body);

      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const category = await Categories.findByPk(id);

      if (!category) {
        return res.status(400).json({ error: 'This category does not exists' });
      }

      const data = req.body;
      await category.update(data);

      return res.json(category);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async delete(req, res) {
    try {
      const category = await Categories.findByPk(req.params.id);

      if (!category) {
        return res
          .status(400)
          .json({ error: 'This category does not exists.' });
      }

      await category.destroy();

      return res.json({ success: 'Category successfully deleted.' });
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }
}

export default new CategoriesController();
