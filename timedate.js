const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];
          function update() {
          const cal = document.querySelector('.cal');
          const tim = document.querySelector('.date');
          const date = new Date();
          const hr = document.querySelector('.hours');
          hr.innerHTML = date.getHours().toString().padStart(2,0);
          const min = document.querySelector('.minute');
          min.innerHTML = date.getMinutes().toString().padStart(2,0);
          const sec = document.querySelector('.second')
          sec.innerHTML = date.getSeconds().toString().padStart(2,0);
          const dte = document.querySelector('.date');
          dte.innerHTML = date.getDate().toString().padStart(2,0);
          const mon = document.querySelector('.month');
          let a = date.getMonth();
          mon.innerHTML = months[a];
          const yr = document.querySelector('.year');
          yr.innerHTML = date.getFullYear();
          }
  
          setInterval(update, 1000);
  