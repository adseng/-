// 快速排序

function quickSort(a = []) {
    let len = a.length
    if (len <= 1) {
        return a
    }
    // 基点
    let point = a[0]
    let left = []
    let right = []
    for (let i = 1; i < len; i++) {
        if (a[i] < point) {
            left.push(a[i])
        } else {
            right.push(a[i])
        }
    }
    let b = quickSort(left)
    let c = quickSort(right)
    return b.concat([point], c)
}

let a1 = [2, 4, 2, 3, 14, 55, 26, 16, 36, 34, 23]
let b1 = quickSort(a1)
console.log(b1)