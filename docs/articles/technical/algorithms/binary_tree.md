## C++二叉搜索树

这里面的指针要使用 shared_ptr。 如果使用 unique_ptr 会由于转移了控制权导致无法正常运行

```cpp
//
// Created by w00534501 on 2022/9/20.
//
#include <iostream>
#include <memory>
#include <vector>

using std::vector;
using std::shared_ptr;
using std::shared_ptr;

template<typename T>
struct Node {
    T val;
    shared_ptr<Node<T>> left{nullptr};
    shared_ptr<Node<T>> right{nullptr};

    Node() : val(-1) {

    }

    explicit Node(T val) : val(val) {

    }
};

template<typename T>
class BinaryTree {
public:
    BinaryTree() : root(nullptr) {

    }

    shared_ptr<Node<T>> find(T data) {
        shared_ptr<Node<T>> p = root;
        while (p != nullptr) {
            if (data < p->val) {
                p = p->left;
            } else if (data > p->val) {
                p = p->right;
            } else {
                return p;
            }
        }
    }

    void insNode(T data) {
        if (root == nullptr) {
            root = std::make_shared<Node<T>>(data);
            return;
        }

        shared_ptr<Node<T>> p = this->root;
        while (p != nullptr) {
            if (data > p->val) {
                if (p->right == nullptr) {
                    p->right = std::make_shared<Node<T>>(data);
                    return;
                }

                p = p->right;
            } else if (data < p->val) {
                if (p->left == nullptr) {
                    p->left = std::make_shared<Node<T>>(data);
                    return;
                }

                p = p->left;
            } else {
                // 重复的数据，不允许
                std::cout << "duplicate" << std::endl;

                return;
            }
        }
    }

    void delNode(T data) {
        auto p = root;
        shared_ptr<Node<T>> pp = nullptr;   // pp record p's parent

        while (p != nullptr && p->val != data) {
            pp = p;
            if (data > p->val) {
                p = p->right;
            } else {
                p = p->left;
            }
        }

        // if p is null, means not found Node of data
        if (p == nullptr) return;

        // the node to delete have two children
        if (p->left != nullptr && p->right != nullptr) {
            shared_ptr<Node<T>> minNode = p->right;
            shared_ptr<Node<T>> minNodeParent = p;

            while (minNode->left != nullptr) {
                minNodeParent = minNode;
                minNode = minNode->left;
            }

            p->val = minNode->val;
            p = minNode;
            pp = minNodeParent;
        }

        // if the node to delete have no child or one child
        shared_ptr<Node<T>> child;
        if (p->left != nullptr) {
            child = p->left;
        } else if (p->right != nullptr) {
            child = p->right;
        } else {
            child = nullptr;
        }

        // the node to delete is root
        if (pp == nullptr) {
            root = child;
        } else if (pp->left == p) {
            pp->left = child;
        } else {
            pp->right = child;
        }
    }

    void printAll() {
        traverse(root);

        std::cout << std::endl;
    }

    void traverse(shared_ptr<Node<T>> node) {
        if (node == nullptr) {
            return;
        }
        std::cout << node->val << " ";
        traverse(node->left);
        traverse(node->right);
    }

private:
    shared_ptr<Node<T>> root;
};


int main() {
    vector<int> arr{5, 8, 2, 1, 10, 12, 12, 13, 13, 23, 98, 21, 24};

    shared_ptr<BinaryTree<int>> tree = std::make_shared<BinaryTree<int>>();
    for (auto v: arr) {
        tree->insNode(v);
    }

    tree->delNode(13);
    tree->insNode(13);

    tree->printAll();
}
```
