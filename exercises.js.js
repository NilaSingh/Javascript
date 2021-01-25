//Question 1 JavaScript Prework

function isRealPalindrome(str) {

    var case1 = str.replace(/[\W_]/g, "").toLowerCase();
    var case2 = case1.split("").reverse().join("");
    if(case1==case2){
        return true;
    }else if(case1!=case2){
        return false;
    }
}

//Question 2
function runningTotal (array){
    var sum=0; 
    var  i=0;
    var newarray=[];
    for(i=0;i<array.length;i++){
        sum=sum+array[i];
        newarray[i]=sum;
    }
    return newarray;
}

//Question 3
//Question 4
function wordSizes(str){
    var array=str.split(' ');
    var map={};
    if(!str)
    return map;
    else{
    for(var i=0; i<array.length; i++){
        map[array[i].length]=( map[array[i].length])+1||1;
    }
    return map;}
}

//Question 5
function union(a,b){
  var map = {};
  var i=0;
  for (i = a.length-1; i >= 0; -- i)
     map[a[i]] = a[i];
  for ( i = b.length-1; i >= 0; -- i)
     map[b[i]] = b[i];

  var finalarray=[];
  
  for (var x in map) {
     finalarray.push(map[x]);
  }
  return finalarray;
}

//Question 6
function firstRecurring(str){
  var map={};
  for(var i=0; i<str.length;i++){
      if(str[i] in map)
      return str[i];
      else
      map[str[i]]=i;
  }
  return '';
}

//Question 7
function showMultiplicativeAverage(array){
    var multiply=1;
    var divided=0;
    var i=0;
    for(i=0; i<array.length;i++){
        multiply=array[i] * multiply;
    }
    divided=multiply/i;
    return divided.toFixed(3);
}

//Question 8 
function multiplyList(a,b){
    var result=[];
    for(var i=0; i<a.length; i++){
        result[i]=a[i] * b[i];
    }
    return result;
}

//Question 9 
function sequence(x){
    var num=0;
    var seqarray=[];
    for(var i=0; i<x ; i++){
       num=num+1; 
       seqarray[i]=num;
        
    }
    return seqarray;
}

//Question 10
function wordCap(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}

//Question 11
function processReleaseData(releases) {
    ans = []
    releases.forEach(function(entry) {
       if(entry.hasOwnProperty('id') && entry.hasOwnProperty('title')) {
           record = {}
           record['id'] = entry['id'];
           record['title'] = entry['title'];
           ans.push(record)
       }
    });
    return ans;
}

//Question 13
function anagram(word, anagrams) {
    var ans = [];
    var z = word.split("").sort().join("");
    for(var i=0; i<anagrams.length;i++) {
        var y = anagrams[i].split("").sort().join("");
        if(z === y) {
            ans.push(anagrams[i]);
        }
    };
    return ans;
}

//Question 14
function triangle(a,b,c){
    var total=180;
    var sum=a+b+c;
    if(sum!=total){
        return "invalid";
    }else{
        if(a>90||b>90||c>90)
        return "obtuse";
        else if(a==90||b==90||c==90)
        return "right";
        else
        return "acute";
        
    }
    
}