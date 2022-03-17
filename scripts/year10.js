function year10(items) {
    
    let counter = 0
    const newItems = []
    while(counter < items.length) {

      const mult = items[counter] * 8

      newItems.push(mult)
      counter ++
    }
    return newItems
}
 
 const items = [5, -7, 3, 0]
 
 console.log(year10(items))
