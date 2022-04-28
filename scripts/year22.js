function calcFib(number) {
    if(number < 1) return []
    const fibNumbers = [1, 1]
    let counter = 1
    
    while (counter <= number) {
       const atual = fibNumbers.length - 1
       const numberAtual = fibNumbers[atual] + fibNumbers[atual - 1]       
       counter = numberAtual
       if(counter <= number){
            fibNumbers.push(numberAtual)
       }
    }
    
    return fibNumbers
}

function year22(items) {

    let newItems = []
    items.forEach(element => {
       newItems = [...newItems,...calcFib(element)]
    });
    return newItems
}
const items = [6, 19] 
console.log(year22(items))
