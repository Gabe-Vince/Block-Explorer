// TODO Make github icon to the code

import React from "react";

export default function Header() {
  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-primary z-10">
      <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
        <img
          className="w-7 h-8 md:w-8 md:h-12 mr-2 rounded-md overflow-hidden"
          src="https://logos-download.com/wp-content/uploads/2018/04/Ethereum_logo_etc-1819x3000.png"
        />
        <span className="hidden md:block ">BLOCK EXPLORER</span>
      </div>
      <div className="flex justify-evenly items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
        <div className="bg-primary rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
          <button className="outline-none focus:outline-none">
            <svg
              className="w-5 text-gray-600 h-5 cursor-pointer"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search by Address/ Txn Hash /Block /Ens "
            className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
