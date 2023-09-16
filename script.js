function decimalToBinary(num) {
	let str = "";
	while(num>0){
	  str += num%2 ; 
	  num = num/2 ;
  }
	for(let i  = str.length - 1; i >= 0 ; i--){
		console.log(str.charAt(i));
	}
  
}

window.decimalToBinary = decimalToBinary;
