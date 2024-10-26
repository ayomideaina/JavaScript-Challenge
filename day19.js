// A closure is a function having access to the parent scope, 
// even after the parent function has closed.

// Global variables can be made local (private) with closures.
  
// Task 1:
  function outerFunction() {
    let count = 5;

    function toIncrease() {
      count++;
      console.log(`Increased: ${count}`);
    }
  
    function toDecrease() {
      count--;
      console.log(`Decreased: ${count}`);
    }
  
    function reset() {
      count = 5;
      console.log(`Reset: ${count}`);
    }
  
    // Return an object that gives access to the three functions
    return {
      toIncrease,
      toDecrease,
      reset
    };
  }
  
  const counter = outerFunction();
  
  counter.toIncrease(); 
  counter.toIncrease(); 
  counter.toDecrease(); 
  counter.reset();     
  
// Task 2:
  function personAccount() {
    let firstname = 'Loveth';
    let lastname = 'Martins';
    let incomes = new Set(); 
    let expenses = new Set(); 

    function totalIncome() {
      let total = 0;
      incomes.forEach(income => total += income.amount);
      return total;
    }
  
    function totalExpense() {
      let total = 0;
      expenses.forEach(expense => total += expense.amount);
      return total;
    }
  
    function accountInfo() {
      return `Name: ${firstname} ${lastname}, Total Income: $${totalIncome()}, Total Expenses: $${totalExpense()}`;
    }
  
    function addIncome(description, amount) {
      incomes.add({ description, amount });
    }
  
    function addExpense(description, amount) {
      expenses.add({ description, amount });
    }

    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      totalIncome,
      totalExpense,
      accountInfo,
      addIncome,
      addExpense,
      accountBalance
    };
  }
  
  const account = personAccount();
  account.addIncome('Salary', 30000);
  account.addIncome('Freelance Work', 15000);
  account.addExpense('Rent', 10000);
  account.addExpense('Groceries', 8000);
  
  console.log(account.accountInfo()); 
  console.log('Account Balance: $' + account.accountBalance());
  

  