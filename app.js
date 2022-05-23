let submitButton = document.getElementById('submit-button')
let billName = document.getElementById('bill-name')
let billDate = document.getElementById('bill-date')
let listedBills = document.getElementById('bill-list')
let recurring = document.getElementById('recurring-bill')


let billList= []
window.addEventListener('click',()=>{
    // console.log(billList)
})

submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
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
                button.innerText="Delete";

                li.innerHTML="<li>"+bill.billName+", "+ bill.billDate +". " + "Is this bill recurring?" + bill.recurring +"</li>";
                li.appendChild(button)
                listedBills.appendChild(li);



            button.addEventListener('click', ()=>{
                //Need work modifying the array, so that the delete functionality works
                console.log(billList, i)
                listedBills.removeChild(li)

                 billList.splice(i,i+1)
                console.log(billList.splice(i,i+1))
                })
            }



            billName.value= "";
            billDate.value= "";

        })
    }

    if (!bool) bool = true
    console.log(billList)



})
 function removeListItem(list, index){
    console.log("this func")
 }
