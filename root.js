function nthRoot(_a,  _n, _dp,  _maxIts) {
    

    // The scale factor is a crude way to turn everything into integer calcs.
    // Actually do (a * (10 ^ ((dp + 1) * n))) ^ (1/n)
    // We calculate to one extra dp and round at the end
    let one = 10 ** ( _dp);
    let a0 = one * _a;
    let numDigit=0;
    while(_a>1){
        _a=_a/10;
        numDigit++;
    }

    

    // Initial guess: 1.0
    let xNew = (10**(_dp/_n))*(10**(numDigit/_n)) ;
    let x;

    let iter = 0;
    while (xNew != x && iter < _maxIts) {
        let x = xNew;
        let t0 = x ** (_n - 1);
        // if (x * t0 > a0) {
        //     xNew = x - (x - a0 / t0) / _n;

        // } else {
        //     xNew = x - (a0 / t0 - x) / _n;
        // }
        xNew=x+a0/_n/t0-x/_n;
        
        ++iter;
    }

    // Round to nearest in the last dp.
     console.log("nth root is", xNew);
    return xNew;
}

nthRoot(9,2,18,40);


