function createGrid(noOfBoxesPerSide){
    for(let i=0;i<Math.pow(noOfBoxesPerSide,2);i++){
        const div=document.createElement("div");
        div.setAttribute("style",`height:${100/noOfBoxesPerSide}%;width:${100/noOfBoxesPerSide}%;`);
        content.appendChild(div);
    }
}

function createGridListener(){
    grid=content.querySelectorAll('div');
    grid.forEach((box)=>{
        box.addEventListener('mouseover',()=>{
            box.classList.add('hover');
        })
    })
}

function createButtonListener(button){
    button.addEventListener('click',()=>{
        let size;
        grid.forEach((box)=>{
            box.classList.remove("hover");
            content.removeChild(box);
        })
        do{
            size=prompt("Select size");
        }while(size>100)
        createGrid(size);
        createGridListener();
    
    })
}

const content=document.querySelector('.content');
const button=document.querySelector('button');
let grid=content.querySelectorAll('div');

createGrid(16);
createButtonListener(button);
createGridListener();

