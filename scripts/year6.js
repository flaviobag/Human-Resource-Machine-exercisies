function year6(items) {

    let counter = 0
    const newItems = []
    while(counter < items.length) {

      const sum = items[counter+1] + items[counter]

      newItems.push(sum)
      counter += 2
    }
    return newItems
}

const items = [5, 8, 7, 0, -4, 0, 3, 4]

console.log(year6(items))
