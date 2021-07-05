// each set of data is called a node. and a next pointer.

// the tail is at the end, and the end represents null

//const n1 = { data: 100, }

//const n2 = { data: 200, }

//n1.next = n2

//console.log(n1) // { data: 100, next: { data: 200 } }

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

const n1 = new Node(100)


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    // insert first Node
    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++
        // will push existing node to next place, and reset head.
    }
    // inset at last Node
    insertLast(data){
        let node = new Node(data)
        let current
        // if empty list, then make head
        if(!this.head){
            this.head = node
        } else {
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    // insert at index
    insertAt(data, index){
        // index out of range
        if(index > 0 && index > this.size){
            console.log("index out of range")
            return
        }
        // if its the first index
        if (index === 0){
            this.head = new Node(data, this.head)
            return
        } // can use--> this.insertFirst(data)
        const node = new Node(data)
        let current, previous
        // set current to first
        current = this.head
        let count = 0
        while(count < index){
            previous = current // node before index
            count++
            current = current.next // node after index
        }
        node.next = current
        previous.next = node
        this.size++
    }
    // get an index
    getAt(index){
        let current = this.head
        let count = 0
        while(current){
            if (count == index){
                console.log(current.data)
            }
            count++
            current = current.next
        }
        return null
    }
    // remove at index
    removeAt(index){
        // index out of range
        if(index > 0 && index > this.size){
            return
        }
        let current = this.head
        let previous
        let count = 0
        // remove first node
        if(index == 0){
            this.head = current.next
        } else {
            while(count < index){
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size--
    }

    // clear list
    clearList() {
        // data still stored in memory, but list works.
        this.head = null
        this.size = 0
    }
    // print list data
    printList(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }

}

const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)

ll.printList()
