/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { WhiteList, WhiteListInterface } from "../WhiteList";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_issuer",
        type: "address",
      },
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_issuer",
        type: "address",
      },
    ],
    name: "removeFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class WhiteList__factory {
  static readonly abi = _abi;
  static createInterface(): WhiteListInterface {
    return new utils.Interface(_abi) as WhiteListInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WhiteList {
    return new Contract(address, _abi, signerOrProvider) as WhiteList;
  }
}
