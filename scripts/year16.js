function year16(items) {
  
    let counter = 0
    const newItems = []
    while (counter < items.length) {        
      if (items[counter] < 0){
          newItems.push(items[counter] * -1)
    } else {
      newItems.push(items[counter])
    }
    counter++
  }
  return newItems
}   
   const items = [9, -2, -8, 0, -3, 4, 1] 
   console.log(year16(items))
