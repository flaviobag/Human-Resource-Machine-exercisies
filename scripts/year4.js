function year4(items) {

    let counter = 0
    const newItems = []
    while(counter < items.length) {

        newItems.push(items[counter+1])
        newItems.push(items[counter])
        counter += 2
    }
    return newItems
}

const items = [4, 9 , 'n', 'd', 3, 8]

console.log(year4(items))
