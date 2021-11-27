let expenseArray = [];

const homepage = $('#homepage')

//this object for HTML sections only
let section = {
    login: $('#login-signup'),
    expenseForm: $('#expense-form-fieldset'),
    calculator: $('#calculator')
}

//DEFAULT html state
function defaultState() {
    $.map(section, (section) => {
        section.hide()
    });
};

//RENDERS or HIDES html on BUTTON CLICKS
$('#start-login-signup').click(() => {
    homepage.hide();
    section.login.show();
});

$('#start-expense-tracker').click(() => {
    homepage.hide();
    section.expenseForm.show();
});

$('#start-calculator').click(() => {
    homepage.hide();
    section.calculator.show();
});

$('.go-back-home').click(() => {
    defaultState();
    homepage.show();
})

// listens to the expense form only
$("#expense-form-add-btn").click((evt) => {
    console.log('add button')

    evt.preventDefault();

    //this will render the html for a new row of form elements on an add button click
    let inputDate = $("<input>", {
        class: "expense-input expense-date",
        type: "date",
        placeholder: "Date Of Expense"
    });
    let inputGainLoss = $("<input>", {
        class: "expense-input expense-gain-loss",
        type: "boolean",
        placeholder: "Gain/Loss",
        list: "gain-loss"
    });
    let inputDescription = $("<input>", {
        class: "expense-input expense-description",
        type: "text",
        placeholder: "Description Of Expense"
    });
    let inputAmount = $("<input>", {
        class: "expense-input expense-amount",
        type: "number",
        placeholder: "Amount - Or +"
    });
    let deleteBtn = $("<button>", {
        text: "X",
        onclick: "Delete(this);"
    })
    let newInputRow = document.createElement('div');

    $(newInputRow).append(inputDate, inputGainLoss, inputDescription, inputAmount, deleteBtn)

    $('#expense-form').append(newInputRow)
});

// COLLECTS expense form data and pushes it into an array.
$(".expense-input").each(function () {
    let userInputs = $(this).val().trim();
    expenseArray.push(userInputs);

    console.log(expenseArray);
})

//LOGIN/SIGNUP SCRIPT- might move to its own file

// $('#').val().trim()
//login
let loginUsername = $('#username-login').val().trim()
let loginPassword = $('#password-login').val().trim()

$('#login-btn').click(() => {
    if(loginUsername && loginPassword) {

    }

}) 

//signup
let signupUsername = $('#username-signup').val().trim()
let signupEmail = $('#email-signup').val().trim()
let signupPassword = $('#password-signup').val().trim()

$('#signup-btn').click(() => {
    if(signupUsername && signupEmail && signupPassword) {

    }

}) 

//function CALLS
defaultState();