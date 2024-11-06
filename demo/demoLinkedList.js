

import LinkedList from "../LinkedList.js"

const printConsoleOutput = (linkedList) =>{
    
    console.log("\n",linkedList,"\n")
    console.log("")
    linkedList.print()
    console.log("")
}

const main = () => {

    let myLinkedList = new LinkedList()
    
    // // 1. push - adding Nodes at the end
    //     myLinkedList.push(1)
    //     myLinkedList.push(2)
    //     myLinkedList.push(3)

    // // 2. pop - removing Nodes at the end
    //     myLinkedList.pop()
    //     myLinkedList.pop()
    //     myLinkedList.pop()

    // // 3. unshift - adding Nodes at the start
    //     myLinkedList.unshift(0)
    //     myLinkedList.unshift(-1)
    //     myLinkedList.unshift(-2)


    // // 4. shift - removing Nodes at the start
    //     myLinkedList.shift()
    //     myLinkedList.shift()
    //     myLinkedList.shift()

    // // 5. insert - insert Nodes at index
    //     myLinkedList.insert(myLinkedList.length,1)
    //     myLinkedList.insert(myLinkedList.length,2)
    //     myLinkedList.insert(myLinkedList.length,3)

    // // 6. delete - deletes Nodes at index
    //     myLinkedList.delete(0)
    //     myLinkedList.delete(0)
    //     myLinkedList.delete(0)

    // // 7. from - create linklist from top-level array or value
    // myLinkedList = LinkedList.from([0,1,2,3,0,0])
    
    // // 8. set - set the data for the node at index
    // myLinkedList.set(-1,0)
    // myLinkedList.set(1,4)
  
    // // 9. get - returns the node at index
    // console.log("get -2: ", myLinkedList.get(-2).data)

    // // 10. getFirst - returns the first node, which contains all nodes
    // console.log("first: ", myLinkedList.getFirst().data)

    // // 11. getLast - returns the last node, 
    // console.log( "last: ", myLinkedList.getLast().data)

    // // 12. findAll - returns the indexes of the all   nodes that have data matching value
    // console.log("findAll 0s: ", myLinkedList.findAll(0))

    // // 13. findFirst - returns the index   of the first node  that has  data matching value
    // console.log("findFirst 0: ",myLinkedList.findFirst(0))                                       // Variant 1
    // console.log("findFirst 0: ",myLinkedList.findAll(0,0))                                       // Variant 2
    // console.log("findFirst 0: ",myLinkedList.findAll(0)[0])                                      // Variant 3

    // // 14. findLast- returns the index   of the last  node  that has  data matching value
    // console.log("findLast 0: ", myLinkedList.findLast(0))                                        // Variant 1
    // console.log("findLast 0: ", myLinkedList.findAll(0,-1))                                      // Variant 2
    // console.log("findLast 0: ", myLinkedList.findAll(0)[myLinkedList.findAll(0).length-1])       // Variant 3

    // // 15. toArray() - converts Linked List to array
    // const arrLinkedList = myLinkedList.toArray()
    // console.log("toArray: ", arrLinkedList)

    // // 16. clear
    // myLinkedList.clear()



    printConsoleOutput(myLinkedList)
        
}


export default main