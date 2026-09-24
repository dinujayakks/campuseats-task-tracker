// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

console.log(`CampusEats has ${tasks.length} open tasks`);

const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (!Number.isFinite(price) || price < 0) {
    throw new Error("price must be a finite number greater than or equal to 0");
  }

  if (!Number.isInteger(quantity) || quantity < 0) {
    throw new Error("quantity must be an integer greater than or equal to 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

console.log("Regular total:", calculateTotal(1000, 2, "regular"));
console.log("VIP total:", calculateTotal(1000, 2, "vip"));