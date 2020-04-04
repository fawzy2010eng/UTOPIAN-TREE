function utopianTree(n) {
    var x = 1
    for(var i = 0; i < n; i++){
        if(i%2 == 0){
            x = 2*x  
        }else{
            x++  
        }
    }
    return x

}
console.log(utopianTree(6))
