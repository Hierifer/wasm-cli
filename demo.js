// 1、实现一个长度为n 的bit 数组的读写操作。（30 分）
// 例：
// 长度87 的bit 数组，设置其0、1、8、77 为1；
// 输入位置数组：[0,1,2,8,57,77,90]
// 输出：
// bit 0 is 1
// bit 1 is 1
// bit 2 is 0
// bit 8 is 1
// bit 57 is 0
// bit 77 is 1
// bit 90 is -1

class Bits {
    constructor(n){
        this.bits = new Array(n).fill(0)
    }
    set(i){
        this.bits[i] = 1
    }
    get(i){
        if(i > this.bits.length){
            console.log(`bit ${i} is -1`)
        } else {
            console.log(`bit ${i} is ${bits[i]}`)
        }
    }
}
var helper = function(n,arr){
    arr.forEach((i) => {
        get(i)
    })
}


// 2、给定两个由数字组成的集合，取它们的交集，请写出尽可能多的实现，并评估每种实
// 现的时间复杂度 （30 分）
// 范例:
// 输入
// * [1, 5, 4, 11, 9]
// * [2, 5, 11, 3]
// 输出
// * [5, 11]
// * 时间复杂度 O(xx)


var it = function(arr1, arr2){
    let out = []
    let map = {}
    arr1.forEach((i) => {
        map[i] = true
    })
    arr2.forEach((i) => {
        if(map[i]){
            out.push(i)
        }
    })
    console.log(out)
    //return out
}

it([1, 5, 4, 11, 9], [2, 5, 11, 3])

// 4、请撰写一段程序，查找下图中(A,4)点到(D,1)点的路径，其中，格点上有黑色实心圈
// 为障碍物，无法通过。程序应返回[A, 4, B, 4, C, 4, C, 3, D, 3, D, 2, D, 1]，也可
// 自行设计数据结构存储。（30 分）


var findPath = function(table, start, end, path = []){
    let path = []

    if(start[0] === end[0] && start[1] === end[1]){
        return path
    }
    let [i, j] = start
    if(i-1 >= 0 && !path.includes(`${i-1},${j}`)){
        let out = findPath(table, [i-1, j], end, path.concat(`${i-1},${j}`))
        if(out.length > 0){
            return out
        }
    }
    if(i+1 < table.length && !path.includes(`${i+1},${j}`)){
        let out = findPath(table, [i+1, j], end, path.concat(`${i+1},${j}`))
        if(out.length > 0){
            return out
        }
    }
    if(j-1 >= 0 && !path.includes(`${i},${j-1}`)){
        let out = findPath(table, [i, j-1], end, path.concat(`${i},${j-1}`))
        if(out.length > 0){
            return out
        }
    }
    if(j+1 < table[0].length && !path.includes(`${i},${j+1}`)){
        let out = findPath(table, [i, j+1], end, path.concat(`${i},${j+1}`))
        if(out.length > 0){
            return out
        }
    }
    return []
}

// 5、输入一个由多个首字母大写的单词拼成的字符串，要求对单词按字母顺序排序，输出
// 排序后的字符串（30分）
// 输入：ThisIsAnExample
// 输出：AnExampleIsThis

var asort = function(str){
    let cur = ''
    let arr = []
   // console.log(str)
    for(let i = 0; i < str.split('').length; i++){
        if(str[i].charCodeAt() < 97){
            arr.push(cur)
            cur = ''
        }
        cur = cur + str[i]
    }
    if(cur){
        arr.push(cur)
    
    }
    arr.sort((a, b) => {
        return a.charCodeAt() - b.charCodeAt()
    })
    console.log(arr.join(''))
}
asort('ThisIsAnExample')

// 6、求一个节点的恰好k 跳邻居：给定一个有N 个顶点和E 条边的无向图，节点编号为0～
// N-1。 求图上一个点A 的恰好K 步可达的邻居（不存在更短的路径），返回邻居的顶点编
// 号集合。输入包含E+1 行，第一行分别为N、E、A、K，第2～E+1 行为图上的每条边的两
// 个端点编号。（30 分）
// 示例：
// 输入：
// 7 9 0 2
// 0 1
// 0 3
// 0 5
// 1 2
// 1 3
// 1 4
// 3 2
// 4 5
// 3 6
// 输出：
// [2, 4, 6]

var bfs = function(graph, start, k){
    let visited = []
    let queue = [start]
    while(k > 0){
        let nextQue = []
        while(queue.length > 0){
            let cur = queue.shift()
            for(let i = 0; i < graph.length; i++){
                let [i, j] = graph[i]
                if(i === cur && !visited.includes(j)){
                    nextQue.push(j)
                }
            }
        }
        queue = nextQue
    }
    return queue.filter((i) => {
        return !visited.includes(i)
    })
}

// 7、消消乐辅助工具：二维数组表示一个消消乐小游戏，每横向或是竖向超过3 个相同的
// 符号可以消除，斜向不可以消除。初始状态为不可消除状态，只可以移动相邻的两个符
// 号，符号0-9 表示。实现一个辅助工具，提示移动哪个符号可以成功消除，只输出一个可
// 成功消除的交换即可。（30 分）
// 示例：
// 输入
// 5 5
// 1 2 3 4 5
// 2 3 4 5 6
// 3 4 5 4 4
// 4 5 4 7 8
// 5 6 7 8 9
// 输出
// [2,3]->[3,3]

var solution = function(table){
    // 
}