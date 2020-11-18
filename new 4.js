
<script> 
let a = 999; 
let b = 999; 
let x = 0; 
let i; 
for(a; a > 899; a--) 
{ 
b = 999; 
for(b; b > 899; b--) 
{ 
x = a*b; 
ch1 = x % 10; 
r1 = Math.floor(x/10); 
ch2 = r1 % 10; 
r2 = Math.floor(r1/10); 
ch3 = r2 % 10; 
r3 = Math.floor(r2/10); 
ch4 = r3 % 10; 
r4 = Math.floor(r3/10); 
ch5 = r4 % 10; 
r5 = Math.floor(r4/10); 
ch6 = r5 % 10; 
if (ch6 == ch1 && ch5 == ch2 && ch4 == ch3) 
{ 
i = x; 
break; 
} 
} 
if (i) break; 
} 
alert(i); 
</script>