var name = 'John Snow';

function run(){
  console.log('I have context like this: ', this);
  console.log(this.name);
}

var obj = {
  name: 'Tayen'
}

console.log(run.call(obj));
