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

    display(){
        var temp = "";
        var space = " ";
        var runner = this.head;
        while(runner){
            temp += runner.val + space;
            runner = runner.next;
        }
        return temp;
    }
}

var myNode1 = new Node(5)
var myNode2 = new Node(3)
var myNode3 = new Node(9)
var myNode4 = new Node(13)
var sll1 = new SLL()
sll1.head = myNode1;
sll1.head.next = myNode2;
sll1.head.next.next = myNode3;
sll1.head.next.next.next = myNode4;

console.log(sll1.display())
