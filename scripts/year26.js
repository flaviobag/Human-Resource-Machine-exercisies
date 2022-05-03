function year26(items) {    
    
    let counter = 0
    const newItems = []
    while(counter < items.length) {
        newItems.push(Math.trunc(items[counter] / items[counter+1]))
        counter += 2
    }
    return newItems
 }
const items = [5, 2, 7, 2, 3, 5, 0, 3] 
console.log(year26(items))
