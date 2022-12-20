const axios = require("axios");

export const getMarketCap = async () => {
  const res = await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      }
    )
    .then((response) => response.data);

  const cap = res[0].market_cap;
  function formatNumber(num) {
    // Convert the number string to an array of digits
    let string = num.toString();
    let digits = string.split("");

    // Insert a comma every three digits, starting from the right
    for (let i = digits.length - 3; i > 0; i -= 3) {
      digits.splice(i, 0, ",");
    }

    // Join the array back into a string and return it
    return digits.join("");
  }
  const markCap = formatNumber(cap);
  return markCap;
};
