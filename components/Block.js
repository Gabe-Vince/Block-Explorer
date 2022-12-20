import { getTimeSince } from "../utils/convertTimeStamp";

import React from "react";

export default function Block({ blockObject }) {
  return (
    <div className=" flex  pt-2 w-full bg-gray-800  mx-1 rounded shadow-lg border-primary border border-l-8 my-1">
      <div className="flex flex-col w-full">
        <a
          href={`/block/${blockObject.number}`}
          className="text-lg text-primary px-4"
        >
          {blockObject.number}
        </a>
        <div className=" bg-gray-600 flex w-full flex-full flex-col">
          <div className="flex flex-wrap items-center px-4 py-2">
            <span className="text-primary text-sm relative w-full max-w-full flex-grow flex-1">
              {blockObject.transactions.length} Transactions
            </span>
            <span className="text-sm text-primary text-right relative w-full max-w-full flex-grow flex-1 ">
              {getTimeSince(blockObject.timestamp)}
            </span>
          </div>
          <div className="flex flex-wrap items-center px-4 py-1">
            <span className="text-primary text-sm relative w-full max-w-full flex-grow flex-1">
              Validator
            </span>
            <a className="text-sm text-primary text-right relative w-full max-w-full flex-grow flex-1">
              {blockObject.miner}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
