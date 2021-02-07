class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
    
}

class SLL{
    constructor(){
        this.head = null;
    }

    length(){
        var count = 0;
        var runner = this.head; 
        while(runner){
            count++;
            runner = runner.next;
        }
        return count;
    }

}


var myNode1 = new Node("Reptar")
var myNode2 = new Node("Angelica")
var myNode3 = new Node("Tommy")
var sll1 = new SLL()
sll1.head = myNode1;
sll1.head.next = myNode2;
sll1.head.next.next = myNode3;

console.log(sll1.length())