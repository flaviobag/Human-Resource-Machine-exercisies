function findSmallerNumber(items) {
   return Math.min(...items)
}

function year23(items) {    
    const smallerItems = []
    items.forEach((item) => {
        smallerItems.push(findSmallerNumber
        (item))
    })
    return smallerItems
}
const items = [[8, 11, 1], [11, 10, 6, 5], [61, 31, 2, 88, 65]] 
console.log(year23(items))
