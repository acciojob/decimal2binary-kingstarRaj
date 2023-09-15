function decimalToBinary(num) {
	let str = "";
	while(num>0){
	  str += num%2 ; 
	  num = num/2 ;
  }
	str.split("").reverse().join("");
  
}

window.decimalToBinary = decimalToBinary;
