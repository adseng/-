// 插入排序
function insertSort(arr = []) {
    // 先将arr 分为 arr[0]和其他 也就是已排序的和未排序的
    // 这里我们从第2个开始循环
    for (let i = 1; i < arr.length; i++) {
        // 这里我们将第i个元素和前面i-1个元素进行对比
        // 换句话说也是将前面i个元素从后往前进行一个冒泡，因为前i-1个元素
        // 已经是有序的了，所以只需要进行一次冒泡就可以将第i个元素冒泡到正确的位置
        // 注意这里是 > 0
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            } else {
                break;
            }
        }
    }
}

// 插入排序2.0
function insertSort2(arr = []) {
    // 先将arr 分为 arr[0]和其他 也就是已排序的和未排序的
    // 这里我们从第2个开始循环
    for (let i = 1; i < arr.length; i++) {
        // 这里我们将第i个元素和前面i-1个元素进行对比
        // 换句话说也是将前面i个元素从后往前进行一个冒泡，因为前i-1个元素
        // 已经是有序的了，所以只需要进行一次冒泡就可以将第i个元素冒泡到正确的位置
        // 注意这里是 > 0
        let temp = a[i]
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            } else {
                break;
            }
        }
    }
}

let a = [2, 4, 2, 3, 14, 55, 26, 16, 36, 34, 23]
insertSort(a)
console.log(a)