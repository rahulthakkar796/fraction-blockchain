/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Signature, SignatureInterface } from "../Signature";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Signature.AdditionalMint",
        name: "mint",
        type: "tuple",
      },
    ],
    name: "_hashAdditionalMint",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "issuer",
            type: "address",
          },
          {
            internalType: "string",
            name: "deedNo",
            type: "string",
          },
          {
            internalType: "string",
            name: "assetID",
            type: "string",
          },
          {
            internalType: "string",
            name: "issuerID",
            type: "string",
          },
          {
            internalType: "string",
            name: "projectID",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Signature.NFTMint",
        name: "nft",
        type: "tuple",
      },
    ],
    name: "_hashNFT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Signature.Permit",
        name: "permit",
        type: "tuple",
      },
    ],
    name: "_hashPermit",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Signature.AdditionalMint",
        name: "mint",
        type: "tuple",
      },
    ],
    name: "_verifyAdditionalMint",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "issuer",
            type: "address",
          },
          {
            internalType: "string",
            name: "deedNo",
            type: "string",
          },
          {
            internalType: "string",
            name: "assetID",
            type: "string",
          },
          {
            internalType: "string",
            name: "issuerID",
            type: "string",
          },
          {
            internalType: "string",
            name: "projectID",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Signature.NFTMint",
        name: "nft",
        type: "tuple",
      },
    ],
    name: "_verifyNFT",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Signature.Permit",
        name: "permit",
        type: "tuple",
      },
    ],
    name: "_verifyPermit",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class Signature__factory {
  static readonly abi = _abi;
  static createInterface(): SignatureInterface {
    return new utils.Interface(_abi) as SignatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Signature {
    return new Contract(address, _abi, signerOrProvider) as Signature;
  }
}
