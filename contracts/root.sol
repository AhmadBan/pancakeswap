// SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

// import "./BytecodeWhitelist.sol";
import "hardhat/console.sol";

contract Root {
    uint256 public consumedGas;
    
    modifier gasUsed() {
        uint256 gasLeft = gasleft();
        _;
        consumedGas = gasLeft - gasleft();
    }

    function nthRoot(uint _a, uint _n, uint _dp, uint _maxIts) public gasUsed returns(uint) {
        assert (_n > 1);

        // The scale factor is a crude way to turn everything into integer calcs.
        // Actually do (a * (10 ^ ((dp + 1) * n))) ^ (1/n)
        // We calculate to one extra dp and round at the end
        console.log("a is : %s", _a);
        console.log("n is : %s", _n);
        console.log("dp is : %s", _dp);
        console.log("maxit is : %s", _maxIts); 
        uint one = 10 ** ( _dp);
        uint a0 = one * _a;
        uint8 numDigit=0;
          while(_a>1){
            _a=_a/10;
            numDigit++;
        }
        console.log("numDigit is : %s", numDigit); 
        // Initial guess: 1.0
        uint xNew = (10**((_dp+numDigit)/_n)) ;
         console.log("xNew is : %s", xNew);
        uint x;
       
        uint iter = 0;
        while (xNew != x && iter < _maxIts) {
            
            uint x = xNew;
            
            uint t0 = x ** (_n - 1);
            console.log("t0 is : %s", t0);
            xNew=x+a0/_n/t0-x/_n;
            console.log("xNew is : %s", xNew);
            ++iter;
        }

        // Round to nearest in the last dp.
         console.log("nth root is", xNew);
        return xNew;
    }
}

