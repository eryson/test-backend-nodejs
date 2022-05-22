import 'dotenv/config';
import Products from '../models/Products';

class ProductsController {
  async getAll(req, res) {
    try {
      const smsLogs = await Products.findAll();

      return res.json(smsLogs);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async getById(req, res) {
    try {
      const smsLog = await Products.findByPk(req.params.id);

      if (!smsLog) {
        return res.status(400).json({ error: 'This sms log does not exists' });
      }

      return res.json(smsLog);
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async create(req, res) {
    try {
      const { data } = req.body;

      if (!data) {
        return res.status(401).json('Data incorrected formatted.');
      }

      await Products.bulkCreate(data);

      return res.status(200).json(data);
    } catch (error) {
      console.log('### Error when create ###', error.response.data);
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async update(req, res) {
    try {
      const smslog = await Products.findByPk(req.params.id);

      if (!smslog) {
        return res.status(400).json({ error: 'This sms log does not exists' });
      }

      const data = req.body;
      await smslog.update(data);

      return res.json(smslog);
    } catch (error) {
      console.log('### Error when update ###', error.response.data);
      return res.status(500).json(`Error: ${error.message}`);
    }
  }

  async delete(req, res) {
    try {
      const smsLog = await Products.findByPk(req.params.id);

      if (!smsLog) {
        return res.status(400).json({ error: 'This sms log does not exists.' });
      }

      await smsLog.destroy();

      return res.json({ success: 'SMS log successfully deleted.' });
    } catch (error) {
      return res.status(500).json(`Error: ${error.message}`);
    }
  }
}

export default new ProductsController();
