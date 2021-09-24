const { solidity } = require("ethereum-waffle");
const { expect } = require("chai").use(solidity);


// const INITIAL_WBNB_LIQUIDITY = ethers.utils.parseEther("10");
// const INITIAL_USDT_LIQUIDITY = ethers.utils.parseEther("10");

// let pancakeRouter, wbnb, usdt;

beforeEach(async () => {
  const [owner, liquidator] = await ethers.getSigners();

  // deploy tokens
  const Root = await ethers.getContractFactory("Root");
  root = await Root.deploy();


})

describe("test address", async () => {
  it("should have an address in network", async () => {
    const [,liquidator] = await ethers.getSigners();
    console.log("root address : "+root.address);
    expect(root.address).to.not.equal(null);
  })
  it("should calculate the second root of 9", async () => {
    const [,liquidator] = await ethers.getSigners();
    console.log("get second root of 9 : "+await root.nthRoot(9,2,18,40));
    console.log("gas usage : ",await root.consumedGas.toString());
    expect(root.address).to.not.equal(null);
  })
  it("should calculate the second root of 9*10**18", async () => {
    const [,liquidator] = await ethers.getSigners();
    const rootOfSys=await root.nthRoot(90000000,2,18,40);
    console.log("get second root of 9 : "+rootOfSys.toString());
    console.log("gas usage : "+await root.consumedGas());
    expect(root.address).to.not.equal(null);
  })
})
