// 选择排序 每次循环选出剩下数组里面最小的元素放在前面
function selectSort(arr = []) {
    // 注意这里为什么是 -1
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        // 注意这里为什么是 +1
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
}

let a = [2, 4, 2, 3, 14, 55, 26, 16, 36, 34, 23]
selectSort(a)
console.log(a)
