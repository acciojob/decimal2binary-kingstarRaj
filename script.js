function decimalToBinary(num) {
	// array to store binary number
        int[] binaryNum = new int[32];
 
        // counter for binary array
        int i = 0;
        while (num > 0) {
            // storing remainder in binary array
            binaryNum[i] = num % 2;
            num = num / 2;
            i++;
        }
 
        // printing binary array in reverse order
        for (int j = i - 1; j >= 0; j--)
            System.out.print(binaryNum[j]);
  
}

window.decimalToBinary = decimalToBinary;
