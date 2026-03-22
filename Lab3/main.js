
 /* =========================
   FUNCTIONS
   ========================= */

/**
 * Returns array of unique transaction types.
 * @param {Transaction[]} transactions
 * @returns {string[]}
 */
function getUniqueTransactionTypes(transactions) {
  return Array.from(
    new Set(transactions.map(tx => tx.transaction_type))
  );
}

/**
 * Calculates total amount of all transactions.
 * @param {Transaction[]} transactions
 * @returns {number}
 */
function calculateTotalAmount(transactions) {
  return transactions.reduce(
    (total, tx) => total + tx.transaction_amount,
    0
  );
}

/**
 * Calculates total amount filtered by date.
 * year, month, day are optional.
 * @param {Transaction[]} transactions
 * @param {number} [year]
 * @param {number} [month] - 1..12
 * @param {number} [day]
 * @returns {number}
 */
function calculateTotalAmountByDate(transactions, year, month, day) {
  return transactions.reduce((total, tx) => {
    const date = new Date(tx.transaction_date);

    if (year && date.getFullYear() !== year) return total;
    if (month && date.getMonth() + 1 !== month) return total;
    if (day && date.getDate() !== day) return total;

    return total + tx.transaction_amount;
  }, 0);
}

/**
 * Returns transactions by type.
 * @param {Transaction[]} transactions
 * @param {"debit"|"credit"} type
 * @returns {Transaction[]}
 */
function getTransactionsByType(transactions, type) {
  return transactions.filter(tx => tx.transaction_type === type);
}

/**
 * Returns transactions in date range [startDate, endDate].
 * @param {Transaction[]} transactions
 * @param {string} startDate
 * @param {string} endDate
 * @returns {Transaction[]}
 */
function getTransactionsInDateRange(transactions, startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return transactions.filter(tx => {
    const txDate = new Date(tx.transaction_date);
    return txDate >= start && txDate <= end;
  });
}

/**
 * Returns transactions by merchant name.
 * @param {Transaction[]} transactions
 * @param {string} merchantName
 * @returns {Transaction[]}
 */
function getTransactionsByMerchant(transactions, merchantName) {
  return transactions.filter(tx => tx.merchant_name === merchantName);
}

/**
 * Calculates average transaction amount.
 * Returns 0 if array is empty.
 * @param {Transaction[]} transactions
 * @returns {number}
 */
function calculateAverageTransactionAmount(transactions) {
  if (transactions.length === 0) return 0;
  return calculateTotalAmount(transactions) / transactions.length;
}

/**
 * Returns transactions with amount in range.
 * @param {Transaction[]} transactions
 * @param {number} minAmount
 * @param {number} maxAmount
 * @returns {Transaction[]}
 */
function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
  return transactions.filter(
    tx => tx.transaction_amount >= minAmount &&
          tx.transaction_amount <= maxAmount
  );
}

/**
 * Calculates total debit amount.
 * @param {Transaction[]} transactions
 * @returns {number}
 */
function calculateTotalDebitAmount(transactions) {
  return transactions
    .filter(tx => tx.transaction_type === "debit")
    .reduce((total, tx) => total + tx.transaction_amount, 0);
}

/**
 * Returns month (YYYY-MM) with most transactions.
 * @param {Transaction[]} transactions
 * @returns {string|null}
 */
function findMostTransactionMonth(transactions) {
  if (transactions.length === 0) return null;

  const months = {};

  transactions.forEach(tx => {
    const month = tx.transaction_date.slice(0, 7);
    months[month] = (months[month] || 0) + 1;
  });

  let maxMonth = null;
  let maxCount = 0;

  for (let month in months) {
    if (months[month] > maxCount) {
      maxCount = months[month];
      maxMonth = month;
    }
  }

  return maxMonth;
}

/**
 * Returns month (YYYY-MM) with most debit transactions.
 * @param {Transaction[]} transactions
 * @returns {string|null}
 */
function findMostDebitTransactionMonth(transactions) {
  const months = {};

  transactions.forEach(tx => {
    if (tx.transaction_type === "debit") {
      const month = tx.transaction_date.slice(0, 7);
      months[month] = (months[month] || 0) + 1;
    }
  });

  let maxMonth = null;
  let maxCount = 0;

  for (let month in months) {
    if (months[month] > maxCount) {
      maxCount = months[month];
      maxMonth = month;
    }
  }

  return maxMonth;
}

/**
 * Compares number of debit and credit transactions.
 * @param {Transaction[]} transactions
 * @returns {"debit"|"credit"|"equal"}
 */
function mostTransactionTypes(transactions) {
  let debit = 0;
  let credit = 0;

  transactions.forEach(tx => {
    if (tx.transaction_type === "debit") debit++;
    if (tx.transaction_type === "credit") credit++;
  });

  if (debit > credit) return "debit";
  if (credit > debit) return "credit";
  return "equal";
}

/**
 * Returns transactions before given date.
 * @param {Transaction[]} transactions
 * @param {string} date
 * @returns {Transaction[]}
 */
function getTransactionsBeforeDate(transactions, date) {
  const targetDate = new Date(date);
  return transactions.filter(
    tx => new Date(tx.transaction_date) < targetDate
  );
}

/**
 * Finds transaction by ID.
 * @param {Transaction[]} transactions
 * @param {string} id
 * @returns {Transaction|undefined}
 */
function findTransactionById(transactions, id) {
  return transactions.find(tx => tx.transaction_id === id);
}

/**
 * Returns array of transaction descriptions.
 * @param {Transaction[]} transactions
 * @returns {string[]}
 */
function mapTransactionDescriptions(transactions) {
  return transactions.map(tx => tx.transaction_description);
}

 module.exports = {
   getUniqueTransactionTypes,
   calculateTotalAmount,
   calculateTotalAmountByDate,
   getTransactionsByType,
   getTransactionsInDateRange,
   getTransactionsByMerchant,
   calculateAverageTransactionAmount,
   getTransactionsByAmountRange,
   calculateTotalDebitAmount,
   findMostTransactionMonth,
   findMostDebitTransactionMonth,
   mostTransactionTypes,
   getTransactionsBeforeDate,
   findTransactionById,
   mapTransactionDescriptions,
 };
