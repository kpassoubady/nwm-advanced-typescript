export { };

type BinaryTree<T> = {
    value: T;
    left?: BinaryTree<T>;
    right?: BinaryTree<T>;
};

let tree: BinaryTree<string> = {
    value: "A",
    left: {
        value: "B",
        left: {
            value: "D"
        }
    },
    right: {
        value: "C",
        left: {
            value: "E"
        },
        right: {
            value: "F"
        }
    }
};
console.log(tree);
console.log(tree.value);
console.log(tree.left?.value);
console.log(tree.right?.value);

