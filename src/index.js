import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App'
import { Blockchain, Transaction } from './utlits/blockChain'


let codeCoin = new Blockchain();
codeCoin.createTransaction(new Transaction('address1', 'address2', 100));
codeCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log(codeCoin)

console.log('\n Starting the miner...');
codeCoin.minePendingTransactions('michiel-address');


console.log('\nBalance of Michiel is', codeCoin.getBalanceOfAddress('michiel-address'));

console.log('\n Starting the miner again...');
codeCoin.minePendingTransactions('michiel-address');

console.log('\nBalance of Michiel is', codeCoin.getBalanceOfAddress('michiel-address'));

ReactDOM.render(<App />, document.getElementById('app'));