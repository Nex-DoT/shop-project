const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus')
const span = document.querySelector('.num');
const btn = document.querySelector('.btnPlus');
 const cart = document.querySelector('.card');
 const text = document.querySelector('.pricem');
 const cartOp = document.querySelector('.cartssd');
 const cartclo = document.querySelector('.mmb');
 const attre = document.querySelector('.cartssd span'); 
 const delet = document.querySelector('.delete');
 const stoped = document.querySelector('.imgstop');
 const alerte = document.querySelector('.alert');
 let time;
 let bn =0;

function plusminus(){
    let val =+span.getAttribute('data-value');
    plus.addEventListener('click' , function(){
        val++
        span.innerText = val;
        attre.setAttribute('data-num' , val);
        text.innerText =` price : 125  * ${val} = ${val * 125} `;

    });
    minus.addEventListener('click' , function(){
        val--
        span.innerText = val;
        attre.setAttribute('data-num' , val);
        text.innerText =` price : 125  * ${val} = ${val * 125} `;


        if(val < 0){
            val = 0;
          span.innerText = 0;
        };
        if(val==0){
            cartOp.classList.remove('active');
            cart.classList.remove('active');
            bn=0;
        };
    })
    delet.addEventListener('click' ,function(){
        cart.classList.remove('active');
        bn=0;
        val = 0;
        span.innerText = val;
        attre.setAttribute('data-num' , val);
        if(val==0){
            cartOp.classList.remove('active');
        };
    })
    btn.addEventListener('click' , function(){
        bn++;
        cart.classList.add('active');
        text.innerText =` price : 125  * ${val} = ${val * 125} `;
        cartOp.classList.add('active');
        if(val==0){
            cartOp.classList.remove('active');
            cart.classList.remove('active');
            bn=0;
        };
        if(bn>1)
        {  showlevel()  }

    });
    function showlevel(){
        alerte.classList.remove('hiden')
        alerte.classList.add('active');
        time = setTimeout( function(){hiden()}  , 4000);

    }
    function hiden(){
        alerte.classList.remove('active')
        alerte.classList.add('hiden');
    }
    stoped.addEventListener('click' , function(){
        hiden();
        clearTimeout(time);
    })
    cartOp.addEventListener('click' , function(){
        cartclo.classList.toggle('active');
    });

}
plusminus();






const png = document.querySelector('.png');
const closeSlide = document.querySelector('.close');
const sliderNew = document.querySelector('.slider-new');
png.addEventListener('click' , function(){
    sliderNew.classList.add('active');
})
closeSlide.addEventListener('click' , function(){
    sliderNew.classList.remove('active');
})
const lol =document.querySelector('.lol').children;
function slider(event){
    png.setAttribute('src' , event);
}

for(i=0; i<lol.length;i++){
    lol[i].addEventListener('click' , function(){
        for(j=0; j<lol.length;j++){
            lol[j].classList.remove('active');
        }
        this.classList.add('active')
    })
}


const imglist = document.querySelectorAll('.img img');
const listdemo =document.querySelectorAll('.mmd img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let hell = 0;

next.addEventListener('click' , function(){
    imglist[hell].classList.remove('active');
    listdemo[hell].classList.remove('active');
    hell = (hell + 1) %imglist.length;
    imglist[hell].classList.add('active');
    listdemo[hell].classList.add('active');
})
prev.addEventListener('click'  , function(){
    imglist[hell].classList.remove('active');
    listdemo[hell].classList.remove('active');
    hell = (hell - 1 +imglist.length) %imglist.length;
    imglist[hell].classList.add('active');
    listdemo[hell].classList.add('active');
})
function ssd(event){
    imglist[hell].classList.remove('active');
    listdemo[hell].classList.remove('active');
    hell = +event;
    imglist[hell].classList.add('active');
    listdemo[hell].classList.add('active');
}