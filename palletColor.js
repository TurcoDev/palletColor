/****
 * Creamos un generador de paleta de colores
 */

function generatePalletPuaj() {
    let pallet = [];
    for (let i1 = 0; i1 < 5; i1++) {

        let colors = [];
        for (let i2 = 0; i2 < 3; i2++) {
            colors[i2] = Math.floor((Math.random() * 256));
            // colors.push(Math.floor((Math.random() * 256)));
        }

        // console.log(colors);
        pallet[i1] = colors;
        // pallet.push(colors);
    }

    return pallet;
    // return 'rgb(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ')';
    // return `rgb(${colors[0]},${colors[1]},${colors[2]})`;
}

// console.log(generatePalletPuaj());

function colorGenerateRGB() {
    let colors = [];
    for (let i2 = 0; i2 < 3; i2++) {
        colors[i2] = Math.floor((Math.random() * 256));
        // colors.push(Math.floor((Math.random() * 256)));
    }

    return 'rgb(' + colors[0] + ',' + colors[1] + ',' + colors[2] + ')';
    return `rgb(${colors[0]},${colors[1]},${colors[2]})`;
}

function generatePallet(count) {
    let pallet = [];
    for (let i1 = 0; i1 < count; i1++) {
        pallet[i1] = colorGenerateRGB();
    }

    return pallet;
}

console.warn(generatePallet(7));
