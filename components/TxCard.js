import { Utils } from "alchemy-sdk";
import React, { useState } from "react";
import { getTimeSince } from "../utils/convertTimeStamp";

export default function TxCard({ transaction }) {
  const [block, setBlock] = useState();
  return (
    <div className="bg-drkgrey rounded-sm w-full  border-2 outline-1 border-white border-l-0 flex flex-col mt-3 ">
      <div className="mr-2 flex items-center justify-between h-full">
        <div className="bg-base rounded-sm mr-2 items-center justify-center border-r-2 border-r-white border-l-8 border-primary w-1/5 h-full p-5">
          <h1 className="text-xl font-bold text-white text-center">
            Transaction
          </h1>
          <p className="text-l text-primary text-center">Success</p>
        </div>
        <div className="flex flex-col w-3/5 text-primary text-xs ">
          <span className="flex my-1 text-x space-x-1">
            <a>{transaction.transactionHash}</a>
            <div>Transfer</div>
          </span>
          <span className="my-1">
            <a>{transaction.from}.</a> →<a> {transaction.to}</a>
          </span>
          <span className="my-1 space-x-3 text-base2">
            <span>
              {" "}
              {Utils.formatEther(transaction.gasUsed)} ETH (
              {Utils.formatUnits(transaction.gasUsed, "gwei")} Gwei)
            </span>
          </span>
        </div>
        <div className="flex flex-col text-base text-primary mx-2 w-1/5 text-right">
          <span>
            <a className="text-primary">
              Block #{parseInt(transaction.blockNumber)}
            </a>
          </span>
          <span>{getTimeSince(transaction.timestamp)}</span>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="bg-drkgrey rounded-xl mx-3 w-auto pr-2 mt-3 border-2 border-white">
      <div className="mr-2 flex ">
        <div className="bg-base w-1/4 rounded-l mr-2 items-center justify-center border-2 border-l-4 border-primary">
          <h1 className="text-xl font-bold text-primary text-center">
            Transaction
          </h1>
          <p className="text-l text-primary text-center">Success</p>
        </div>
        <div className="flex flex-col w-2/4 text-primary text-xs">
          <span>
            <div className="flex my-1">
              <a>
                0x43486248f078a7a4589c1c0ff440d77c5338add029d3d762b0bb53eaef9aca93
              </a>
              <div>Transfer</div>
            </div>
          </span>
          <span>
            <a>0x2a65Aca4D5fC5B5C859090a6c34d164135398226</a>" → "
            <a> 0xAE506bb28Ed79b29c6968Ab527d1eFdc5f399331</a>
          </span>
          <span>
            <span>2.1937903 ETH</span>
            <span>0.00042 TX Fee</span>
          </span>
        </div>
        <div className="flex flex-col text-base text-primary mx-2 ">
          <span>
            <a>Block #1622600</a>
          </span>
          <span>7 Years Ago</span>
        </div>
      </div>
    </div> */
}
