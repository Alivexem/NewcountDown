/* From the Developer of AlivexemTech. This is a personal Project so no documentation is provided, you can fork and clone this though... you are permitted.
*
* Have fun in trying to Optimize this code (if you will), you are always welcome!
*
*/


let start = document.getElementById("start")
let day = document.getElementById("day")
let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let reset = document.getElementById("reset")
let audio = new Audio("effect.mp3")
let anime = document.querySelectorAll(".fire")

let spanDay = document.getElementById("days")
let spanMon = document.getElementById("mon")
let spanYear = document.getElementById("years")

let show = document.getElementById("show")
show.style.display = "none"
let design = document.getElementById("design")

start.addEventListener("click", () => {
    try {
        let input = document.getElementById("input").value
        let option = document.querySelector(".opt").value.toLowerCase()
        let optyear = document.querySelector(".optyear").value.toLowerCase()
        const monthsArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
        
        let newMonth = monthsArray.indexOf(option) + 1
        
        let currentYear = new Date().getFullYear()
        let month = new Date().getMonth() + 1
        let days = new Date().getDate()
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()
        let seconds = new Date().getSeconds()
        
        let yearValidation = parseInt(eval(optyear - currentYear))
        
        
        let monthValidation = parseInt(eval(newMonth - month))
        let dayValidation = parseInt(eval(input - days))
        
        if(input > 30 && option == "september"){
            alert("September has only 30 days!")
            return 
        }
        if(input > 30 && option == "april"){
            alert("April has only 30 days!")
            return 
        }
        if(input > 30 && option == "june"){
            alert("June has only 30 days!")
            return 
        }
        if(input > 30 && option == "november"){
            alert("November has only 30 days!")
            return 
        }
        if(input > 29 && option == "february"){
            alert("February has 29 days at most!")
            return 
        }
        
        
        
        if(yearValidation <= 0 && monthValidation <= 0){
           if(dayValidation <= 0){
               alert("Please input a FUTURE date that can be counted down!")
               return
           }
       }
        if(yearValidation < 0){
            alert("Year picked has passed already")
            return 
        }
        if(yearValidation > 1){
            alert("Choose a year 1 year ahead at most!")
            return
        }
        if(yearValidation == 0 && monthValidation < 0){
            alert("month picked has passed already!")
            return
        }
              
        
        if(input.trim() == ""){
            alert("please input a day!")
            return
        }
        if (isNaN(input)) {
            alert("Countdown must be a number not alphabets or symbols!")
            return;
        }

       if(input < 1 || input > 31){
           alert("Please input a valid day of the month!")
           return;
       }
       
       spanDay.innerText = input
       spanMon.innerText = option
       spanYear.innerText = optyear
       show.style.display = "block"
       colorChange()
       
       if(yearValidation > 0){
         if(monthValidation == 0 && dayValidation < 0){
           monthValidation = Math.abs(monthValidation)
         
           let real = month - monthValidation
         
           let logic = eval((real * 31) + dayValidation)
    
               day.value = logic - 1
               let hrs = eval(24 - hours - 1)
               if(hrs == -1){
                   hour.value = 0
               }else{
                   hour.value = hrs
               }
               minute.value = 60 - minutes - 1
               second.value = 60 - seconds - 1
           }
       }
       
        if(yearValidation > 0){
         if(monthValidation < 0 && dayValidation > 0){
           monthValidation = Math.abs(monthValidation)
         
           let real = month - monthValidation
         
           let logic = eval((real * 31) + dayValidation)
    
               day.value = logic - 1
               let hrs = eval(24 - hours - 1)
               if(hrs == -1){
                   hour.value = 0
               }else{
                   hour.value = hrs
               }
               minute.value = 60 - minutes - 1
               second.value = 60 - seconds - 1
           }
       }
 
       
       if(yearValidation > 0){
         if(monthValidation < 0 && dayValidation < 0){
           monthValidation = Math.abs(monthValidation)
         
           let real = month - monthValidation
         
           let logic = eval((real * 31) + dayValidation)
    
               day.value = logic - 1
               let hrs = eval(24 - hours - 1)
               if(hrs == -1){
                   hour.value = 0
               }else{
                   hour.value = hrs
               }
               minute.value = 60 - minutes - 1
               second.value = 60 - seconds - 1
           }
       }
       
       if(yearValidation > 0){
         if(monthValidation == 0 && dayValidation > 0){
           monthValidation = Math.abs(monthValidation)
         
           let real = month - monthValidation
         
           let logic = eval((real * 31) + dayValidation)
    
               day.value = logic - 1
               let hrs = eval(24 - hours - 1)
               if(hrs == -1){
                   hour.value = 0
               }else{
                   hour.value = hrs
               }
               minute.value = 60 - minutes - 1
               second.value = 60 - seconds - 1 
           }
       }
 
  
  
         if(yearValidation == 0){
           if(dayValidation > 0 && monthValidation == 0){          
             let logic = dayValidation
             day.value = logic - 1
             let hrs = eval(24 - hours - 1)
             if(hrs == -1){
                  hour.value = 0
              }else{
                 hour.value = hrs
             }
             minute.value = 60 - minutes - 1
             second.value = 60 - seconds - 1
         }
           
       }
      
       
        countdown()
    } catch (error) {
        alert("Refresh and try again")
        console.error("An error occurred:", error);
    }
})

let interval;
let clicked = true
let colorInterval;

reset.addEventListener("click",() => {
    window.location.reload()
})

const countdown = () => {
    interval = setInterval(() => {
        if(minute.value == 0 && second.value == 0){
            second.value = 1
            clearInterval(interval)         
            anime.forEach((item) => {
                item.classList.add("firework")
            })
      
            setTimeout(() => {
                clearInterval(colorInterval)
                design.style.color = "cyan"
                anime.forEach((item) => {
                    item.classList.remove("firework")
                })
            },300000)
            
            audio.play()
            show.style.display = "none"
        }
        if(minute.value > 0){
            if(second.value == 0){
                minute.value -= 1
                second.value = 60
            }
        }
        if(hour.value > 0){
            if(minute.value == 0){
                hour.value -= 1
                minute.value = 60
            }
        }
        if(day.value > 0){
            if(hour.value == 0){
                day.value = -1
                hour.value = 24
            }
        }        
        second.value -= 1        
    },1000)
}

const colorChange = () => {
    let colors = ["cyan","purple","orange", "lime","red","yellow","blue"];
    let count = 0;
    
    colorInterval = setInterval(() => {
        let index = count % colors.length;
        design.style.color = colors[index];
        count = (count + 1) % colors.length;
    }, 100);
};

            
