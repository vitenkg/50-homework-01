let binar = 0;
let color = 'black';
let line = '';

const blackWhite = (cicle) => {
    if (binar === 0) {
        color = 'black';
    } else if (binar === 1) {
        binar = -1;
        color = 'white';
    }
    if ((color === 'white') && (cicle === 7)) {
        binar = 0;
    }
    if ((color === 'black') && (cicle === 7)) {
        binar = -1;
    }
    binar++;
    return  color;
}

for (let i = 0; i < 8; i++) {
    if (i > 0 ) {
        console.log(line);
    }
    line = '';
    for (let j = 0; j < 8; j++) {
        color = blackWhite(j);
        if (color === 'white') {
            line += '  ';
        }
        if (color === 'black') {
            line += '██';
        }
    }
}