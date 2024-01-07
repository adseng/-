// // 归并排序
//
// 合并a，b两个有序数组
function mergeArr(a = [], b = []) {
    let i = 0;
    let j = 0;
    let c = [];
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            c.push(a[i]);
            i++;
        } else {
            c.push(b[j]);
            j++;
        }
    }
    if (i < a.length) {
        return c.concat(a.slice(i));
    } else {
        return c.concat(b.slice(j));
    }
}

// 拆分
function mergeSort(arr = []) {
    let len = arr.length
    if (len <= 1) {
        return arr
    }
    let middle = Math.floor(len / 2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    return mergeArr(left, right)
}

let a1 = [2, 4, 2, 3, 14, 55, 26, 16, 36, 34, 23]
let b1 = mergeSort(a1)
console.log(b1)
