function pattern(n) {
    let p = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n-1 ||j === 0 || j === n-1) {
                p += "*"
            }
            else{
                p += " "
            }
        }
        p += "\n"
    }
    return p;
}

console.log(pattern(8))