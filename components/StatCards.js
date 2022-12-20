// TODO Turn the Gas tracker into gwei
// TODO Format large numbers like the market cap and the total tx

import React, { useState, useEffect } from "react";
import { Network, Alchemy, Utils } from "alchemy-sdk";

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export default function StatCards({ price, market }) {
  const [gasPrice, setgasPrice] = useState("");
  const [blockNumber, setBlockNumber] = useState("");

  useEffect(() => {
    async function fetchGasPrice() {
      const gas = (await alchemy.core.getGasPrice()).toString();
      setgasPrice(gas);
    }
    async function fetchBlockNumber() {
      const block = await (await alchemy.core.getBlockNumber()).toString();
      setBlockNumber(block);
    }

    fetchGasPrice();
    fetchBlockNumber();
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 mt-4">
      <div className=" bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4  border-base3 text-gray-200 font-medium group">
        <div
          className="flex justify-center items-center w-14 h-14 bg-base rounded-full  transform group-hover:rotate-12 group-hover:w-16 transition-all duration-300 ease-linear
    cursor-pointer "
        >
          <svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-current text-primary transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">${price}</p>
          <p>ETH Price</p>
        </div>
      </div>
      <div className="bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4  border-base3 text-gray-200 font-medium group">
        <div
          className="flex justify-center items-center w-14 h-14 bg-base rounded-full  transform group-hover:rotate-12 group-hover:w-16 transition-all duration-300 ease-linear
    cursor-pointer "
        >
          <svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-current text-primary transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            ></path>
          </svg>
        </div>
        <div className="text-right">
          <p className="text-l">${market}</p>

          <p>Market Cap</p>
        </div>
      </div>
      <div className=" bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4  border-base3 text-gray-200 font-medium group">
        <div
          className="flex justify-center items-center w-14 h-14 bg-base rounded-full  transform group-hover:rotate-12 group-hover:w-16 transition-all duration-300 ease-linear
    cursor-pointer "
        >
          <svg
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-current text-primary transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </div>
        <div className="text-right">
          <p className="text-l">{gasPrice}</p>
          {/* {Utils.formatUnits(gasPrice, "gwei")}  */}
          <p>Gas Price</p>
        </div>
      </div>
      <div className=" bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4  border-base3 text-gray-200 font-medium group">
        <div
          className="flex justify-center items-center w-14 h-14 bg-base rounded-full  transform group-hover:rotate-12 group-hover:w-16 transition-all duration-300 ease-linear
    cursor-pointer "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="30"
            height="30"
            className="stroke-current text-primary transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">{blockNumber}</p>
          <p>Total Blocks</p>
        </div>
      </div>
    </div>
  );
}
