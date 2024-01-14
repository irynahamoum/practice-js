function mcDonaldsWindow() {
  let order = 0;
  const getOrder = (handCallback) => {
    handCallback(order);
    order += 1;
  };
  return getOrder;
}
window.getOrder = mcDonaldsWindow();

function testCallback() {
  const price = 50;
  let amountOfOrders = 0;
  window.getOrder((orders) => {
    amountOfOrders = orders;
  });
  return price * amountOfOrders;
}
window.testCallback = testCallback;

// function well(x) {
//   const y = x.flat();
//   let sumGood = 0;

//   for (let i = 0; i <= y.length; i++) {
//     if (y[i].toLowerCase === "good") {
//       sumGood += i;
//     }
//     if (sumGood === 0) {
//       return "Fail!";
//     } else if (sumGood === 1 || sumGood === 2) {
//       return "Publish!";
//     } else if (sumGood > 2) {
//       return "I smell a series!";
//     }
//   }
// }
