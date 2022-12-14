import hre, { ethers } from "hardhat";

// import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import { TWFactory, Marketplace } from "typechain";

// import { nativeTokenWrapper } from "../../utils/nativeTokenWrapper";

// async function main() {

//   const chainId: number = hre.network.config.chainId as number;

//   const [caller]: SignerWithAddress[] = await ethers.getSigners();

//   const nativeTokenWrapperAddress: string = nativeTokenWrapper[chainId];
//   const twFeeAddress: string = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"; // replace
//   const twFactoryAddress: string = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"; // replace Fantom: 0x97EA0Fcc552D5A8Fb5e9101316AAd0D62Ea0876B rest: 0x5DBC7B840baa9daBcBe9D2492E45D7244B54A2A0

//   const twFactory: TWFactory = await ethers.getContractAt("TWFactory", twFactoryAddress);

//   const hasFactoryRole = await twFactory.hasRole(
//     ethers.utils.solidityKeccak256(["string"], ["FACTORY_ROLE"]),
//     caller.address,
//   );
//   if (!hasFactoryRole) {
//     throw new Error("Caller does not have FACTORY_ROLE on factory");
//   }
//   const marketplace: Marketplace = await ethers
//     .getContractFactory("Marketplace")
//     .then(f => f.deploy(nativeTokenWrapperAddress));

//   console.log(
//     "Deploying Marketplace \ntransaction: ",
//     marketplace.deployTransaction.hash,
//     "\naddress: ",
//     marketplace.address,
//   );

//   await marketplace.deployed();

//   console.log("\n");

//   const addImplementationTx = await twFactory.addImplementation(marketplace.address);
//   console.log("Adding Marketplace implementation to TWFactory: ", addImplementationTx.hash);
//   await addImplementationTx.wait();

//   console.log("\n");

//   console.log("Verifying contract.");
//   await verify(marketplace.address, [nativeTokenWrapperAddress, twFeeAddress]);
// }

// async function verify(address: string, args: any[]) {
//   try {
//     return await hre.run("verify:verify", {
//       address: address,
//       constructorArguments: args,
//     });
//   } catch (e) {
//     console.log(address, args, e);
//   }
// }

// main()
//   .then(() => process.exit(0))
//   .catch(e => {
//     console.error(e);
//     process.exit(1);
//   });

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  const nativeTokenWrapperAddress: string = "0x25AAF7483D508161287e5aF155852cEAF8426B1d"
  const lazymintcontract: string = "0xB5479037290831226A1488916fea1dA1F8775E1c"
  
  const Token = await ethers.getContractFactory("Marketplace") .then(f => f.deploy(nativeTokenWrapperAddress));
  

  console.log("Marketplace address:", Token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });