// add multiples of 0 to number character
function multipleString(char, reps) {
  let charSet = '';
  
    for (let i = 1; i <= reps; i++) {
      charSet += char;
    } 
  
    return charSet;
}

// coverts integers to roman numerals
function romanGeneral(numberArray) {

  // integer to roman numeral mapping
  const numeralMapping = {
    '1': 'I', '2': 'II', '3': 'III', '4': 'IV', '5': 'V',
    '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX',
    '10': 'X', '20': 'XX', '30': 'XXX', '40': 'XL', '50': 'L',
    '60': 'LX', '70': 'LXX', '80': 'LXXX', '90': 'XC',
    '100': 'C', '200': 'CC', '3000': 'CCC', '400': 'CD', '500': 'D',
    '600': 'DC', '700': 'DCC', '800': 'DCCC', '900': 'CM',
    '1000': 'M', '2000': 'MM', '3000': 'MMM'
  }

  // initialize roman numeral array
  const romanArray = [];

  // match integers with roman numerals
  for (let int of numberArray) {
    for (let [num, roman] of Object.entries(numeralMapping)) {
      if (num === int) {
        romanArray.push(roman);
      }
    }
  }

  // return roman numeral as string
  return romanArray.join('');
}

// core function
function convertToRoman(num) {
  
  // add numbers to array in reverse
  let numberHolder = [];
  
  const numberStringBucket = `${num}`.split('');
  
  for (let i = numberStringBucket.length - 1; i >= 0; i--) {
    numberHolder.push(numberStringBucket[i]);
  }

  // add multiples of zero to numbers based off array position
  const numberHolderMultiples = [];

  const multiples = '0';

  for (let int in numberHolder) {
    if (int === '0') {
      numberHolderMultiples.push(numberHolder[int]);
    } else {
      numberHolderMultiples.push(
        numberHolder[int] += multipleString(
          multiples, 
          int
        )
      );
    }
  }

  // clean array of elements evaluated as zero integers
  const numberMultiplesRaw = [];

  for (let int of numberHolderMultiples) {
    if (parseInt(int) !== 0) {
      numberMultiplesRaw.push(int);
    }
  }

  // reverse array to have logical order
  const numberMultiples = numberMultiplesRaw.reverse();

  // return roman nummeral
  return romanGeneral(numberMultiples);
}

convertToRoman(724);
