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

    max(){
        var temp = 0;
        var runner = this.head;
        while(runner){
            if(runner.val > temp){
                temp = runner.val;
            }
            runner = runner.next;
        }
        return temp;
    }

    min(){
        var runner = this.head;
        var temp = runner.val;
        while(runner){
            if(runner.val < temp){
                temp = runner.val;
            }
            runner = runner.next;
        }
        return temp;
    }

    avg(){
        var numCount = 0;
        var temp = 0;
        var runner = this.head;
        while(runner){
            numCount++;
            temp += runner.val;
            runner = runner.next;
        }
        return temp / numCount;
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

console.log(sll1.max())
console.log(sll1.min())
console.log(sll1.avg())