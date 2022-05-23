

const rowNum = 100
const columnNum = 100

const container = document.createElement('div')
const styleWhole = document.createElement('style')

//CONTAINER STYLES
// container.style['border'] = 'solid red 3px'
container.style['width'] = '100%'
container.style['height'] = '44rem'
container.style['display'] = 'flex'
container.style['flex-direction'] = 'column'

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
    perRow.style['border'] = 'solid #7e05ff 1px'
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


for(item of goHover){

    item.addEventListener('mouseenter', event =>{
        event.target.style['background-color'] = 'black'
    })
}
