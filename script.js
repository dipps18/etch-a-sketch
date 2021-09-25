function createGrid(noOfBoxesPerSide){
    let sideOfCanvas=640;
    let sideOfBox=sideOfCanvas/noOfBoxesPerSide;
    for(let i=0;i<Math.pow(noOfBoxesPerSide,2);i++){
        const div=document.createElement("div");
        div.setAttribute("style",`height:${sideOfBox}px;width:${sideOfBox}px;`);
        content.appendChild(div);
    }
    console.log(content);

}
const content=document.querySelector('.content');
const button=document.querySelector('button');
createGrid(9);
let grid=content.querySelectorAll('div');
button.addEventListener('click',()=>{
    console.log(grid);
    grid.forEach((box)=>{
        box.classList.remove("hover");
        content.removeChild(box);
    })
    let side=prompt("Select size");
    createGrid(side);
})

grid.forEach((box)=>{
    box.addEventListener('mouseover',()=>{
        box.classList.add('hover');
        console.log("hello");
    })
})

