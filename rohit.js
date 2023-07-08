let celciusInpute = document. querySelector ('#celcius > input')
let fahrenheitInpute = document. querySelector ('#fahrenheit > input')
let kelvinInpute = document. querySelector ('#kelvin > input')





let btn = document.querySelector('.button button')
   

function roundNumber(number){
    return Math. round(number*100/100)
    
}
 celciusInpute.addEventListener('input',function(){
       let cTemp = parseFloat(celciusInpute.value)
       let fTemp = (cTemp*(9/5)) +32
       let kTemp =cTemp + 273.15

     fahrenheitInpute.value =roundNumber (fTemp)
     kelvinInpute .value =roundNumber (kTemp)

 })
 fahrenheitInpute.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInpute.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp =  (fTemp-32 ) * (5/9) +273.15

  celciusInpute.value =roundNumber (cTemp)
  kelvinInpute .value =roundNumber (kTemp)

}) 
kelvinInpute.addEventListener('input',function(){
    let kTemp = parseFloat(kelvinInpute.value)
    let cTemp = (kTemp - 273.15)
    let fTemp = (kTemp - 273.15)* (9/5) + 32
    celciusInpute .value =roundNumber (kTemp)
  fahrenheitInpute.value =roundNumber (fTemp)
  

})
    btn.addEventListener('click',()=>{
        celciusInpute.value= ""
        fahrenheitInpute.value=""
        kelvinInpute.value=""
    })

