type Node<T>={
    value:T,
    next?:Node<T>,
    prev?:Node<T>
}
export default class DoublyLinkedList<T> {
    public length: number;
    public head?:Node<T>;

    

    constructor() {
        this.length =0;
        this.head =undefined;
    }

    prepend(item: T): void {
        const node :Node<T> = {value:item};
        if(!this.head){
            this.head=node;
            return;
        }
        node.next=this.head as Node<T>;
        this.head.prev= node;
        this.head=node;
        this.length ++;

}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {
        return undefined;

}
    get(idx: number): T | undefined {
        return undefined;

}
    removeAt(idx: number): T | undefined {
        return undefined;

}
}