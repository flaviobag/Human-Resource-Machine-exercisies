function year6(items) {

    let counter = 0
    const newItems = []
    while(counter < items.length) {

      const sum = items[counter + 1] - items[counter]
      newItems.push(sum)
      const sum2 = items[counter] - items[counter + 1]
      newItems.push(sum2)

      counter += 2
    }
    return newItems
}

const items = [2,5,9,4,-9,-9,6,-1]

console.log(year6(items))
