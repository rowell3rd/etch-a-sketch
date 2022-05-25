



const DEFAULT_COLOR = 'black'

let currentColor = DEFAULT_COLOR

const container = document.createElement('div')
const styleWhole = document.createElement('style')
const chooseBody = document.querySelector('body')
const title = document.createElement('h1')
const chooseH1 = document.querySelector('h1')


//BUTTONS
const buttonContainer = document.createElement('div')
const rstBtn = document.createElement('button')
const blackBtn = document.createElement('button')
const whiteBtn = document.createElement('button')
const randomBtn = document.createElement('button')

buttonContainer.style['display'] = 'flex'
buttonContainer.style['justify-content'] = 'center'
buttonContainer.style['align-items'] = 'center'
buttonContainer.style['gap'] = '20px'

//APPEND THE BUTTONS
buttonContainer.appendChild(rstBtn)
buttonContainer.appendChild(blackBtn)
buttonContainer.appendChild(whiteBtn)
buttonContainer.appendChild(randomBtn)

// CURRENT COLOR

function chooseColor(color){

    switch(color){
        case 'black':
            currentColor = color  
            break;
        case 'white':
            currentColor = color  
            break;
        case 'random':
            currentColor = color  
            break;
        default:
            currentColor = 'black'
    }
}

//RESET

rstBtn.addEventListener('click', (event) =>{
    
    for(item of goHover){
        item.style['background-color']='white'
       
        }
})


blackBtn.addEventListener('click', () => chooseColor('black'))
whiteBtn.addEventListener('click', () => chooseColor('white'))
randomBtn.addEventListener('click', () => chooseColor('random'))


// TEXT CONTENT

rstBtn.textContent ='RESET BUTTON'
blackBtn.textContent ='DEFAULT'
whiteBtn.textContent ='WHITE'
randomBtn.textContent ='RANDOM'

chooseBody.parentNode.insertBefore(buttonContainer,container.nextSibling)
//SLIDER

let rowNum = 0
let columnNum = 0

const sliderContainer = document.createElement('div')
const slider = document.createElement('input')

sliderContainer.appendChild(slider)
slider.type = 'range'
slider.min = `1`
slider.max = `50`


rowNum = parseInt(slider.value)
columnNum = parseInt(slider.value)




chooseBody.parentNode.insertBefore(sliderContainer,buttonContainer.nextSibling)

//CONTAINER STYLES
container.style['width'] = '500px'
container.style['height'] = '430px'
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
chooseBody.style['background-color'] = '#f0f5f0'

// ADD STYLE IN THE HEAD SECTION
document.head.appendChild(styleWhole)
styleWhole.style['box-sizing'] = 'border-box'

// IN THE BODY APPEND THE CONTAINER
chooseBody.appendChild(container)
const perRow = document.createElement('div')

for(let i = 0; i < rowNum; i++){
    const perRow = document.createElement('div')

    //ROWS
    perRow.style['width'] = '100%'
    perRow.style['height'] = '100px'
    perRow.style['display'] = 'flex'

    //COLUMNS
    for(let i = 0; i < columnNum; i++){
        const theColumns = document.createElement('div')
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
    if(e.type === 'mouseover' && mouseDown === true ) {
        if(currentColor =='random'){
            const num1 = Math.floor(Math.random()*256)
            const num2 = Math.floor(Math.random()*256)
            const num3 = Math.floor(Math.random()*256)
        return e.target.style['background-color'] = `rgb(${num1},${num2},${num3})`
        }else if(currentColor =='black'){
            return e.target.style['background-color'] = `black`
        }else if(currentColor =='white'){
            return e.target.style['background-color'] = `white`
        }
            
    }
}

function randomColor(e){
        if(e.type === 'mouseover' && mouseDown === true ){
            
            return e.target.style['background-color'] = color
        }
}


