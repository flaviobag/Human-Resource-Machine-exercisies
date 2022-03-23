function year13(items) {
 
    let counter = 0
    const newItems = []
    while(counter < items.length) {        
        if(items[counter] === items[counter + 1]){
            newItems.push(items[counter])
      }
      counter += 2
    }
    return newItems
}   
   const items = [4, 8, 9, 9, 2, -4, 9, 9] 
   console.log(year13(items))
