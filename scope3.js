function func1(){
  var name = 'Dan';
  return function(){
    console.log(name);
  }
}

console.log(func1()());
