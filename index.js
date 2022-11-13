const homeScore= document.querySelector(".home")
const guestScore= document.querySelector(".guest")
const add1home= document.querySelector(".add1home")
const add2home= document.querySelector(".add2home")
const add3home= document.querySelector(".add3home")
const add1guest= document.querySelector(".add1guest")
const add2guest= document.querySelector(".add2guest")
const add3guest= document.querySelector(".add3guest")

let Scorehome= 0
let Scoreguest= 0
add1home.addEventListener("click",()=>{
    Scorehome++
    homeScore.textContent=Scorehome
})
add2home.addEventListener("click",()=>{
    Scorehome+= 2 
    homeScore.textContent=Scorehome
})
add3home.addEventListener("click",()=>{
    Scorehome+= 3
    homeScore.textContent=Scorehome
})

add1guest.addEventListener("click",()=>{
    Scoreguest++
    guestScore.textContent=Scoreguest
})
add3guest.addEventListener("click",()=>{
    Scoreguest+= 2 
    guestScore.textContent=Scoreguest
})
add2guest.addEventListener("click",()=>{
    Scoreguest+= 3
    guestScore.textContent=Scoreguest
})

