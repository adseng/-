// 冒泡排序
function bubbleSort(arr = []){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
}

// 冒泡排序2.0 进阶写法 增加标志位 如果数组本身就是有序的，就不用排序
function betterBubbleSort(arr = []){
    let flag = true // 数组是否是有序的
    // 先来循环一次，看看数组是不是有序的
    for (let i=0; i<arr.length; i++){
        if (arr[i] > arr[i+1]) {
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            flag = false
        }
    }
    if (flag) return
    for (let i=0; i<arr.length-1; i++){
        for (let j=0; j<arr.length - i- 2; j++){
            if (arr[j] > arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
}


let a = [2,4,3,14,5,26,16,36,34]

betterBubbleSort(a)

console.log(a)