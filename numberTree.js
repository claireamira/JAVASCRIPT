function treeTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 0; j < rows - i; j++) {
            line += '   ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += k;
            if (k < 2 * i - 1) {
                line += k % 2 === 0 ? '   ' : '  ';
            }
        }
        console.log(line);
    }
}

treeTriangle(5);
