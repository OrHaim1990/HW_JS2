

// 1. מערך פשוט:
// צרו מערך עם 5 שמות של תלמידים והדפיסו לקונסול את השמות.
var names =[
    'Lea',
    'Sam',
    'Tom',
    'Peter',
    'Joan'
]

console.log(names);


// 2. לוח הכפל מתוחכם:
// צרו את לוח הכפל באמצעות  JAVASCRIPT. הדגישו (באמצעות javascript) את המספרים 50,100,72


var result = 'x ';
for (var i = 0; i < 11; i++) {

    for (var j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);

// 3.
// להלן מובא הקוד הבא:
  var answer = prompt('Please type a number')
  console.log(answer)

// תריצו אותו.

// 4.צרו לולאת while שתעצור רק אם המשתמש רושם STOP
var answer = ""

while(answer != "STOP"){
    answer = prompt('Enter STOP to break the loop\n')
}

// 5.צרו "תוכנה" שיוצרת מערכים
// א. לפי המספר שמתקבל יווצר מערך של כל המספרים מאפס ועד כולל המספר המבוקש.
// ב. אם המשתמש לא סיפק מספר...תמשיכו לבקש ממנו עד שייתן מספר תקין.

var number = [];
var input

while(isNaN(input)){
    input = prompt('Enter a valid number')
}

for(i=0; i <= input; i++)
{
    number.push(i)
}
console.log(number)


// 6.עם מערך התלמידים צרו "תוכנת חיפוש" שבה המשתמש מזין שם והתוכנה אומרת אם התלמיד נמצא במערך.
var names =[
    'or',
    'Samy',
    'Tomy',
    'Pete',
    'Jo'
]
var shem
var found = false
shem = prompt('Enter a name')

for(i=0; i< names.length; i++){
    if(shem==names[i]){
        found = true
        break
    }
}

console.log(found)

// 7.צרו ריבוע עם לולאה וקונסולים

// *****
// *****
// *****
// *****
// *****

var square =[
    '*****', 
    '*****',
    '*****',
    '*****',
    '*****'
]

for(i = 0; i < square.length; i++){
    console.log(square[i]);
}



// 8.צרו ריבוע לפי מספר מהמשתמש

// 7.ציירו משולש כזה באמצעות לולאה וקונסולים.
// (**אתגר** ייצרו באמצעות לולאה אחת)

// *
// **
// ***
// ****
// ***
// **
// *

var square =[
    '*', 
    '**',
    '***',
    '****',
    '***',
    '**',
    '*'
]

for(i = 0; i < square.length; i++){
    console.log(square[i]);
}

