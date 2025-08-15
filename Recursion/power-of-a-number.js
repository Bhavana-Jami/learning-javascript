function pow(n, x) {
    if (x === 0) {
        return 1;
    }
    else {
        return n * pow(n, x - 1);
    }
}
console.log(pow(2, 3));