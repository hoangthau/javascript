var obj = {
  name: 'John Snow'
}

var someMethod = function(){
  console.log(this.name);
}.bind(obj);

someMethod();
