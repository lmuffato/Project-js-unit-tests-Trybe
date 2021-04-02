/* eslint-disable max-len */

const orderFromMenu = (obj, request) => obj.consumption.push(request);
const calculateBill = (obj) => {
  const menuItems = { ...obj.fetchMenu().food, ...obj.fetchMenu().drinks };
  const tax = 1.1;
  const bill = tax * obj.consumption.reduce((acc, cur) => acc + menuItems[cur], 0);
  return bill;
};
const createMenu = (menu) => {
  const obj = {
    fetchMenu: () => menu,
    consumption: [],
    order: (item) => orderFromMenu(obj, item),
    pay: () => calculateBill(obj),
  };
  return obj;
};

module.exports = createMenu;
