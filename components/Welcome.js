import React, { useEffect, useState } from "react";

export default function Welcome() {
  return (
    <div className="mt-4 mx-4 p-6 h-full rounded-lg shadow-xs bg-leaf bg-cover overflow-hidden">
      <div className="flex flex-col  ">
        <div className="text-2xl lg:text-4xl text-base3 ">
          Welcome <br />
          <span className="text-primary text-3xl lg:text-5xl">
            Block Explorer
          </span>
        </div>
      </div>
    </div>
  );
}
