function Animal(name){
  var self = this;
  self.name = name;
}

Animal.prototype.getName = function(){
  var self = this;
  return self.name;
}

var animal = new Animal('Ha');
console.log(animal.getName());
