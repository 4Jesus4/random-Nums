const pElement=document.getElementsByTagName("p")[0];//Get the p element to show the result
let throwTheDices=()=>{
    const numOfDices=+document.getElementById("numOfDices").value;
    let resultList=[];
    for (let i = 0; i < numOfDices; i++) {
        let diceNum=Math.floor(Math.random()*6)+1;
        resultList.push(diceNum);
    };//Thorw the dices the num indicaded
    let total= resultList.reduce((sum,num)=>{
        return sum+num;
    });
    pElement.innerHTML=("Total= "+ total+"<br>The result are: <br>"+resultList.join("<br>"));//Show the vaules on screen
};