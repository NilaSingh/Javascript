function isRealPalindrome(str) {
  var case1 = str.replace(/[\W_]/g, "").toLowerCase();
  var case2 = case1.split("").reverse().reduce((acc, curr) => acc + curr);
  if (case1 == case2) {
    return true;
  } else if (case1 != case2) {
    return false;
  }
}

function runningTotal(array) {
  var sum = 0
  var i = 0
  var newarray = []
  array.forEach(element => {
    sum = sum + element
    newarray.push(sum)
  })
  return newarray
}


function swap(str) {
  var array = str.split(" ");
  var reverse = '';
  array.forEach(element => {
    if (element.length != 1) {
      var first = element[0]
      var mid = element.substr(1, (element.length - 2))
      var last = element[element.length - 1]
      reverse = reverse + last + mid + first + " "
    }
    else {
      reverse = reverse + element + ' ';
    }
  })
  var final = reverse.substr(0, reverse.length - 1);
  return final
}

function wordSizes(str) {
  var array = str.split(' ');
  var map = {};
  if (!str)
    return map;
  else {
    array.forEach(element => {
      map[element.length] = (map[element.length]) + 1 || 1;

    })
  }
  return map
}

function union(a, b) {
  var list = [];
  var count = 0;
  a.map(element => {
    if (list.includes(element) == false) {
      list[count] = element;
      count++;
    }
  })
  b.map(element => {
    if (list.includes(element) == false) {
      list[count] = element;
      count++;
    }
  })
  return list;
}

function firstRecurring(str) {
  var map = {};
  var string = str.split("")
  var result = ['']
  var i = 0
  var b = 0
  string.map(element => {
    if (element in map) {
      result[b] = element;
      b++
    } else {
      map[element] = i;
      i++
    }
  })
  return result[0];
}

function showMultiplicativeAverage(array) {
  var i = 0;
  var average = array.reduce((acc, curr) => acc * curr) / array.length
  return average.toFixed(3);
}

function multiplyList(a, b) {
  var i = 0
  var result = []
  a.forEach(element => {
    result[i] = element * b[i]
    i++
  })
  return result;
}

function sequence(x) {
  var num = 0;
  var seqarray = [];
  var i = 0
  while (i < x) {
    num = num + 1;
    seqarray[i] = num;
    i++
  }
  return seqarray;
}

function wordCap(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

function processReleaseData(releases) {
  ans = []
  releases.forEach(function (entry) {
    if (entry.hasOwnProperty('id') && entry.hasOwnProperty('title')) {
      record = {}
      record['id'] = entry['id'];
      record['title'] = entry['title'];
      ans.push(record)
    }
  });
  return ans;
}

function octalToDecimal(str) {
  var exponent = 0;
  var num = 0;
  for (i = str.length - 1; i >= 0; i--) {
    num = str[i] * (8 ** exponent) + num;
    exponent++;
  }
  return num;
}

function anagram(word, anagrams) {
  var ans = [];
  var z = word.split("").sort().join("");
  anagrams.forEach(element => {
    var y = element.split("").sort().join("");
    if (z === y) {
      ans.push(element);
    }
  })
  return ans;
}

function triangle(a, b, c) {
  var total = 180;
  var sum = [a, b, c].reduce((acc, curr) => acc + curr)
  if (sum != total) {
    return 'invalid';
  } else {
    if (a == 0 || b == 0 || c == 0)
      return 'invalid';
    else if (a > 90 || b > 90 || c > 90)
      return "obtuse";
    else if (a == 90 || b == 90 || c == 90)
      return "right";
    else
      return "acute";
  }
}


function fridayThe13ths(yy) {
  var numberoftimes = 0;
  var mm = 0;
  while (mm < 12) {
    var date = new Date(yy, mm, 13);
    if (date.getDay() == 5) {
      numberoftimes++
    }
    mm++;
  }
  return numberoftimes;
}


module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
  wordCap,
  processReleaseData,
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
