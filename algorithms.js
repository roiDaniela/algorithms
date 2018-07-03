

// 2. Swap Two Number Variables Without Using a Temp Variable.
let swapNumbers = function(numbers){
    numbers.a = numbers.a + numbers.b;
    numbers.b = numbers.a - numbers.b;
    numbers.a = numbers.a - numbers.b;
}

let swapStrings = function(){
    let m = 'hello';
    var j = 'goodbye';
    m = j + m;
    j = m.slice(j.length);
    m = m.substr(0, m.length - j.length);
    console.log(m);
    console.log(j);
}

// **** Loops **** //
let starsA = function(){
    let str = '';
    let N = Math.floor(Math.random() * (10 - 1)) + 1;
    for (let x = 1; x <= N; x++) {
        str += '*';
        console.log(str);
    }
}

let starsB = function(){
    // Now do it the other way around
    for (let x = N; x >= 1; x--) {
        let numMax = x;
        let str1 = '';
        while (numMax) {
            str1 += '*';
            numMax--;
        }
        console.log(str1);
    }
}

// **** Strings **** //
let  reverse = function(str) {
  let reversed = '';
  while (str) {
    reversed += str.slice(str.length - 1, str.length);
    str = str.slice(0, str.length - 1);
  }
  return reversed;
}

console.log(reverse('dog')); //should return "god"
console.log(reverse('race car')); //should return "rac ecar"

// PALINDROME
function isPalindrome(str) {
  for (let k = str.length - 1, y = 0; k >= y; k--, y++) {
    if (str[k] !== str[y]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('po'));

// encrypt - Given a string, encrypt it
function encrypt(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i) + 1;
    result += String.fromCharCode(ascii);

  }
  return result;
}
console.log(encrypt('cat'));

// DECRYPTION - encrypt reverse
function decrypt(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i) - 1;
    result += String.fromCharCode(ascii);

  }
  return result;
}
console.log(decrypt('dbu'));

// **** Arrays **** //

let obj = {};
function duplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (obj.hasOwnProperty(value)) {
      arr.splice(i, 1);
      console.log(arr);

    } else {
      obj[value] = value;
      console.log(obj);
    }
  }
  return arr;
}

let array = ['dog', 'cat', 'camel', 'bee', 'dog', 'elephant', 'dolphin'];
console.log(duplicate(array));



let colors = ['red', 'indigo', 'white', 'teal', 'yellow'];
let foods = ['bread', 'cheese', 'cucumber'];

function jumble(arr1, arr2) {
  let newArray = arr1.concat(arr2);
  let jumbledArr = [];
  for (let i = 0; i < newArray.length; i++) {
    let N = Math.floor(Math.random() * Math.floor(newArray.length));

    jumbledArr.push(newArray[N]);
    newArray.splice(N, 1);
    i--;
  }
  return jumbledArr;
}
console.log(jumble(colors, foods));

// this is quicksort
let boxes = [3, 6, 89, 2, 65, 4, 1, 90, 48];
function my_sort(array) {
    if(array.length < 2) {
        return array;
    }

    const pivot = array[0];
    const lesser = [];
    const greater = [];

    for(let i = 1; i < array.length; i++) {
        if(array[i] < pivot) {
            lesser.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    return my_sort(lesser).concat(pivot, my_sort(greater));
}

console.log(my_sort(boxes));

$( "#my-btn-add" ).click(function() {
    let size = $("#size").val();
    $( "#boxes" ).append( '<div class="my-box" style="width:'+ size + 'px; ' + 'height:' + size + 'px;' + '">'+'This div is '+ size + 'X' + size + '</div>' );
});

$( "#my-btn-sort" ).click(function() {
    $('.my-box').sort(function (a, b) {
        let arr = [$(a).height(), $(b).height()];
        arr = my_sort(arr);
        return ($(a).height() == arr[0]) ? 1 : -1;
    }).appendTo('body');
});