// 希尔排序

function shellSort(a = []) {
    // 获取增量队列算法
    let q = incrementalQueue(a.length)
    q.forEach(gap => {
        // gap 列
        // col,col+gap,col+gap*2,....
        for (let col = 0; col < gap; col++) {
            // 插入排序
            for (let k = col + gap; k < a.length; k = k + gap) {
                for (let l = k; l > 0; l = l - gap) {
                    if (a[l] < a[l - gap]) {
                        [a[l], a[l - gap]] = [a[l - gap], a[l]]
                    } else {
                        break;
                    }
                }
            }
        }
    })
    return a

}

// 获取增量队列算法
function incrementalQueue(n) {
    let a = []
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        a.push(gap)
    }
    return a
}

let a = [2, 4, 2, 3, 14, 55, 26, 16, 36, 34, 23]
a = shellSort(a)
console.log(a)
