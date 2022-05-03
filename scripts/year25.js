function calcSum(item) {
    let sum = 0
    let counter = item

    while(counter > 0){
        sum += counter 
        counter --
    }

    return sum
}

function year25(items) {
    const newItems = []
    
    items.forEach(element => {
       newItems.push(calcSum(element))        
    });
    
   return newItems
 }
const items = [3, 2, 0, 8] 
console.log(year25(items))
