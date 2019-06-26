# simple-state-channel
This code represents a simple payment channel. This is not a production ready code.


## Contract : StateChannel.sol

This contract enables two parties to open a state channel, performs multiple off chain transactions and settle them on chain. Settlement is delayed by 1000 blocks in order to let second party open a dispute. If second party is successfully able to prove a fraud of first party by presenting valid signature then bad actor is punished. 

1. **`Constructor`**: Deployer of the contract is sender. Approval for deposit amount must be done before deployment. After successful construction state channel is opened between sender and receiver. 

2. **`initiateSettlement`**: This function should be called when parties wants to settle their balances on chain. This function verifies the signature of both sender and reciever and declare that a on-chain settlement is initiated by emitting an event `SettlementInitiated`. Settlement is open for 1000 block duration for anyone to challenge. 

3. **`finalizeSettlement`**: Given an open settlement and no one has raised any dispute, settlement is finalized by calling this function. This function will pay receiver the amount and return remaining amount to sender.

4. **`openDispute`**: This function let any one open a dispute on an ongoing settlement. The recipient's and sender's signature are required. Bad actor will be punished for initiating wrong settlement. Wrong settlement here means any valid transaction with lower nonce which reflects higher balance for any party. 


## TypeScript: Transaction.ts

Transaction class can be used to sign and verify transactions. 

**`create`**: Create method allows signing a transaction and return a signature. 

**`verify`**: This method verifies a transaction signature and return boolean based on verification result. 
