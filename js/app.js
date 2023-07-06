const timemachine = document.querySelectorAll("#timemachine path");

for(let i = 0; i<timemachine.length; i++){
console.log(`Letter ${i} is ${timemachine[i].getTotalLength()}`);
}