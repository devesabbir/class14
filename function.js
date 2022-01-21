function counter(){
    
    const cDate = document.querySelector('#cdate').value
    const cTime = document.querySelector('#ctime').value

    if(cDate == '' || cTime == '' ){
        
    }

    coun = setInterval(function(){

        let date = new Date().getTime() 
        let endDate = new Date(`${cDate } ${cTime}`).getTime()
        let timeDis =Math.floor(Math.abs(endDate - date)) 
    
        let toSec = Math.floor((timeDis / 1000 )) 
        let toMin = Math.floor((toSec / 60 )) 
        let toHour = Math.floor((toMin / 60 )) 
        let toDay = Math.floor((toHour / 24 )) 
    
        let fiHour = toHour - (toDay * 24 ) 
        let fiMin  = toMin - (toDay  * 24 * 60) - (fiHour * 60 )
        let fiSec  = toSec - (toDay  * 24 * 60 * 60) - (fiHour * 60 * 60) - (fiMin * 60)
    
        console.log(toDay + ':' + fiHour + ':' + fiMin + ':' +  fiSec);

        counterOutput.innerHTML = `
                         <span>${toDay}</span> : <span>${fiHour}</span> :  <span>${fiMin}</span> : <span>${fiSec}</span>
                    `
    

    },1000)

}


function monthFu(){
    let month = new Date().getMonth()
     if(month == 0){
        return 31
     }else if(month == 1){
        return 28
     }else if(month == 2){
        return 31
     }else if(month == 3){
        return 30
     }else if(month == 4){
        return 31
     }else if(month == 5){
        return 30
     }else if(month == 6){
        return 31
     }else if(month == 7){
        return 31
     }else if(month == 8){
        return 30
     }else if(month == 9){
        return 31
     }else if(month == 10){
        return 30
     }else if(month == 11){
        return 31
     }
}



function genderinfo(age,gender){
     if(age >= 0 && age <= 12){
              
        if(gender == 'male'){
            return `
                  tumi ekhkn babu
            `
        }else if(gender == 'female'){
            return `
                   tumi ekhkn babu
            `
        }
           
     }else if(age >= 13 && age <= 17){
        if(gender == 'male'){
            return `
                  tumi ekhkn Kumar
            `
        }else if(gender == 'female'){
            return `
                   tumi ekhkn Kumari
            `
        } 
              
     }else if(age >= 18 && age <= 21){
        if(gender == 'male'){
            return `
                  tumi ekhkn Kumar
            `
        }else if(gender == 'female'){
            return `
                   tumi ekhkn Juboti
            `
        } 
              
     }else if(age >= 22 && age <= 30){
        if(gender == 'male'){
            return `
                  tumi ekhkn Jubok
            `
        }else if(gender == 'female'){
            return `
                   tumi ekhkn Juboti
            `
        } 
              
     }else if(age > 30){
        if(gender == 'male'){
            return `
                  tumi ekhkn Uncle
            `
        }else if(gender == 'female'){
            return `
                   tumi ekhkn Aunty
            `
        } 
              
     }

}

