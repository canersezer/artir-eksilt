const btnA = document.querySelector('.artir');
const btnE = document.querySelector('.eksilt');
const nub = document.querySelector('.cal')
const res = document.querySelector('.res ')

let toplamSayi = 0;

btnA.addEventListener('click',() => {
    toplamSayi++
    nub.innerText = toplamSayi;

})

btnE.addEventListener('click' ,() => {
    if(toplamSayi > 0 ){
        toplamSayi --
        nub.innerText = toplamSayi;
    }else{alert('0 Dan asagi Sayamaz')}

})
res.addEventListener('click', ()=>{
    if(toplamSayi > 0){
        nub.innerText = 0;
        alert('sifirlandi')
    }
    
})
 