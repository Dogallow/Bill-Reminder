let submitButton = document.getElementById('submit-button')
let billName = document.getElementById('bill-name')
let billDate = document.getElementById('bill-date')
let listedBills = document.getElementById('bill-list')


let billList= []

submitButton.addEventListener('click',(e)=>{
e.preventDefault()
billList.push({billName: billName.value, billDate: billDate.value})
console.log(billList)
billList.forEach((bill)=>{
    let li = document.createElement('li')
    console.lo
    li.innerHTML="<li>"+bill.billName+", "+ bill.billDate+"</li>"
    listedBills.appendChild(li)
    billName.value= ""
    billDate.value= ""
})

})
