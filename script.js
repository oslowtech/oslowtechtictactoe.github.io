let block=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let winnerList=document.querySelector(".winner");
let view=document.querySelector("#ViewButton");
let turnO=false;
let turnX=true;
let winO=0;
let winX=0;
let winner=[
    ["block1","block2","block3"],["block4","block5","block6"],["block7","block8","block9"],//row
    ["block1","block4","block7"],["block2","block5","block8"],["block3","block6","block9"],//column
    ["block1","block5","block9"],["block3","block5","block7"],                             //diagonals
];
reset.addEventListener("click",()=>{
    location.reload();
})
let win=0;
block.forEach((box)=>{
    box.addEventListener("click",()=>{
        let id= box.getAttribute("id");
        if(turnX==true && box.innerText==""){
            box.innerText="X";
            turnX=false;
            turnO=true;
            let id1=box.getAttribute("id");
        }
        if(turnO==true && box.innerText==""){
            box.innerText="O";
            turnO=false;
            turnX=true;
            let id2=box.getAttribute("id");  
        }
        checkWinner();
    });
})
const checkWinner=()=>{
    let win=0;
    let win2=0;
    for(let patterns of winner){
        let id1=document.getElementById(patterns[0]);
        let id2=document.getElementById(patterns[1]);
        let id3=document.getElementById(patterns[2]);
        let innerText1=id1.innerText;
        let innerText2=id2.innerText;
        let innerText3=id3.innerText;
        if(innerText1==innerText2 && innerText2==innerText3)
            {
                if(innerText1=="X"){
                    winnerList.setAttribute("id","winner");
                    winnerList.innerText="The Winner Is X";
                }
                else if(innerText1=="O"){
                    winnerList.setAttribute("id","winner");
                    winnerList.innerText="The Winner Is O";
                }
            }
    }
}
view.addEventListener("click",()=>{
    winnerList.removeAttribute("id");
    winnerList.innerText="";
})



