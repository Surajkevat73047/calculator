function add(){
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");

num1=parseFloat(input1.value)
num2=parseFloat(input2.value)
sum=num1+num2
let result=document.getElementById("result");
result.innerHTML=sum;
}
function minus(){
    let input1=document.getElementById("input1");
    let input2=document.getElementById("input2");
    
    num1=parseFloat(input1.value)
    num2=parseFloat(input2.value)
    minus=num1-num2
    let result=document.getElementById("result");
    result.innerHTML=minus;
    }
    
    function multiply(){
        let input1=document.getElementById("input1");
        let input2=document.getElementById("input2");
        
        num1=parseFloat(input1.value)
        num2=parseFloat(input2.value)
        multiply=num1*num2
        let result=document.getElementById("result");
        result.innerHTML=multiply;
        }
        function divide(){
            let input1=document.getElementById("input1");
            let input2=document.getElementById("input2");
            
            num1=parseFloat(input1.value)
            num2=parseFloat(input2.value)
            divide=num1/num2
            let result=document.getElementById("result");
            result.innerHTML=divide;
            }