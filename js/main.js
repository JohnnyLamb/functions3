// add scripts


var studentName = {name: 'Michael', age: 27 };

var getStudentName= function(){
      return studentName.name;
};
getStudentName(studentName); // => Michael

var stringArray = ['javascript', 'is', 'not', 'python'];

var getTotalLetters = function(array){
      var joined = array.join("");
      return joined.length;
};
getTotalLetters(stringArray);


var createObject = function(key,value){

    var object = {};
    object[key] = value;
    return object;
};

createObject('city', 'Boulder');

var letterArray = ['a', 'b', 'c', 'd', 'e'];

var getNegativeIndex = function(array,negative){

    return array[array.length + negative];
};

getNegativeIndex(letterArray, -3);



var removeCharacter = function(string,character){

            var index = string.indexOf(character);

            var value = string[index];


            var answer = string.split(value);

            answer = answer.join('');

            return answer;

};

removeCharacter('javascript', 'a'); // => jvscript
removeCharacter('javascript', '1'); // => javascript
removeCharacter('12345', '2'); // => 1345

var ages = {john: 10, jerry: 11, jenny: 12 };

var outputObject = function(object){

  return object;

};

outputObject(ages); // => john is 10, jerry is 11, jenny is 12

var ages = {john: 10, jerry: 11, jenny: 12 };

    var outputObject = function(object){
    for(var i in object){

        console.log(i + " is " + object[i]);

    }

};

outputObject(ages);

 // => ['a', 'i']

var getVowels = function(string){
    var done = [];
    var vowels = ["a","e","i","o","u"];
    for (var i =0; i < string.length; i++){
      for(var j = 0; j < vowels.length; j++){
        if(string[i] === vowels[j]){
          var getVowel = string[i];
          if(getVowel[i] === done[i]){
              done.push(getVowel);

          }
        }
      }
   }
   var answer = done.slice(1,3);
   console.log(answer);
};


// getVowels('javascripting');

var captureTwins = function(array){
  var bucket = 0;
  for(var i = 0; i < array.length; i+=2){
    if(array[i] === array[i+1]){
      bucket++;
    }
  }
  if(array.length/2 === bucket ){
      return true;

  }else {
      return false;

  }
};

captureTwins(['m', 'm', 'n', 'n', 's', 's']);
captureTwins(['m', 'm', 'm', 'n', 's', 's']);
