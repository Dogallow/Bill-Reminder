
let submitButton = document.getElementById('submit-button')
let billName = document.getElementById('bill-name')
let billDate = document.getElementById('bill-date')
let listedBills = document.getElementById('bill-list')
let recurring = document.getElementById('recurring-bill')

let navMenu=document.getElementById('nav-menu__open')
let hamburgerIcon = document.getElementById('hamburger-icon')
let formContainer = document.querySelector('.form-container')






hamburgerIcon.addEventListener('click', ()=>{
    console.log('click')
    navMenu.classList.toggle('nav-menu__closed');
})




submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(e)
    // Need to implement some logic that checks whether that exact occurrence is still in the list because it submits two
    let bool = true
    for(let i=0; i<billList.length; i++){
        if(billList[i].billName == billName.value){
            alert('this is the same entry')
            bool=false
            }
    }
    if(bool){
        billList.push({billName: billName.value, billDate: billDate.value, recurring: recurring.value})
        return billList.map((bill,i)=>{

            if(i === billList.length-1){

                let li = document.createElement('li');
                let button = document.createElement('button');
                let editButton = document.createElement('button');
                button.innerHTML="<i class='fa-solid fa-x'></i>";
                editButton.innerHTML='<i class="fa-solid fa-file-pen"></i>';

                li.innerHTML="<li>"+bill.billName+"<br> "+ bill.billDate +".<br> " + "Is this bill recurring?  " + bill.recurring +"</li>";
                li.appendChild(button)
                li.appendChild(editButton)
                listedBills.appendChild(li);



            button.addEventListener('click', ()=>{
                //Need work modifying the array, so that the delete functionality works
                console.log(billList, i)
                listedBills.removeChild(li)

                 billList.splice(i,i+1)
                console.log(billList.splice(i,1))
                })


            editButton.addEventListener('click', ()=>{
                //Need work modifying the array, so that the delete functionality works
                console.log(billList, i)


                 billList.splice(i,i+1)
                console.log(billList.splice(i,1))
                })



            }



            billName.value= "";
            billDate.value= "";

        })
    }

    if (!bool) bool = true
    console.log(billList)



})




let billList= []
