'use strict';

{
    const but1 = document.getElementById('button1');
    const but2 = document.getElementById('button2');
    
    

    but1.addEventListener('click', function(evt) {
        const p1 = document.getElementById('points1');
        const sp=document.getElementById("sp");
        p1.innerHTML = Number(p1.innerHTML)+1;
      /*  var number = p1.innerHTML;
        number++;
        p1.innerHTML = number;*/
        if (p1.innerHTML == 5){
            sp.innerHTML = 'Winner is #1!';
        }
    
    })

    but2.addEventListener('click', function(evt) {
        const p2 = document.getElementById('points2');
        const sp=document.getElementById("sp");
        p2.innerHTML = Number(p2.innerHTML)+1;
      /*  var number = p2.innerHTML;
        number++;
        p2.innerHTML = number;*/
        if (p2.innerHTML == 5){
            sp.innerHTML = 'Winner is #2!';
        }
    
    })




}