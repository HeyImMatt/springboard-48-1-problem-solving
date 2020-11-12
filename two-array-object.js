// add whatever parameters you deem necessary
function twoArrayObject(keysArr, valsArr) {
    const output = {};

    keysArr.forEach((key, idx) => {
        output[key] = valsArr[idx] || null;
    })

    return output;
}
