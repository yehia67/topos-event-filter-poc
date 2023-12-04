const { Contract, providers, JsonRpcProvider } = require("ethers");
const contractJson = require("./test.json");

const main = async function () {
  const provider = new JsonRpcProvider(
    "https://rpc.topos-subnet.testnet-1.topos.technology"
  );
  const contract = new Contract(
    "0x229D068d763018B92E25107A49D61882eEa48898",
    contractJson.abi,
    provider
  );

  contract.on("OracleRequested", () => {});
};

main();
