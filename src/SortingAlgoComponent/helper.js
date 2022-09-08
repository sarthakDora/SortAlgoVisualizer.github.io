export function Helper(i,j,array)
{
    var result = {};
    result = array;

    var temp = result[i];
    result[i] = result[j];
    result[j] = temp;
    return result;
}
export function RandomIntegers(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min)
}