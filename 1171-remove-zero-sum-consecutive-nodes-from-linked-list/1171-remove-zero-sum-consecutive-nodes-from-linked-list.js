/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prefix_sum = 0;
    const prefix_sums = { 0: dummy };
    let current = head;

    while (current) {
        prefix_sum += current.val;
        if (prefix_sum in prefix_sums) {
            let to_delete = prefix_sums[prefix_sum].next;
            let temp_sum = prefix_sum + to_delete.val;
            while (to_delete !== current) {
                delete prefix_sums[temp_sum];
                to_delete = to_delete.next;
                temp_sum += to_delete.val;
            }
            prefix_sums[prefix_sum].next = current.next;
        } else {
            prefix_sums[prefix_sum] = current;
        }
        current = current.next;
    }

    return dummy.next;
};