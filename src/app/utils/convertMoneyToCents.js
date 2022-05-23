const convertMoneyToCents = async (value) => {
  try {
    const money = value * 100;

    return money;
  } catch (error) {
    throw new Error('Error when convert money to cents', error);
  }
};

export default convertMoneyToCents;
