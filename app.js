const cDate = document.querySelector('#cdate')
const cTime = document.querySelector('#ctime')
const oBtn = document.querySelector('#obtn')
const counterOutput = document.querySelector('.counterOutput')
const pbtn = document.querySelector('#pbtn')

let coun;
oBtn.addEventListener('click',counter)


pbtn.addEventListener('click', function(){
      clearInterval(coun)
      counterOutput.innerHTML = ''   
})

//AgeCal

const calBtn = document.querySelector('#calbtn')
const result = document.querySelector('.result')



calBtn.addEventListener('click', ageCalcul)

function ageCalcul(){
      const ageName = document.querySelector('#agename').value
      const ageDate = document.querySelector('#agedate').value
      const gender = document.querySelector('input[name="gender"]:checked').value


      const crntDate = new Date().getTime()
      const birDate = new Date(ageDate).getTime()

      let sec = Math.floor(Math.abs((crntDate - birDate) / 1000)) 
      let min = Math.floor(sec / 60) 
      let hour = Math.floor(min / 60) 
      let day = Math.floor(hour / 24) 
      let month = Math.floor(day / monthFu()) 
      let year = Math.floor(month / 12)
      
      let fiMont = month - (year * 12 )
      let fiDay = day - (year * 12 * monthFu()) - (fiMont * monthFu())


      result.innerHTML = `
                          <p> Hi ${gender == 'male' ? 'Mr' : 'Mrs'} ${ageName} Your age is ${year} ${year <= 1 ? 'Year' : 'Years'} ${fiMont} ${fiMont <= 1 ? 'Month' : 'Months'} ${fiDay} ${fiDay <= 1 ? 'day' : 'days'} ${genderinfo(year,gender)} </p>
      
      `

     
}






