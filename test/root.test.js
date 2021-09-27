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
    
    console.log("root address : "+root.address);
    
  })

  it("(1024,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(1024,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    

  })

  it("(2048,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(2048,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(4096,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(4096,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })

  it("(8192,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(8192,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })

  it("(16384,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(16384,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })

  it("(10**4-1,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**4-1,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**6-1,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**6-1,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**8-1,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**8-1,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**10-1,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**10-1,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**15-1,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**15-1,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**14,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**14,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(2**16,5,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(2**16,5,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  /////
  it("(1024,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(1024,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    

  })

  it("(2048,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(2048,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(4096,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(4096,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })

  it("(8192,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(8192,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })

  it("(16384,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(16384,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })

  it("(10**4-1,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**4-1,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**6-1,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**6-1,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**8-1,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**8-1,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**10-1,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**10-1,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**15-1,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**15-1,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(10**14,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(10**14,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })
  it("(2**16,10,5,40)", async () => {
    
    const rootOfSys=await root.nthRoot(2**16,10,5,40);
    console.log("gas usage : "+await root.consumedGas());
    
  })

})
