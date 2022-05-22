import { Model, Sequelize } from 'sequelize';

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.STRING, allowNull: true },
        price: { type: Sequelize.INTEGER, allowNull: false },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Categories, {
      foreignKey: 'categoryId',
      as: 'Category',
    });
  }
}

export default Products;
