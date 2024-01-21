var cnt = 0;
var arr = [true,true,true,true,true,true,true,true,true]
var boxMap = {
    1 : "x",
    2 : "x",
    3 : "x",
    4 : "x",
    5 : "x",
    6 : "x",
    7 : "x",
    8 : "x",
    9 : "x",
}


var noOfBoxes = document.querySelectorAll(".clickElement").length;
for(var i=0; i<noOfBoxes; i++){
    
    document.querySelectorAll(".clickElement")[i].addEventListener("click", function(e){
        var num = parseInt(this.id.slice(3,4))-1;
        if(arr[num] === true){
            if(cnt % 2 == 1){
                // console.log(e.target);
                this.innerHTML = '<img src="./assets/images/circle.svg">'
                boxMap[this.id.slice(3,4)] = "o";
            }
            else{
                this.innerHTML = '<img src="./assets/images/x-lg.svg">'
                boxMap[this.id.slice(3,4)] = "x";
            }
            cnt++;
            arr[num] = false;
        }
        
        
    })
}


function checkResult(){
    var flag = true;
    for(var i=0; i<9; i++){
        if(arr[i] == true){
            flag = false;
        }
    }
    if (flag) {
        if((boxMap["1"] == boxMap["2"]) && (boxMap["2"] == boxMap["3"]) ||
        (boxMap["4"] == boxMap["5"]) && (boxMap["5"] == boxMap["6"]) ||
        (boxMap["7"] == boxMap["8"]) && (boxMap["8"] == boxMap["9"]) ||
        (boxMap["1"] == boxMap["4"]) && (boxMap["4"] == boxMap["7"]) ||
        (boxMap["2"] == boxMap["5"]) && (boxMap["5"] == boxMap["8"]) ||
        (boxMap["3"] == boxMap["6"]) && (boxMap["6"] == boxMap["9"]) ||
        (boxMap["1"] == boxMap["5"]) && (boxMap["5"] == boxMap["9"]) ||
        (boxMap["3"] == boxMap["5"]) && (boxMap["5"] == boxMap["7"])
        ){
            var res = boxMap["1"].toUpperCase() + " has won!";
            document.querySelector("h2").innerHTML = res;
            // console.log();
        }
        else{
            // var res = boxMap["1"].toUpperCase() + " has won!";
            document.querySelector("h2").innerHTML = "It's a Draw!";
        }
    }
}
document.querySelector(".result").addEventListener("click", function(){
    checkResult();

})

