let a=parseInt(prompt("Nhập giá trị a: "));
let b=parseInt(prompt("Nhập giá trị b: "));
let result = (a+b < 4)?'Below':'over';
document.getElementById("ketqqua").innerHTML= result;