const transactions = require("./transactions");
const fn = require("./main");

console.log("=== TEST: FULL DATASET ===");

console.log(
    "getUniqueTransactionTypes:",
    fn.getUniqueTransactionTypes(transactions)
);

console.log(
    "calculateTotalAmount:",
    fn.calculateTotalAmount(transactions)
);

console.log(
    "calculateTotalAmountByDate (2019-01):",
    fn.calculateTotalAmountByDate(transactions, 2019, 1)
);

console.log(
    "getTransactionsByType (debit) count:",
    fn.getTransactionsByType(transactions, "debit").length
);

console.log(
    "getTransactionsInDateRange (2019-01-01 → 2019-01-31) count:",
    fn.getTransactionsInDateRange(
        transactions,
        "2019-01-01",
        "2019-01-31"
    ).length
);

console.log(
    "getTransactionsByMerchant (Cafe123):",
    fn.getTransactionsByMerchant(transactions, "Cafe123")
);

console.log(
    "calculateAverageTransactionAmount:",
    fn.calculateAverageTransactionAmount(transactions)
);

console.log(
    "getTransactionsByAmountRange (50–100) count:",
    fn.getTransactionsByAmountRange(transactions, 50, 100).length
);

console.log(
    "calculateTotalDebitAmount:",
    fn.calculateTotalDebitAmount(transactions)
);

console.log(
    "findMostTransactionMonth:",
    fn.findMostTransactionMonth(transactions)
);

console.log(
    "findMostDebitTransactionMonth:",
    fn.findMostDebitTransactionMonth(transactions)
);

console.log(
    "mostTransactionTypes:",
    fn.mostTransactionTypes(transactions)
);

console.log(
    "getTransactionsBeforeDate (before 2019-02-01) count:",
    fn.getTransactionsBeforeDate(transactions, "2019-02-01").length
);

console.log(
    "findTransactionById (id=10):",
    fn.findTransactionById(transactions, "10")
);

console.log(
    "mapTransactionDescriptions (first 3):",
    fn.mapTransactionDescriptions(transactions).slice(0, 3)
);

const emptyTransactions = [];

console.log("\n=== TEST: EMPTY ARRAY ===");

console.log(
    "getUniqueTransactionTypes:",
    fn.getUniqueTransactionTypes(emptyTransactions)
);

console.log(
    "calculateTotalAmount:",
    fn.calculateTotalAmount(emptyTransactions)
);

console.log(
    "calculateTotalAmountByDate:",
    fn.calculateTotalAmountByDate(emptyTransactions, 2019)
);

console.log(
    "getTransactionsByType (debit):",
    fn.getTransactionsByType(emptyTransactions, "debit")
);

console.log(
    "getTransactionsInDateRange:",
    fn.getTransactionsInDateRange(
        emptyTransactions,
        "2019-01-01",
        "2019-01-31"
    )
);

console.log(
    "getTransactionsByMerchant:",
    fn.getTransactionsByMerchant(emptyTransactions, "Cafe123")
);

console.log(
    "calculateAverageTransactionAmount:",
    fn.calculateAverageTransactionAmount(emptyTransactions)
);

console.log(
    "getTransactionsByAmountRange:",
    fn.getTransactionsByAmountRange(emptyTransactions, 50, 100)
);

console.log(
    "calculateTotalDebitAmount:",
    fn.calculateTotalDebitAmount(emptyTransactions)
);

console.log(
    "findMostTransactionMonth:",
    fn.findMostTransactionMonth(emptyTransactions)
);

console.log(
    "findMostDebitTransactionMonth:",
    fn.findMostDebitTransactionMonth(emptyTransactions)
);

console.log(
    "mostTransactionTypes:",
    fn.mostTransactionTypes(emptyTransactions)
);

console.log(
    "getTransactionsBeforeDate:",
    fn.getTransactionsBeforeDate(emptyTransactions, "2019-02-01")
);

console.log(
    "findTransactionById:",
    fn.findTransactionById(emptyTransactions, "1")
);

console.log(
    "mapTransactionDescriptions:",
    fn.mapTransactionDescriptions(emptyTransactions)
);

const singleTransaction = [transactions[0]];

console.log("\n=== TEST: SINGLE TRANSACTION ===");

console.log(
    "getUniqueTransactionTypes:",
    fn.getUniqueTransactionTypes(singleTransaction)
);

console.log(
    "calculateTotalAmount:",
    fn.calculateTotalAmount(singleTransaction)
);

console.log(
    "calculateTotalAmountByDate:",
    fn.calculateTotalAmountByDate(singleTransaction, 2019, 1, 1)
);

console.log(
    "getTransactionsByType:",
    fn.getTransactionsByType(singleTransaction, "debit")
);

console.log(
    "getTransactionsInDateRange:",
    fn.getTransactionsInDateRange(
        singleTransaction,
        "2019-01-01",
        "2019-01-01"
    )
);

console.log(
    "getTransactionsByMerchant:",
    fn.getTransactionsByMerchant(singleTransaction, "SuperMart")
);

console.log(
    "calculateAverageTransactionAmount:",
    fn.calculateAverageTransactionAmount(singleTransaction)
);

console.log(
    "getTransactionsByAmountRange:",
    fn.getTransactionsByAmountRange(singleTransaction, 50, 150)
);

console.log(
    "calculateTotalDebitAmount:",
    fn.calculateTotalDebitAmount(singleTransaction)
);

console.log(
    "findMostTransactionMonth:",
    fn.findMostTransactionMonth(singleTransaction)
);

console.log(
    "findMostDebitTransactionMonth:",
    fn.findMostDebitTransactionMonth(singleTransaction)
);

console.log(
    "mostTransactionTypes:",
    fn.mostTransactionTypes(singleTransaction)
);

console.log(
    "getTransactionsBeforeDate:",
    fn.getTransactionsBeforeDate(singleTransaction, "2019-02-01")
);

console.log(
    "findTransactionById:",
    fn.findTransactionById(singleTransaction, "1")
);

console.log(
    "mapTransactionDescriptions:",
    fn.mapTransactionDescriptions(singleTransaction)
);