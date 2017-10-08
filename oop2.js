function Animal(name, sound){
  var self = this;
  self.name = name;
  self.sound = sound;
}

Animal.prototype.getName = function(){
  var self = this;
  return self.name;
}

Animal.prototype.makeNoise = function(){
  var self = this;
  console.log('Make noise like this: ', self.sound);
}

var animal = new Animal('Ha', 'mow mow');
console.log(animal.getName());
console.log(animal.makeNoise());
