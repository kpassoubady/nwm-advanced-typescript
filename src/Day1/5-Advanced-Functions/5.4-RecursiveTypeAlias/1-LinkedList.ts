export {};

type ListNode<T> = {
    value: T;
    next?: ListNode<T>;
};

let list: ListNode<number> = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3
        }
    }
};

console.log(list.value);
console.log(list.next?.value);
console.log(list.next?.next?.value);

