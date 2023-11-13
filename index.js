
// const calculateBtn = document.querySelector('.calculate');
const bill_amount = document.querySelector('.bill');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');

let billAmount = document.querySelector('.input_bill');
let bill;

// calculateBtn.addEventListener('click',function(){

// });

const btn10 = document.querySelector('.btn10');
btn10.addEventListener('click',function(){
  bill = billAmount.value;
  const billWith10 = +bill + (bill * 0.1);
  bill_amount.textContent = `Bill amount :$${+bill}`;
  tip.textContent = `Tip : $${+(bill * 0.1).toFixed(2)}`;
  total.textContent = `$${billWith10}`;
  billAmount.value = '';
  
})
const btn20 = document.querySelector('.btn20');
btn20.addEventListener('click',function(){
  bill = billAmount.value;
  const billWith20 = +bill + (bill * 0.2);
  bill_amount.textContent = `Bill amount :$${+bill}`;
  tip.textContent = `Tip : $${+(bill * 0.2).toFixed(2)}`;
  total.textContent = `$${billWith20}`;
  billAmount.value = '';
})
const btn30 = document.querySelector('.btn30');
btn30.addEventListener('click',function(){
  bill = billAmount.value;
  const billWith30 = +bill + (bill * 0.3);
  bill_amount.textContent = `Bill amount :$${+bill}`;
  tip.textContent = `Tip : $${+(bill * 0.3).toFixed(2)}`;
  total.textContent = `$${billWith30}`;
  billAmount.value = '';
})
const btn40 = document.querySelector('.btn40');
btn40.addEventListener('click',function(){
  bill = billAmount.value;
  const billWith40 = +bill + (bill * 0.4);
  bill_amount.textContent = `Bill amount :$${+bill}`;
  tip.textContent = `Tip : $${+(bill * 0.4).toFixed(2)}`;
  total.textContent = `$${billWith40}`;
  billAmount.value = '';
})

function inputClick(){
  if(billAmount){
    billAmount.addEventListener('click',function(){
      bill_amount.textContent = '';
      tip.textContent = '';
      total.textContent = '';
    })
  }
}
inputClick();