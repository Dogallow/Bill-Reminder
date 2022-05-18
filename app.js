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

        li.innerHTML="<li>"+bill.billName+", "+ bill.billDate+"</li>";
        listedBills.appendChild(li);

    }

    billName.value= "";
    billDate.value= "";
})
})
