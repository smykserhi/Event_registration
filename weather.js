(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {           
          if (form.checkValidity() === false) {             
                event.preventDefault();
                event.stopPropagation();                  
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
//  
document.getElementById("dateFirst").addEventListener("click", (e)=>{
  let dateFromForm = document.getElementById('dateFirst');
            let todatDate = new Date();
            let month = '0';
            if((todatDate.getMonth()+1) < 10){
             month += (todatDate.getMonth()+1).toString()
            }else month = (todatDate.getMonth()+1).toString()               
            let formatedDate = todatDate.getFullYear()+'-'+month+'-'+todatDate.getDate();
            dateFromForm.min = formatedDate 
            console.log("min date set up")
})