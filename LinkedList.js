

// A linked list 
// all individual objects are called nodes ( LinkedListNode class )
// the first node is a refered as head  
// the last node is refered as tail
// the last node reference is null

class LinkedListNode {
    constructor(data){
        this.data = data  //Data is stored in this key
        this.next = null  //Reference to the next node is stored in this key
    }
}

class LinkedList {

    #nodeList = null
    #lastNode = null
    #length = 0

    constructor(){}

    static from = (value) => {

        const arr = Array.isArray(value) ? value : [value]

        const result = new LinkedList()
    
        arr.forEach((item)=>{ result.push(item) })
    
        return result
    }     

    size = () => this.#length

    clear = () => { 
        this.#nodeList = null
        this.#lastNode = null
        this.#length = 0
    }
    
    print = () => {
        let node = this.#nodeList
        while(node !== null){
            console.log(node.data)
            node = node.next
        }
    }

    insert = (idx,data) => {

        const node = new LinkedListNode(data)

        idx = adjustIdx(idx,this.#length)

        // Get Previous and Curent Nodes
        let prevNode = this.#nodeList
        let crntNode = this.#nodeList
        
        let i=0
        while(crntNode !== null && i<idx){
            prevNode = crntNode
            crntNode = crntNode.next
            i++
        }

        if(prevNode === crntNode){      //List Not Initialised
            // Initialize List
            node.next = this.#nodeList
            this.#nodeList = node
        } else {                        //Update List
            // Insert Node To List
            node.next = crntNode
            prevNode.next = node
        }

        // Update Last Node if a item was added at the end of the LinkedList
        if( idx === this.#length){ this.#lastNode = node }

        // Update number of items in linked list
        this.#length++

    }

    push    = (data) => { this.insert( this.#length ,  data) }
    unshift = (data) => { this.insert( 0           ,  data) }



    delete = (idx) => {

        // Index adjustments to allow for backward navigation
        idx = adjustIdx(idx,this.#length)

        // Get Previous and Curent Nodes
        let prevNode = this.#nodeList
        let crntNode = this.#nodeList

        let i = 0
        while(i<idx){
            prevNode = crntNode
            crntNode = crntNode.next
            i++
        }

        // If it is the only node
        if(prevNode === crntNode ){
            this.#nodeList = this.#nodeList.next
        }else {
            // Change Previous Node to Point to the same node as Current Node
            prevNode.next = crntNode.next
        }
        
        // Update Last Node if a item was added at the end of the LinkedList
        if(idx === this.#length-1){ this.#lastNode = prevNode }
        
        // Update number of items in linked list
        this.#length--

        // If all items have been removed, reset the list
        if(this.#length === 0 ){ this.clear() }

        // Return the delete Node
        return crntNode
    }

    pop   = () => { return this.delete(-1) }
    shift = () => { return this.delete(0)  }


    
    get = (idx) => {
       
        // Allow to Search from Both Ends
        idx = adjustIdx(idx,this.#length)

        // Optimizations
        if(idx === this.#length-1 ) { return this.#lastNode }

        // Navigating List
        let i=0
        let node = this.#nodeList
        while(node!==null && i<idx){
            node = node.next
            i++;
        }
        return node 
    }

    getFirst= () => { return this.get(0)  }
    getLast = () => { return this.get(-1) }
    set = (idx,data) => { this.get(idx).data=data }




    findAll = (value,nthIdx) =>{
        
        let result = []

        let idx = 0
        let node = this.#nodeList

        // Navigate Nodes
        while(node !== null){
            if(node.data === value){
                result.push(idx)
            }

            // If We look for n-th occurence 
            if(nthIdx + 1 === result.length) { break }

            idx++
            node = node.next
        }

        if(result.length > 0) {
            if(nthIdx === undefined){
                return result
            }
            nthIdx = adjustIdx(nthIdx,result.length)

            return result[nthIdx]
        } 

        return undefined
    }

    findFirst = (value) => { return this.findAll(value,0)  }
    findLast  = (value) => { return this.findAll(value,-1) }
   
    toArray = () => {
        const result =[]

        let node = this.#nodeList
        while(node !== null){
            result.push(node.data)
            node = node.next
        }

        return result
    }

}

// Index adjustments to allow for backward navigation
const adjustIdx = (idx,size) => {
    return idx = idx < 0 ? size + idx : idx
}

export default LinkedList