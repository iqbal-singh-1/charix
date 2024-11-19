/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  ExecutableScript,
  ExecuteScriptParams,
  ExecuteScriptResult,
  Script,
  SignerProvider,
  HexString,
} from "@alephium/web3";
import { getContractByCodeHash } from "./contracts";
import { default as DonateFundsScriptJson } from "../DonateFunds.ral.json";
import { default as RaiseFundScriptJson } from "../RaiseFund.ral.json";
import { default as SpendFundScriptJson } from "../SpendFund.ral.json";

export const DonateFunds = new ExecutableScript<{
  token: HexString;
  tokenId: HexString;
  amount: bigint;
}>(Script.fromJson(DonateFundsScriptJson, "", []), getContractByCodeHash);

export const RaiseFund = new ExecutableScript<{
  token: HexString;
  amount: bigint;
}>(Script.fromJson(RaiseFundScriptJson, "", []), getContractByCodeHash);

export const SpendFund = new ExecutableScript<{
  token: HexString;
  tokenId: HexString;
  toAddress: Address;
  amount: bigint;
}>(Script.fromJson(SpendFundScriptJson, "", []), getContractByCodeHash);