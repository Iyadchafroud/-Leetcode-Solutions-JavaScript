/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function addTwoNumbers(l1, l2) {
  // create a dummy node to store the result
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;
  // traverse the lists while they are not null
  while (l1 !== null || l2 !== null) {
    // get the values of the current nodes, or 0 if the node is null
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;
    // add the values and the carry
    const sum = val1 + val2 + carry;
    // store the ones digit of the sum in the current node
    current.next = new ListNode(sum % 10);
    // store the carry for the next iteration
    carry = Math.floor(sum / 10);
    // move to the next nodes
    current = current.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  // if there is a carry left, add it to the result
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  // return the result, excluding the dummy node
  return dummy.next;
}
