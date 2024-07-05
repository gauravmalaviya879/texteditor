let dataBox = document.getElementById('text-contain')
let inputVal = document.getElementById('input-handel')
function textAddBox() {

    dataBox.innerHTML = "<h4>" + inputVal.value + "</h4>"
}

function textColorChange(){
    dataBox.style.color = 'red'
}

// when enter in cursor
function changebg(){
    dataBox.style.backgroundColor ='rgba(120, 120, 232, 0.264)'
}

function removebg(){
    dataBox.style.backgroundColor ='white'
}

function sizemanage(){
    let sizeget = document.getElementById('size-handel')
    sizeget.value < 60 ? dataBox.style.fontSize =  `${sizeget.value}px` :  dataBox.style.fontSize =  `18px`;

}

function capital(){
    dataBox.style.textTransform ="capitalize"
}