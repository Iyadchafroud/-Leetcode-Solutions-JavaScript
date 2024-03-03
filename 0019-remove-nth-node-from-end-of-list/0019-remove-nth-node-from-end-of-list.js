/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head;
    let length = 1;
while(current.next !== null){
    length+=1;
    current = current.next;
}
    
    if(n === 1 && length === 1) return null;
      let indexToRemove = (length-n)+1;
      let index=1

    if(indexToRemove === 1){
    head = head.next;
    return head;
}
    
   current = head; 

while(current.next !== null){
    if(index + 1 ===indexToRemove){
        current.next=current.next.next
        break
    }
    index++
 current = current.next;

}
    
  return head;
  
};
