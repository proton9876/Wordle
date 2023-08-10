var j=0;
var i=1;
var word;
var chances=5;
const speaker=document.getElementById('speakr');
const bgm=document.getElementById('bgm');
api_url="https://random-word-api.herokuapp.com/word?length=5";
window.onload=()=>{
    bgm.play();
}
function playsound(){
   
    speaker.addEventListener('click',()=>{
        bgm.pause();
        speaker.style.opacity=0.5;
       
    })
}

getword(api_url);
async function getword(api_url){
    const response=await fetch(api_url);
    const data= await response.json();
    word=data.toString().toUpperCase();
    
    console.log(word);
}



function keyadd(){
    
   document.addEventListener('keydown',(e)=>{
    let divElements = document.querySelectorAll(`.div${i}`);
    if(e.key>='a' && e.key<='z' && j<5){
        divElements[j].innerHTML=e.key.toUpperCase();
        j++;
    }
    else if(e.key=='Backspace' && j>0){
        divElements[j-1].innerHTML='';
        j--;
    }
    else if(e.key=='Enter'&& j==5){
                console.log("enter was pressed")
                
        ddd();
    }
   
})}
keyadd();

function ddd(){
   console.log("after passing into dd fun",i);
   checkword();
   i++;
   j=0;
    console.log("after keyadd",i);
}

function checkword(){
    let str="";
    let divElements = document.querySelectorAll(`.div${i}`);
    for(let k=0;k<5;k++){
        str+=divElements[k].innerText;
        if(str[k]==word[k]){
            console.log("right word",str[k])
           let hj=divElements[k];
            hj.style.backgroundColor="#497617";
            
        }
        else if(word.includes(str[k])){
            console.log("include word",str[k])
            let hj1=divElements[k];
            hj1.style.backgroundColor="#d6984d";
            
        }
        else{
            console.log("not in word");
            let hj=divElements[k];
            hj.style.backgroundColor="black";
            

        }
    }
    console.log(str);
    if(str==word){
        const plays=document.getElementById('sound');
        plays.play();
        const divwin=document.createElement('div');
        divwin.className='overlay';
        divwin.style.display="inline-block";
        divwin.style.transform='translateY(-300px)';
        divwin.innerText="You Won!!!";
        document.body.appendChild(divwin);
        setInterval(() => {
            location.reload();
        }, 4000);
    }
    else if(str!=word && i==5){
        const divwin=document.createElement('div');
        divwin.className='overlay';
        divwin.style.display="inline-block";
        divwin.style.transform='translateY(-300px)';
        divwin.innerText="OOPS! THE WORD WAS "+word;
        document.body.appendChild(divwin);
        setInterval(() => {
            location.reload();
        }, 4000);
    }


}

playsound();