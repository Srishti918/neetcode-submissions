/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // let temp=head;
        // let arr=[];
        // while(temp!==null){
        //     arr.push(temp.val);
        //     temp=temp.next;
        // }
        // temp=head;
        // var i=arr.length-1;
        // while(temp!==null){
        //     temp.val=arr[i];
        //     i--;
        //     temp=temp.next;
        // }
        // return head;

        let prev=null;
        let temp=head;
        while(temp!==null){
            let newNode=temp.next;
            temp.next=prev;
            prev=temp;
            temp=newNode;
        }
        return prev


    }
}
