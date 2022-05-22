const convertCentsToMoney = async (products, isUpdate = false) => {
  try {
    if (isUpdate) {
      products.price = products.price / 60;

      return products;
    }

    for await (const product of products) {
      product.price = product.price / 60;
    }

    return products;
  } catch (error) {
    throw new Error('Error when convert cents to money', error);
  }
};

export default convertCentsToMoney;
