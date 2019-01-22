var answer1, answer2, answer3, answer4, answer5;

function change1() {
    answer3 = document.getElementById('answer3V1').value;
}

function change2() {
    answer3 = document.getElementById('answer3V2').value;
}

function change3() {
    answer3 = document.getElementById('answer3V3').value;
}

function change4() {
    answer5 = document.getElementById('inlineRadio1').value;
}

function change5() {
    answer5 = document.getElementById('inlineRadio2').value;
}

function change6() {
    answer5 = document.getElementById('inlineRadio3').value;
}

function checkResults() {
   answer1 = document.getElementById('answer1').value;
   answer2 = document.getElementById('answer2').value;
   answer4 = document.getElementById('selectValue').value;

   var whereErrors = '';

   var result = 0;

   if (answer1 == 'Канада'){
       result++;
   }
   else{
       whereErrors +='1 ';
   }
   console.log(whereErrors);

   if (answer2 == '60'){
       result++;
   }
   else{
       whereErrors+='2 ';
   }
    console.log(whereErrors);
   if (answer3 == 'true'){
       result++;
   }
   else{
       whereErrors+='3 ';
   }
   if (answer4 == 'true'){
        result++;
   }
   else{
       whereErrors+='4 ';
   }
   if (answer5 == 'true'){
       result++;
   }
   else{
       whereErrors+='5 ';
   }
    console.log(whereErrors);
   if (result==5){
       document.getElementById('testResult').innerHTML = 'Ваш результат: ' + result + '/5';
   }
   else{
       document.getElementById('testResult').innerHTML = 'Ваш результат: ' + result + '/5';
       document.getElementById('testErrors').innerHTML = 'Неправильные ответы под номерами: ' + whereErrors;
   }



}