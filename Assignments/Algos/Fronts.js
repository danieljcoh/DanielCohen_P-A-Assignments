class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
    
}

class SLL{
    constructor(value){
        this.head = null;
    }

    //METHODS HERE
    //#1 AddFront ||  Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(value){
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    //#2 RemoveFront ||  Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront(){
        if(this.head == null){
            return null;
        }
        this.head = this.head.next;
    return this.head;
    }

    //#3 Front ||  Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front(){
        if(this.head == null){
            return null;
        }
    return this.head.val;
    }

    //I think I need to store this.head into a var
    contains(value){
        var smallerThan = 0;
        var biggerThan = 1
        while(smallerThan < biggerThan){
            if(this.head.value != value){
                if(this.head != null){
                    smallerThan++;
                    if(this.head.next != null){
                        this.head = this.head.next;
                        biggerThan++;
                    } else if (this.head.next == null){
                        break;
                    }
                }
            } else {
        return true;
        }
        return false;
        }
    }

    //Actual answer
    contains(value) {
        var runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }


}

//METHODS 

var myNode1 = new Node("Reptar")
var myNode2 = new Node("Angelica")
var myNode3 = new Node("Tommy")
var sll1 = new SLL()
sll1.head = myNode1;
sll1.head.next = myNode2;
sll1.head.next.next = myNode3;

console.log(sll1.contains("Tommy"))