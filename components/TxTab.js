import React, { useEffect, useState } from "react";
import TxCard from "./TxCard";
import {
  getLatestBlockNumber,
  getBlockTransactionReceipts,
} from "../utils/alchemySDK";

import * as ether from "ethers";

export default function TxTab() {
  const [blockTx, setBlockTx] = useState();

  useEffect(() => {
    async function setBlockTransactions() {
      const obj = await getLatestBlockNumber();
      const num = parseInt(obj);

      const hex = ether.utils.hexValue(num);

      const _blockTransactions = await getBlockTransactionReceipts({
        blockNumber: hex,
      });

      if (_blockTransactions) {
        const length = _blockTransactions.receipts.length;
        setBlockTx(
          _blockTransactions.receipts.slice(length - 3, length).reverse()
        );
      }
    }

    setBlockTransactions();
  }, [getLatestBlockNumber, getBlockTransactionReceipts]);

  return (
    <div className="mx-4 mt-4 flex flex-col min-w-0 mb-4  break-words bg-gray-800  shadow-lg rounded p-1">
      <div className="rounded-t mb-0 px-0 border-0">
        <div className="flex flex-wrap items-center px-4 py-2">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-gray-200">
              Latest Transactions
            </h3>
          </div>
          <div className="relative w-full max-w-full flex-grow flex-1 text-right">
            <button
              className="bg-base2 text-gray-200 active:bg-base3  active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              All Transactions
            </button>
          </div>
        </div>
        {blockTx
          ? blockTx.map((tx, i) => <TxCard key={i} transaction={tx} />)
          : null}
      </div>
    </div>
  );
}
