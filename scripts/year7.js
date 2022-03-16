function year7() {
    
    let i = 0
    items.sort()   
    console.log(items)
    for(i = 0;i <= items.length; i++) {
        if(items[0] === 0) {
            items.shift()
        }
    }
    console.log(items)
 }
 
 const items = [25,8,0,6,7,0,5,0,0,9,29,0]
 
year7(items)
