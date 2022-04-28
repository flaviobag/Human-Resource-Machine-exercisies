function year21(items) {

    const newItems = []
    
    let counter = 0
    let sum = 0
  
    while(counter < items.length) {
         
        if(items[counter] !== 0){        
            sum = sum + items[counter]           
    }else {
        
        newItems.push(sum)
        sum = 0        
    }
    counter ++
    
}
    return newItems
}
   const items = [4, 2, 0, 0, 5, 0] 
   console.log(year21(items))
