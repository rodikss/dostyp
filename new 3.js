</script>
Задача Эйлера номер 3

<script> 
let k = 600851475143 
let a = 1 
let f = 0 
let delit=0 
while (a < Math.sqrt(k)){ 
if (k%a===0){ 
for (let i=3; i<=Math.sqrt(a); i++){ 
if (a%i===0) 
f=f+1 
} 
if (f<=0) 
delit=a 
} 
a++ 
} 
console.log(delit) 

</script>