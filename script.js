let savedPeople = localStorage.getItem("peopleData");
let savedExpenses = localStorage.getItem("expenseData");

let people = savedPeople ? JSON.parse(savedPeople) : [];
let expenses = savedExpenses ? JSON.parse(savedExpenses) : [];

let addPersonBtn = document.getElementById("addPersonBtn");
let personInput = document.getElementById("personInput");
let peopleList = document.getElementById("peopleList");

let addExpenseBtn = document.getElementById("addExpenseBtn");
let expenseTitle = document.getElementById("expenseTitle");
let expenseAmount = document.getElementById("expenseAmount");

let transactionList = document.getElementById("transactionList");
let summaryList = document.getElementById("summaryList");

renderPeople();
renderExpenses();
updateSummary();

addPersonBtn.onclick = function () {
    let personName = personInput.value.trim();

    if (personName === "") {
        alert("Please enter a name");
        return;
    }

    people.push(personName);

    saveData();
    renderPeople();
    updateSummary();

    personInput.value = "";
};

addExpenseBtn.onclick = function () {
let titleValue = expenseTitle.value.trim();
    let amountValue = expenseAmount.value;

    if (titleValue === "" || amountValue === "") {
        alert("Fill all expense details");
        return;
    }

    if (people.length === 0) {
        alert("Add people first");
        return;
    }

    let expenseData = {
        title: titleValue,
        amount: Number(amountValue)
    };

    expenses.push(expenseData);

    saveData();
    renderExpenses();
    updateSummary();

    expenseTitle.value = "";
    expenseAmount.value = "";
};
