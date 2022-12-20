const axios = require("axios");

export const getEthPrice = async () => {
  const res = await axios
    .get(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    )
    .then((response) => response.data);

  const price = res.ethereum.usd;
  return price;
};
