const concatZero = n => n <= 999 ? `00${n}`.slice(-3) : n;
    // n = n.toString();
    
    // if (n.length === 1) {
    //     return `00${n}`;
    // } else if (n.length === 2) {
    //     return `0${n}`;
    // } else {
    //     return n;
    // }


export default concatZero;