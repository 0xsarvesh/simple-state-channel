/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractOptions, Options } from "web3-eth-contract";
import { Block } from "web3-eth";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { Callback, TransactionObject } from "./types";

export class StateChannel extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    closingTransaction(): TransactionObject<{
      nonce: string;
      recipientBalance: string;
      stateChannel: string;
      finalizationBlock: string;
      0: string;
      1: string;
      2: string;
      3: string;
    }>;

    getTransactionHash(
      _nonce: number | string,
      _balance: number | string
    ): TransactionObject<string>;

    initiateCloseChannel(
      _recipientBalance: number | string,
      _nonce: number | string,
      _recipientSignedMessage: (string | number[])[],
      _senderSignedMessage: (string | number[])[]
    ): TransactionObject<void>;

    finalizeCloseChannel(
      _transactionHash: string | number[]
    ): TransactionObject<void>;

    openDispute(
      _recipientBalance: number | string,
      _nonce: number | string,
      _recipientSignedMessage: (string | number[])[],
      _senderSignedMessage: (string | number[])[]
    ): TransactionObject<void>;

    recipient(): TransactionObject<string>;
    sender(): TransactionObject<string>;
    DISPUTE_PERIOD(): TransactionObject<string>;
    deposit(): TransactionObject<string>;
    token(): TransactionObject<string>;
  };
  events: {
    ChannelOpened(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    ChannelClosingInitiated(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    ChannelClosed(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
