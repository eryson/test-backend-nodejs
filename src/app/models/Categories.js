import { Model, Sequelize } from 'sequelize';

class Categories extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: Sequelize.STRING, allowNull: false },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Categories;
