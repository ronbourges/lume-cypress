let array = [10,11,12,13,14,15]

console.log(array.length ) 
let x=0
while(x< array.length) {
    console.log("numero de x é:" + x)
    console.log("------------------")
    console.log("valor da posição é:" + array[x])
    console.log("------------------")
    x= x+1
}
for(let index = 0; index < array.length;index++) {
     console.log("numero de index é:" + index)
    console.log("------------------")
    console.log("valor da posição é:" + array[index])
    console.log("------------------")

}