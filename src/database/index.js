import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Products from '../app/models/Products';
import Categories from '../app/models/Categories';

const models = [Products, Categories];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );

    console.log('Database connection sucessful!');
  }
}

export default new Database();
