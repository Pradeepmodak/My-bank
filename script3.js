let balances=document.getElementById("balance");
let withdraws=document.getElementById("withdraw");
let deposits=document.getElementById("deposit");
let transactions=document.getElementById("Transacation");
let depositbtn=document.getElementById("deposit-btn");
let withdrawbtn=document.getElementById("withdraw-btn");
let inputmoney=document.getElementById("input-money");
let inputexp=document.getElementById("input-exp");
let inputlist=document.getElementById("input-list");
let addedmoney=document.getElementsByClassName("added-money");
let withdrawmoney=document.getElementsByClassName("withdrawn-money");
let addedexpense=document.getElementsByClassName("added-expense");




depositbtn.addEventListener('click',()=>{
    let value=inputmoney.value;
    let fbal=Number(balances.innerText)+Number(value);
    let fdeposit=Number(deposits.innerText)+Number(value);
    deposits.innerText=fdeposit+0.00;
    balances.innerText=fbal+0.00;
    addexp();
    savedata();
});

withdrawbtn.addEventListener('click',()=>{
    let value2=inputmoney.value;
    if(Number(value2)>Number(balances.innerText)){
        alert("You don't have enough balance to withdraw !");
    }
    else{
    let fbal2=Number(balances.innerText)-Number(value2);
    let fwithdraw=Number(withdraws.innerText)+Number(value2);
    withdraws.innerText=fwithdraw+0.00;
    balances.innerText=fbal2+0.00;
    withdrawexp();
    savedata();
    }
});


function addexp(){
    if(inputexp.value===''){
        alert("Please add your expense !");
    }
    else{  
        let list=document.createElement('li');
           list.className='added';
           let expspan=document.createElement('span');
           expspan.className='added-expense';
           expspan.textContent=inputexp.value;
           let expmoney=document.createElement('span');
           expmoney.className='added-money';
           expmoney.textContent="+" +inputmoney.value;
           list.appendChild(expspan);
           list.appendChild(expmoney);
        inputlist.appendChild(list);
        inputexp.value=null;
        inputmoney.value=null;
        // console.log(list); 
    }
    savedata();
}


function withdrawexp(){
    if(inputexp.value===''){
        alert("Please add your expense !");
    }
    else{
            let list=document.createElement('li');
           list.className='withdrawn';
           let expspan=document.createElement('span');
           expspan.className='withdrawn-expense';
           expspan.textContent=inputexp.value;
           let expmoney=document.createElement('span');
           expmoney.className='withdrawn-money';
           expmoney.textContent="-"+inputmoney.value;
           list.appendChild(expspan);
           list.appendChild(expmoney);
        inputlist.appendChild(list);
        inputexp.value=null;
        inputmoney.value=null;
        // console.log(list);
    }
    savedata();
}

// let box=document.getElementsByTagName('li');
// console.log(box);
// let css_before=window.getComputedStyle(box,'::before');

inputlist.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        let dimrect=e.target.getBoundingClientRect();
        let width=30;
        console.log(dimrect);
        console.log(width);
        if(e.clientX>=dimrect.left && e.clientX<=dimrect.left+width){
            e.target.remove();
            savedata();
        }
    }
    
});

function savedata(){
    localStorage.setItem("tasks",inputlist.innerHTML);
    localStorage.setItem("tdeposits",deposits.innerHTML);
    localStorage.setItem("twithdraws",withdraws.innerHTML);
    localStorage.setItem("tbalances",deposits.innerHTML);
}
function displayData(){
    inputlist.innerHTML=localStorage.getItem('tasks');
    deposits.innerHTML=localStorage.getItem('tdeposits');
    withdraws.innerHTML=localStorage.getItem('twithdraws');
    balances.innerHTML=localStorage.getItem('tbalances');
    // console.log(deposits);
}
// localStorage.clear();
displayData();