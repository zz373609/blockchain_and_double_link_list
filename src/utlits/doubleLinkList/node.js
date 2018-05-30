export default class node{
  constructor(value,next = null,pre=null){
    this.value = value,
    this.next = next
    this.pre = pre
  }
}