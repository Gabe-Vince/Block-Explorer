import { Network, Alchemy, Utils } from "alchemy-sdk";

export const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);

export const getBlock = async (_blockNumber) =>
  await alchemy.core.getBlock(_blockNumber);

export const getBlockWithTransactions = async (_blockNumber) =>
  await alchemy.core.getBlockWithTransactions(_blockNumber);

export const getLatestBlockNumber = async () =>
  await alchemy.core.getBlockNumber();
