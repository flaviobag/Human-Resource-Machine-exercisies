function year8(items) {
    
    let counter = 0
    const newItems = []
    while(counter < items.length) {

      const mult = items[counter] * 3

      newItems.push(mult)
      counter ++
    }
    return newItems
}
 
 const items = [1,  -5, 7, 0]
 
 console.log(year8(items))
