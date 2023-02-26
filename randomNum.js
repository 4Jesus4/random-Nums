let input= (document.getElementsByTagName("input")[0]);
let div= document.getElementsByTagName("div")[1];
let b= document.getElementsByTagName("b")[0];
div.style.backgroundColor= `black`;
let pickARandomNum=()=>{
    let maxValue= input.value;
    if(maxValue<=0){
        maxValue=10;
    };
    let randomNum= Math.round(Math.random()*maxValue);
    div.style.backgroundColor= `#383838`;
    b.innerHTML=randomNum;
};