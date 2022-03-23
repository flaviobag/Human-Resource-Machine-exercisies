function year14(items) {
 
    let counter = 0
    const newItems = []
    while (counter < items.length) {        
      if (items[counter] <= items[counter + 1]){
          newItems.push(items[counter + 1])
    } else {
      newItems.push(items[counter])
    }
    counter += 2
  }
  return newItems
}   
   const items = [4, 5, -6, -5, 7, 7, -9, 3] 
   console.log(year14(items))
