export function findElements(prop, toFind, arr){
    return arr.findIndex(el => el[prop] === toFind )
}
