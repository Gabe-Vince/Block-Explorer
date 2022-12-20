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

  const markCap = res[0].market_cap;
  return markCap;
};
