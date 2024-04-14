import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GNP: 0.76,
    INR: 74.54,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter your currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GNP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter to currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GNP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter your amount",
        type: 'number',
    }
]);
let fromAmount = currency[user_answer.From];
let toAmount = currency[user_answer.To];
let amount = user_answer.amount;
let baseCurrency = amount / fromAmount;
let convertedAmount = baseCurrency * toAmount;
console.log(convertedAmount);
