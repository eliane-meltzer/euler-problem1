
var sub = document.getElementById("sub");
var answer = document.getElementById("answer");

sub.onclick = function() {

var sum = 0;
var num = document.getElementById("num").value;

for(i= 0; i<num; i++ ) {
  if(i%5 === 0  || i%3 === 0) {
  sum += i;
  }
}
answer.value = sum;
};


