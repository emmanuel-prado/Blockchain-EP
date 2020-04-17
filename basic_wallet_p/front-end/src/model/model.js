class Wallet {
  constructor(wallet, id, balance, transactions) {
    this.wallet = wallet;
    this.id = id;
    this.balance = balance;
    this.transactions = transactions;
  }

  new_transaction(sender, recipient, amount) {
    this.sender = sender;
    this.recipient = recipient;
    this.amount = amount;
  }
}

class Blockchain {
  constructor() {
    this.chain = [];
    this.new_block();
  }

  new_block(proof, previous_hash = null) {
    /* 
        Create a new Block in the Blockchain

        A block should have:
        * Index
        * Timestamp
        * List of current transactions
        * The proof used to mine this block
        * The hash of the previous block

        :param proof: <int> The proof given by the Proof of Work algorithm
        :param previous_hash: (Optional) <str> Hash of previous Block
        :return: <dict> New Block
        */
    // declare a variable to date new block is created
    date = new Date();

    let block = {
      index: this.chain.length() + 1,
      timestamp: date,
      proof: proof,
      previous_hash: previous_hash || this.hash(this.last_block),
    };

    // add chain to end of block
    this.chain.push(block);
    // return newly created block
    return block;
  }
}
