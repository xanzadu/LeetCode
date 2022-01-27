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
var addTwoNumbers = function(l1, l2, carry = 0) {
    if (l1 || l2) {
        l1 = l1 || new ListNode(0);
        l2 = l2 || new ListNode(0);
        let val = l1.val + l2.val + carry;
        if (val >= 10) {
            val -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        let result = new ListNode(val);
        result.next = addTwoNumbers(l1.next, l2.next, carry);
        return result;
    }
    if (carry === 1) {
        result = new ListNode(1);
        return result;
    }
    return null;
};