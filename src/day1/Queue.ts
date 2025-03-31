type Node<T> = {
    value: T;
    next?: Node<T>;
}
// head->A->B->C->D<-tail
export default class Queue<T> {
    public length:number;
    private head?:Node<T>;
    private tail?:Node<T>;
  
    constructor() {
        this.length=0;
        this.head=this.tail=undefined;
    }

    enqueue(item: T): void {

        this.length++;
        const node = {value:item, next:undefined} as Node<T>;
        if(!this.tail){
            this.head=this.tail=node;
        }else{
            this.tail.next= node;
            this.tail = node;
        }

    }
    deque(): T | undefined {
        if(!this.head){
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head=head.next;
        if(!this.head){
            this.tail=undefined;
        }
        return head.value;
      
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

// front->A->B->C->D<-back  queue

