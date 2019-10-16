let myAccount = {
  name: "surya",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = myAccount.expenses + amount;
  console.log(account.expenses);
};
let addIncome = function(account, income) {
  account.income = account.income + income;
  console.log(account.income);
};

let resetCoount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

let accountSummaray = function(account) {
  let balance = account.income - account.expenses;
  return `acoount for ${account.name} has balance $${balance} $${account.income} is income $${account.expenses} is expenses`;
};
addIncome(myAccount, 2000);

addExpense(myAccount, 160);

console.log(accountSummaray(myAccount));
resetCoount(myAccount);
console.log(accountSummaray(myAccount));

// addExpense(myAccount, 2.25);
