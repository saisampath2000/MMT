const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Transactions = new Schema({
    transactionid: {
        type: String
    },
    transactionamount: {
        type: String
    },
});
module.exports = { Transaction: mongoose.model('Transaction', Transactions) }