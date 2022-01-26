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
            <a href="${data.link}"> <img class="card-img" src= "${data.link}" alt=""></a>

               <div class="card-body">
                 <h5>${data.name}</h5>
               <p class="mb-0"><span>Price:</span> <span class="${((data.price > data.sale_price)) ? 'overline' : ''}">${data.price}</span></p>
               <p class="mb-0"><span>Sale Price:</span><span>${data.sale_price}</span></p>
               <p class="mb-0"><span>Stock:</span> <span>${data.select}</span></p>
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


//Developer Data 

const dev_form = document.querySelector('#dev-form')
const devsout = document.querySelector('#devsout')

dev_form.addEventListener('submit', function(event){
    event.preventDefault();
    let name = this.querySelector('input[name="name"]').value
    let img = this.querySelector('input[name="img"]').value
    let skill = this.querySelectorAll('input[type="checkbox"]:checked')
   
    let skil_arr = []
    for (let i = 0; i < skill.length; i++) {
      skil_arr.push(skill[i].value)   
    }

    let dev_arr = []
     
    if(JSON.parse(localStorage.getItem('deve'))){
       dev_arr = JSON.parse(localStorage.getItem('deve'))
    }else{
       dev_arr = []
    }

    dev_arr.push({
         Name  : name,
         Img : img,
         Skill : skil_arr,
    })

    localStorage.setItem('deve', JSON.stringify(dev_arr))
    
    deve_show()

})

deve_show()
function deve_show(){
    let get_dev = JSON.parse(localStorage.getItem('deve'))
    let print = ''
    get_dev.map ( data => {
            let listSkil = ''
         data.Skill.map( d => {
            listSkil += `
                      <span>${d}</span>
             `
         })

         print += `
            
               <div class="col-lg-4 my-2">
               <div class="card p-3">
                  <img class="card-img" src= "${data.Img}" alt="">
    
                   <div class="card-body">
                     <h5>${data.Name}</h5>
                     <p>${listSkil}</p>
                 </div>
      
        </div>
    </div>
         
         `
    })


    devsout.innerHTML = print

    
}


