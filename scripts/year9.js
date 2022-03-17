function year8(items) {
    const itemsWithoutZero = items.filter((item) => item === 0)
   
    return itemsWithoutZero
 }
 
 const items = [1, 0, -4, 'B', 0, 0, 3]
 
    console.log(year8(items))
