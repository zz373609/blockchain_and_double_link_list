import node from './node'

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const newNode = new node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.tail.next = newNode
    newNode.pre = this.tail
    this.tail = newNode
  }

  prepend(value) {
    const newNode = new node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    this.head.pre = newNode
    newNode.next = this.head
    this.head = newNode
  }

  deleteNode(value) {
    if (!this.head || !this.tail) {
      return null
    }

    let deleteNode = null
    if(this.head === this.tail && this.head.value == value){
      deleteNode = this.head
      delete this.head.value
      return deleteNode
    }

    if (this.head.value == value) {
      deleteNode = this.head
      this.head = this.head.next
      this.head.pre = null
      return deleteNode
    }

    if(this.tail.value == value){
      deleteNode = this.tail
      this.tail = this.tail.pre
      this.tail.next = null
      return deleteNode
    }

    let cursor = this.head
    while (cursor.next) {
      if (cursor.value == value) {
        deleteNode = cursor
        cursor.pre.next = cursor.next
        cursor.next.pre = cursor.pre
        return deleteNode
      } 
      cursor = cursor.next
    }
  }
}

