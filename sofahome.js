let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let headingBx = document.querySelectorAll('.heading_bx');

let k = 0;

rightBtn.addEventListener('click',()=> {

    k++;
    if(k > headingBx.length - 1) {

        k = 0;
        headingBx[0].classList.remove('hide');
        headingBx[headingBx.length - 1].classList.add('hide');
    }

    headingBx[k].classList.remove('hide');
    headingBx[k - 1].classList.add('hide');
});

leftBtn.addEventListener('click', ()=> {

    k--;
    if(k < 0) {
        k = headingBx.length - 1;
        headingBx[0].classList.add('hide');
    }

    headingBx[k].classList.remove('hide');
    headingBx[k + 1].classList.add('hide');
});

// NUMBER2........


let forwrdBtn = document.querySelector('.forwrd-btn');
let NextBtn = document.querySelector('.next-btn');
let clientBx = document.querySelectorAll('.client_bx');

let h = 0

NextBtn.addEventListener('click',()=> {

    h++;
    if(h > clientBx.length - 1) {

       h = 0;
       clientBx[0].classList.remove('dis');
       clientBx[clientBx.length - 1].classList.add('dis'); 
    }

    clientBx[h].classList.remove('dis');
    clientBx[h - 1].classList.add('dis');
});

forwrdBtn.addEventListener('click', ()=> {

    h--;
    if(h < 0) {
        h = clientBx.length - 1;
        clientBx[0].classList.add('dis');
    }

    clientBx[h].classList.remove('dis');
    clientBx[h + 1].classList.add('dis');
});