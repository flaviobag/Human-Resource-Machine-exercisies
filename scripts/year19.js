function year19(items) {

    const newItems = []
    items.forEach(item => {
        let counter = item;
         
         while(counter !== 0) {            
            newItems.push(counter)
           if(item > 0) {
             counter--
           } else if (item < 0) {
             counter++
           }
         }     
         if(counter === 0) newItems.push(counter)
         
     })
     return newItems
    }
   const items = [3, -3, 0] 
   console.log(year19(items))
