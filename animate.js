const elements = document.querySelectorAll('.my-element');

const newArray = [...elements];


newArray.sort(function(a, b) {
    return a.id - b.id;
  })



let i = 0;
setInterval(function () {

    if(i === 10){
        clearInterval(interval);
        }

    newArray[i].classList.remove('opacity-0', 'opacity-1');
    newArray[i].classList.add('animate__animated', 'animate__bounceIn');

    i += 1;

}, 1200)
