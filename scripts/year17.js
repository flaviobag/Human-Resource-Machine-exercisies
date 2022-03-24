function year17(items) {
 
    let counter = 0
    const newItems = []
    while (counter < items.length) {        
      if ((items[counter] < 0 && items[counter + 1] < 0) || (items[counter] > 0 && items[counter + 1] > 0)  ){
          newItems.push(0)
    } else {
      newItems.push(1)
    }
    counter += 2
  }
  return newItems
}   
   const items = [-6, -4, -7, -4, 2, 4, 3, 5] 
   console.log(year17(items))
