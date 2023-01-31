function arabicToRoman(num) {
    if (isNaN(num) || num < 1 || num > 3999) {
      return "Invalid input. Please enter a number between 1 and 3999.";
    }
    
    let roman = "";
    let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let arabicNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    for ( i = 0; i < arabicNumeral.length; i++) {
      while (num >= arabicNumeral[i]) {
        roman += romanNumeral[i];
        num -= arabicNumeral[i];
      }
    }
    return roman;
  }
  
  const arab = 420;
  console.log(arabicToRoman(arab))
