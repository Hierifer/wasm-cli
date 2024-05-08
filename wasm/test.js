// var asd = function(arr){
//   arr.sort((a,b) => {
//     for(let i = 0; i < Math.max(a.length, b.length); i++){
//       if(a.charCodeAt(i) < b.charCodeAt(i)){
//         return -1
//       } else if(a.charCodeAt(i) > b.charCodeAt(i)){
//         return 1
//       }
//     }
//     if(a.length === b.length){
//       return 0
//     }
//     return a.length < b.length ? -1 : 1
//   })
//   console.log(arr)
// }

// let arr = ['asd','basd','asd','','asdf','asdw', 'a']
// asd(arr)

var intersect = function(arr1, arr2){
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        console.log(arr1[i])
        arr2[j] = undefined
      }
    }
  }
}
intersect([1,2,3,3,4,5], [3,4,5,6,7])