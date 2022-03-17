function year9(items) {
    const itemsWithZero = items.filter((item) => item === 0)
   
    return itemsWithZero
 }
 
 const items = [1, 0, -4, 'B', 0, 0, 3]
 
console.log(year9(items))
