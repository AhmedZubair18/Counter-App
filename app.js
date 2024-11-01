let count = 0

function increase(){
    count++
    document.getElementById('counter').innerHTML = count
}
function decrease(){
    if(count > 0){
        count--
        document.getElementById('counter').innerHTML = count
    }
}
function reset(){
    document.getElementById('counter').innerHTML = count = 0
}