export { };

type TreeNode<T> = {
    value: T;
    children?: Array<TreeNode<T>>;
};

let root: TreeNode<string> = {
    value: "root",
    children: [
        {
            value: "child1"
        },
        {
            value: "child2",
            children: [
                {
                    value: "grandchild1"
                },
                {
                    value: "grandchild2"
                }
            ]
        }
    ]
};

console.log(root.value);
console.log(root.children?.[0].value);
console.log(root.children?.[1].children?.[0].value);

