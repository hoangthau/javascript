/*1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22*/
function run(){
  var today = new Date();
  var dayInWeek = ['Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var tempHour = 12;
  if(hours > tempHour){
    hours = hours - tempHour + 'PM';
  } else {
    hours = hours + 'AM';
  }

  var currentTime = hours + ':' + minutes + ':' + seconds;
  console.log('Today is: ', dayInWeek[today.getDay()-1]);
  console.log('Current time is: ', currentTime);
}
