import { Model, Sequelize } from 'sequelize';

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.DECIMAL(5, 2),
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.Categories, {
  //     foreignKey: 'categoryId',
  //     as: 'Category',
  //   });
  // }
}

export default Products;
