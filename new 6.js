<script> 
let a = 0; 
let b = 0; 
let c = 0; 
for (let i = 1; i <= 100; i++) 
{ 
a += i; // сумма чисел от 1 до 100 
} 
c = Math.pow(a, 2); // квадрат суммы 
for (let i = 1; i <= 100; i++) 
{ 
b += Math.pow(i, 2); // сумма квадратов 
} 
alert(c - b); 
</script>