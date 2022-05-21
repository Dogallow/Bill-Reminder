let submitButton = document.getElementById('submit-button')
let billName = document.getElementById('bill-name')
let billDate = document.getElementById('bill-date')
let listedBills = document.getElementById('bill-list')


let billList= []

submitButton.addEventListener('click',(e)=>{
    e.preventDefault()
    billList.push({billName: billName.value, billDate: billDate.value})
    console.log(billList)

return billList.map((bill,i)=>{
        console.log(billList[billList.length-1].billName == bill.billName)
        console.log(billList[billList.length-1])
    if (billList[billList.length-1].billName == bill.billName){
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.innerText="Delete";

        li.innerHTML="<li>"+bill.billName+", "+ bill.billDate +"</li>";
        li.appendChild(button)
        listedBills.appendChild(li);


        button.addEventListener('click', ()=>{
            //Need work modifying the array, so that the delete functionality works
            console.log(billList, i)
            listedBills.removeChild(li)

            billList = billList.slice(i,i+1)
            console.log(billList)
        })

    }

    billName.value= "";
    billDate.value= "";
    console.log(billList)
})
})
 function removeListItem(list, index){
    console.log("this func")
 }
