function year20(items) {

    let counter = 0
    const newItems = []
    while(counter < items.length) {

      const sum = items[counter + 1] * items[counter]
      newItems.push(sum)
    

      counter += 2
    }
    return newItems
}

const items = [2, 3, 0, 8]

console.log(year20(items))
