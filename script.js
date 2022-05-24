

const rowNum = 20
const columnNum = 20

const container = document.createElement('div')
const styleWhole = document.createElement('style')
const chooseBody = document.querySelector('body')

const title = document.createElement('h1')
const chooseH1 = document.querySelector('h1')

//CONTAINER STYLES
// container.style['border'] = 'solid red 3px'
container.style['width'] = '500px'
container.style['height'] = '500px'
container.style['display'] = 'flex'
container.style['flex-direction'] = 'column'
container.style['background-color'] = 'white'
container.style['border'] = 'solid black 3px'


//TITLE
title.textContent = 'ETCH-A-SKETCH'
chooseBody.appendChild(title)


//BODY
chooseBody.style['display'] = 'flex'
chooseBody.style['flex-direction'] = 'column'
chooseBody.style['justify-content'] = 'center'
chooseBody.style['align-items'] = 'center'
chooseBody.style['margin-top'] = '50px'
chooseBody.style['background-color'] = '#f0f5f0'

// ADD STYLE IN THE HEAD SECTION
document.head.appendChild(styleWhole)
styleWhole.style['box-sizing'] = 'border-box'
// styleWhole.innerHTML = ".box-item:hover {background-color: black;} "

// IN THE BODY APPEND THE COTAINER
document.body.appendChild(container)
const perRow = document.createElement('div')

for(let i = 0; i < rowNum; i++){
    const perRow = document.createElement('div')

    //ROWS
    // perRow.style['border'] = 'solid #7e05ff 1px'
    perRow.style['width'] = '100%'
    perRow.style['height'] = '100px'
    
    perRow.style['display'] = 'flex'

    //COLUMNS


    for(let i = 0; i < columnNum; i++){
        const theColumns = document.createElement('div')
        // theColumns.style['border'] = 'solid yellow 2px'
        // theColumns.style['background-color'] = '#00ffee'
        theColumns.style['width'] = '100%'
        theColumns.style['height'] = '100%'
        theColumns.classList.add("box-item")
        

        perRow.appendChild(theColumns)

        
    }
   
    
    container.appendChild(perRow) // Insert in the container
      
}

let goHover = document.querySelectorAll('div.box-item')

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//COLOR EVERY GRID BOX
for(item of goHover){

    item.addEventListener('mouseover', addColor)
    item.addEventListener('mousedown', addColor)
}

function addColor(e){
    if(e.type === 'mouseover' && mouseDown === true){
        // if(mouseDown){
        // 
        // }
        return e.target.style['background-color'] = 'black'
    }
}


//RESET
const rstBtn = document.createElement('button')

rstBtn.textContent ='RESET BUTTON'
rstBtn.style['margin-top'] ='20px'

rstBtn.addEventListener('click', event =>{
    
    for(item of goHover){
        item.style['background-color']='white'
    }
})
chooseBody.appendChild(rstBtn)