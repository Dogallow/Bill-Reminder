let prizeButton = document.getElementById('prize-button')
let numText = document.getElementById('num-text')
let text = document.getElementById('text')


let data = ["you win an eraser", "you win a book", "you win a stuffed animal"]

prizeButton.addEventListener('click', function(){
    let number = Math.floor(Math.random() * 1000)
    
    if(number < 200){
        numText.innerText=(`${number}`)
        text.innerText=`${data[0]}`
    }else if(number < 500){
        numText.innerText=(number)
        text.innerText=`${data[1]}`
    } else {
        numText.innerText=(number)
        text.innerText=`${data[2]}`
    }
})
