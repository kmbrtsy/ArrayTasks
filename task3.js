function getPositives(arr){
    
    let positives = arr.filter(function(number){
        return number >= 0;
    })

    return positives;
}

var arr =[-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr2 = getPositives(arr);
console.log(arr2);