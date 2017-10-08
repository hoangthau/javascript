var name = 'John Snow';

function run(){
  console.log('I have context like this: ', this);
  console.log(this.name);
}

console.log(run());

