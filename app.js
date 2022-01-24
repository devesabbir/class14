//Age Calculator
const ageForm = document.querySelector('#birth_form')
const age_output = document.querySelector('.age_output')

//Age Form Submision
ageForm.addEventListener('submit', function(e){
     e.preventDefault()
     let btd = this.querySelector('input[type="date"]').value
     let name = this.querySelector('input[type="text"]').value
     let gender = this.querySelector('input[name="gender"]:checked')
     
          let date = new Date().getTime()
          let btt = new Date(btd).getTime()
          let tdiffer = Math.abs(date - btt) 
          let sec = Math.floor(tdiffer / 1000) 
          let min = Math.floor(sec  / 60) 
          let hour = Math.floor(min / 60) 
          let day = Math.floor(hour / 24) 
          let month = Math.floor(day / 30)
          let year = Math.floor(month / 12)

          let fmonth = month - (year * 12)
          let fday = Math.floor(day - (year * 12 * 30) - (fmonth * 30))
               
          if(btd == '' || name == ''){
             alert('All Field Required !')
             
          } else {
            age_output.innerHTML = `
            <h4 class="text-center">Your Age</h4>
            <hr>  
            <p><span>Name:</span> <span>${name}</span></p>
            <p><span>Gender:</span> <span>${gender.value}</span></p>
            <p><span>Age:</span> ${year} ${year > 1 ? 'Years' : 'Year'}  ${fmonth} ${fmonth > 1 ? 'Months' : 'Month'} ${fday} ${fday > 1 ? 'Days' : 'Day'}  </p>
    
    
        `
          }

        
})


//Product
const pro_form = document.querySelector('#product_form')
const pro_container = document.querySelector('#pro-container')

pro_form.addEventListener('submit', function(e){
    e.preventDefault()
    let name = this.querySelector('input[name="name"]').value
    let link = this.querySelector('input[name="link"]').value
    let price = this.querySelector('input[name="price"]').value
    let sale_price = this.querySelector('input[name="sale-price"]').value
    let select = this.querySelector('select[name="select"]').value
   
    let product_array = [];

    if(JSON.parse(localStorage.getItem('Product'))){
      product_array = JSON.parse(localStorage.getItem('Product')) ;
    }else{
      product_array = [];
    }
    
    product_array.push({
          name  : name,
          link  : link,
          price : price,
          sale_price : sale_price,
          select : select, 
    })

   localStorage.setItem('Product',JSON.stringify(product_array))
   set_pro()    

})

set_pro()
function set_pro(){
    let all_pro = JSON.parse(localStorage.getItem('Product'))
    
    let innerpro = ''
    all_pro.map( data => {
        
      innerpro += `
      <div class="col-lg-4 my-2">
           <div class="card p-3">
              <img class="card-img" src= "${data.link}" alt="">

               <div class="card-body">
                 <h5>${data.name}</h5>
               <p><span>Price:</span><span>${data.price}</span></p>
               <p><span>Sale Price:</span><span>${data.sale_price}</span></p>
               <p><span>Stock:</span><span>${data.select}</span></p>
             </div>

           <div class="card-bottom text-center">
               <a href="#">Buy Now</a>
         </div>
    </div>
</div>
    
`

     pro_container.innerHTML = innerpro 

    })

    
}













