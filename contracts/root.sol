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
        assert (_dp < 6);

        // The scale factor is a crude way to turn everything into integer calcs.
        // Actually do (a * (10 ^ ((dp + 1) * n))) ^ (1/n)
        // We calculate to one extra dp and round at the end
        console.log("a is : %s", _a);
        console.log("n is : %s", _n);
        console.log("dp is : %s", _dp);
        console.log("maxit is : %s", _maxIts); 
        uint one = 10 ** ( _n*_dp);
         console.log("one is : %s",one);
        uint a0 = one * _a;
         console.log("a0 is : %s",a0);
        
        uint8 numDigit=0;
          while(_a>1){
            _a=_a/10;
            

            numDigit++;
        }
        console.log("numDigit is : %s", numDigit); 
        // Initial guess: 1.0
        uint xNew = (10**((numDigit)/_n+_dp+1)) ;
         console.log("xNew is : %s", xNew);
        uint x=0;
        a0=a0/_n;
        console.log("a0 is : %s",a0);
        console.log("iter started");
        uint iter = 0;
        
        do {
            x = xNew;
            uint sec=a0;
            for(uint8 i=1;i<_n;i++){
                sec=sec/x;
            }
           // console.log("sec is : %s", sec);
            xNew=(_n-1)*x/_n+sec;
            console.log("xNew is : %s", xNew);
            ++iter;
             console.log("iter is : %s", iter);
            
        }while ((x > (xNew+1)) && iter < _maxIts);

        // Round to nearest in the last dp.
         console.log("nth root is", xNew);
        return xNew;
    }
}

