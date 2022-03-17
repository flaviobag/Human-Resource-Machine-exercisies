function year7(items) {
    const itemsWithoutZero = items.filter((item) => item !== 0)
   
    return itemsWithoutZero
 }
 
 const items = [6, 0, 1, 'B', 0, 0, 0]
 
    console.log(year7(items))
