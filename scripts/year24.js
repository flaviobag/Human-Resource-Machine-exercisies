 function year24(items) {    
    
    let counter = 0
    const newItems = []
    while(counter < items.length) {
        newItems.push(items[counter] % items[counter+1])
        counter += 2
    }
    return newItems
 }
const items = [6, 2, 7, 3, 3, 8, 0, 7] 
console.log(year24(items))
