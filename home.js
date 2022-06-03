let navMenu=document.getElementById('nav-menu__open')
let hamburgerIcon = document.getElementById('hamburger-icon')


let randomButton = document.querySelector('.random-gen-btn');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');

let rewards = document.getElementById('rewards')


const apiUrl = 'https://randomuser.me/api/'

async function getApi (url){
    const response = await fetch(url);
    const data = await response.json()
    .then((data)=>{
        console.log(data.results[0])
        firstName.innerText = data.results[0].name.first
        lastName.innerText = data.results[0].name.last
    })

  
}


hamburgerIcon.addEventListener('click',()=>{
    navMenu.classList.toggle('nav-menu__closed');
    console.log('click')
})
randomButton.addEventListener('click', ()=>{
    getApi(apiUrl)
    rewards.innerText = Math.floor(Math.random()*1000) + " reward points"
    
})
