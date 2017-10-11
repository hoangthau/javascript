var element = document.querySelector('.elem');

var someMethod = function(){
  console.log(this);
}

element.addEventListener('click', someMethod, false);// this is element

someMethod();/// this is Window Object
