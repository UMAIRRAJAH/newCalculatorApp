function getNum(num){
      var result = document.getElementById("result");
      var lastInput = result.value.slice(result.value.length - 1);
      var operators = ["+","-","/","*","%"];
      if (operators.indexOf(lastInput)!== -1 && operators.indexOf(num) !== -1 ){
          var newValue = result.value.slice(0,result.value.length-1);
          result.value = newValue + num;
      }else{
          result.value += num;
  
      }
}
function clearResult(){
      var result = document.getElementById("result");
      result.value = ""
}
function getResult(){
      var result = document.getElementById("result");
      result.value =eval(result.value)
}
function getCCResult(){
      var result = document.getElementById("result");
      var delLast = result.value.slice(0,result.value.length -1); 
      result.value = delLast;


}