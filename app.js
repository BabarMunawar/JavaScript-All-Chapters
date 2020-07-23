//chapter 1 Alerts
//Q1 & Q2

alert("Error! Please enter avalid password")

//Q3

alert("Welcome to js land...\n happing coding")

//Q4

alert("Welcome to js landing")
alert("Happy Coding!")

//Q5

alert("Hello...I can run JS through my web browser's console")

// ===Assignment 2=== task 1
var a = "babar";
alert(a)
// === task 2 ===
var b = "Babar Munawar";
alert(b)

// === task 3 ===

var message = "Hello World"
alert(message)

// === task 4 ===

var name = prompt("Enter your Name")
alert(name)
var lastName = prompt("Enter your Last Name")
alert(lastName)
var age = prompt("Enter your Age")
alert(age)
var email = prompt("Enter your Email")
alert(email)
var phoneNumber =prompt("Enter your Number")
alert(phoneNumber)

// === task 5 ===

var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)

// === task 6 ===

var Email = "My Email Address is babarmunawar07@gmail.com"
alert(Email)

// === task 7 ===

var book = "A smarter way to learn JavaScript"
alert(book)

// === task 8 ===

document.write("Yah! I can write HTML content through JavaScript")


// === Assignment 3 === task 1 ===

var age = "I am 19 years old"
alert(age)

// === task 3 ===

document.write("My Birth Year is 2000")

// === task 4 ===

var vistorName =prompt ("Name")
alert(vistorName)
var product =prompt ("Product Title")
alert(product)
var quantity =prompt ("Quantity")
alert(qunatity)

// === Assignment 4 Task 1 ===

var a = 66;
var b = 8;
var c = a + b;
alert(c)

// === Task 3 ===

document.write("<h1>Rules for naming JS variables <h1/>")
document.write("Variables names can only contain , numbers , $ And _ <br/> Variables must began with a letter, $ or _ . For example: $name, _name or name <br/> Variables are case sensative <br/> Variables should not be JS keywords ")

// === Assignment 5 
// Task 1 ===

var a = 7;
var b = 5;
var c = a+b;

document.write("the sum of " + a + " and " + b + " is " + c +"<br>")

// task 2

var a = 7;
var b= 5;
var d =a-b;
document.write("the subtraction of " + a + " and " + b + " is " + d+"<br>")


var a = 7;
var b= 5;
var d =a*b;
document.write("the multiplication of " + a + " and " + b + " is " + d+"<br>")


var a = 7;
var b= 5;
var d =a/b;
document.write("the division of " + a + " and " + b + " is " + d+" <br>")

var a = 7;
var b= 5;
var d =a%b;
document.write("the Modulus of " + a + " and " + b + " is " + d+"<br> <br>")


// task 3
var a = "";
document.write("value after variable declaration is " + a +"<br>")
a = 5;
document.write("initial value: "+a + "<br>" )

var a = ++a;
document.write("after increment "+a + "<br>" )

var b = 7;
var c = a + b;
document.write("value after addition is:" + c + "<br>")

var c = --c;
document.write("value after decrement is:" + c+ "<br>" )

var d = c%3;
document.write("remainder is:" + d +"<br> <br>")

// Task 4

var ticketPrice = 600;
var Quantity = 5;
var totalprice = ticketPrice*Quantity;
document.write("total cost to buy " + Quantity + " tickets to a movie is " + totalprice +"PKR"+ "<br> <br>" )

// Task 5 

var table = 4;
document.write(table + "x" + "1" + "= " + table*1 + "<br>" )
document.write(table + "x" + "2" + "= " + table*2 + "<br>" )
document.write(table + "x" + "3" + "= " + table*3 + "<br>" )
document.write(table + "x" + "4" + "= " + table*4 + "<br>" )
document.write(table + "x" + "5" + "= " + table*5 + "<br>" )
document.write(table + "x" + "6" + "= " + table*6 + "<br>" )
document.write(table + "x" + "7" + "= " + table*7 + "<br>" )
document.write(table + "x" + "8" + "= " + table*8 + "<br>" )
document.write(table + "x" + "9" + "= " + table*9 + "<br>" )
document.write(table + "x" + "10" + "= " + table*10 + "<br> <br>" )

// Task 6

var celsius = 25;
var intoFarhrenheit =  (celsius*9/5) + 32;
document.write(celsius +"°C is " +  intoFarhrenheit + "°F" + "<br>")
var ferhrenheit = 70;
var intoCelsius = (ferhrenheit-32) * 5/9;
document.write(ferhrenheit +"°F is " +  intoCelsius + "°C" + "<br> <br>")

// Task 7

document.write("<h1> Shopping Cart</h1>")
var poi1 = 650;
var quantity1 = 3;
var poi2 = 100;
var quantity2 = 7;
var shippingCharges = 100;
var totalCost =  (poi1 * quantity1) + (poi2 * quantity2);
document.write("Price of item 1 is " + poi1 +"<br>")
document.write("Quantity of item 1 is " + quantity1+"<br>")
document.write("Price of item 2 is " + poi2+"<br>") 
document.write("Quantity of item 2 is " + quantity2+"<br> <br>")
document.write("total cost of your order is " + totalCost+"<br> <br>")

// Task 8
 var totalMarks = 980;
 var obtainMarks = 804;
 var percent = (obtainMarks/totalMarks) * 100;
 document.write("total marks:" + totalMarks + "<br>")
 document.write("marks obtain:" + obtainMarks + "<br>")
 document.write("percentage:" + percent + "<br>")



// === Assignment 9-11 Task 1 ===

var city = prompt("Enter your city")
if (city === "karachi") {
    alert("Welcome to city of Lights")
    
}else {
    alert("welcome")
}

// === Task 2 ===

var gender = prompt("Enter your Gender")

if (gender === "male" ) {
    alert("Good Morning Sir")
   
    
}else if (gender === "female"){
    alert("Good morning ma'am")

}





// === Task 3 ===

var signal_color = prompt("Enter Your Color")
if (signal_color === "red") {
    alert("must stop")

} else if (signal_color === "yellow") {
    alert("ready to move")

}else if (signal_color === "green") {
    alert("move now")
    
}

// === Task 4 ===

var fuel = prompt("enter fuel in car")
if ( fuel < 0.25) {
    alert("Please refill the fuel in your car")
    
}

// task 5
 var a = 4; 
 if (++a === 5){ 
     alert("given condition for variable a is true"); 
    }

    var b = 82; 
    if (b++ === 83){ 
        alert("given condition for variable b is true"); 
}  

var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} if (c === 13){ 
    alert("condition 2 is true");
 } if (++c < 14){ 
     alert("condition 3 is true"); 
    } if(c === 14){ 
        alert("condition 4 is true"); 
    }
    
    var materialCost = 20000; 
    var labor_cost = 2000; 
    var total_cost = material_cost + labor_cost; 
    if (totalCost === labor_cost + material_cost){ 
        alert("The cost equals"); 
}  

if (true){ 
    alert("True"); } 
if (false){ 
    alert("False"); }  

    if("car" < "cat"){ 
        alert("car is smaller than cat"); 
} 

// Task 6

var totalMarks = prompt("enter your total marks")
var obtain = prompt("enter your obtain marks")
var perncent = (obtain/totalMarks) * 100;
document.write("Total marks: " +totalMarks + "<br>"  )
document.write("Marks Obtain: " + obtain +"<br>" )
document.write("percantage: " + perncent+ "<br>")
if (perncent >= 80 ) {
document.write("Grade: A-one")
document.write("Remark: Excelent")
    
} else if (perncent >= 70 ) {
    document.write("Grade: A"+ "<br>" )
    document.write("Reamrk: Good")
        
}  else if (perncent >= 60 ) {
    document.write("Grade: B"+"<br>")
    document.write("Remark: you need to improve")
        
}  else if (perncent < 60 ) {
    document.write("Grade: Fail"+"<br>")
    document.write("Remark: Sorry" +"<br>")
        
}  

//   Task 9
var x = prompt("Enter your number");
if (x % 2 === 0 ) {
    alert("number is even")
} else{
    alert("number is odd")
}

//    Task 10
var temprature = prompt("Enter Temperature of your city")
if (temprature > 40){
    alert( "It is too hot outside." )
} else if (temprature > 30){
    alert("Today's Weather is Normal")
} else if (temprature > 20) {
    alert("Today's Weather is cool")
} else {
    alert("Today's Weather is so cool")
}

//   Task 11
var number1 = prompt("Enter Your First Number");
var optr = prompt("Enter opt");
var number2 = prompt("Enter Your Second Number") ;
if (optr === "+") {
    alert((+number1) + (+number2))
} else if (optr === "-") {
    alert((+number1) - (+number2))
} else if (optr === "*") {
    alert((+number1) * (+number2))
} else if (optr === "/") {
    alert((+number1) / (+number2))
} else if (optr === "%") {
    alert((+number1) / (+number2) * 100 + "%")
} else {
    alert("opt not found")
}
    

//  chptr 12-13

//    Task 2
var integer1 = prompt("Enter your First number:")
var integer2 = prompt("Enter your second number:")
if(integer1 > integer2) {
    alert(integer1)
} else if (integer2 > integer1){
    alert(integer2)
}else if (integer1 === integer2){
    alert("first number is equal to second number")
}

//    Task 3
var number = prompt("Enter Your Number")
if (number > 0 ){
    alert("Number is Positive")
} else if (number == 0 ) {
    alert("Your number is zero")
} else if(number < 0) {
    alert("number is Negative")
}

//    Task 4
var vowels = '^[aieouAIEOU].*'
var input = prompt("Enter any Word") 
var check = input.match(vowels)
if (check){
    alert("this word is vowel")
} else {
    alert("this is not vowel")
}

//   Task 5
var correctPassword = "123abc"
var enterPassword = prompt("Please Enter your Password")
if (enterPassword === correctPassword){
    alert("Correct! The password you entered matches the original password")
} else if (enterPassword !== correctPassword){
    alert("Password is Incorrect")
}else {
    alert("please enter your password")
}

//    Task 6
var greeting; 
var hour = 13;
 if (hour < 18) { 
    greeting = "Good day"; 
 }else{ 
 greeting = "Good evening"; 
} 

//    Task 7
var time = prompt("Enter Time in 24hour clock format")
if (time >= "00:00" && time < "12:00"  ){
    alert("Good Morning")
} else if (time >= "12:00" && time < "17:00"  ){
    alert("Good Afternoon")
} else if (time >= "17:00" && time < "21:00"  ){
    alert("Good Evening")
} else if (time >= "21:00" && time < "23:59"  ){
    alert("Good Night")
}


/// xxxxx /////


// //   Chptr# 21-25 
// //   Task 1


var fname = prompt("Enter your first name")
var lname = prompt("Enter your last name")
var fullName = fname + " " + lname;
alert("welcome"+ " " + fullName);

// //  Task 2

var phoneName = "Huawei"
var m = phoneName.length;
document.write("My Phone is:"+ " " + phoneName + "<br>" + "Lenth of String:"+ " " + m + "<br>"+ "<br>")


// //  Task 3

var str = "Pakistani";
var n = str.indexOf("n");
document.write("String:"+ " " + str + "<br>" + "Index of 'n':" + " " + n+"<br>"+ "<br>")

// //  Task 4

var str = "Hello World";
var n = str.lastIndexOf("l");
document.write("String:"+ " " + str + "<br>" + "Last Index of'l':" + " " + n+"<br>"+ "<br>")


// //  Task 5

var str = "Pakistani";
var res = str.charAt(3);
document.write("String:" +" " + str + "<br>" + "Character at Index 3:" + " " + res+"<br>"+ "<br>")


// //  Task 6

var fname = prompt("Enter your first name")
var lname = prompt("Enter your last name")
var fullName = fname + lname;
alert("welcome"+ " " + fullName);


// //  Task 7

var city = "Hyderabad";
var replace = city.replace("Hyder", "Islam");
document.write("City:" + " " + city + "<br>" + "After replacement:" + " " + replace+"<br>"+ "<br>")


// //  Task 8

var message = "Ali and Sami are best friends They play cricket and football together"; 
var rep = message.replace("and", "&")
document.write(rep+"<br>"+ "<br>")

// //  Task 9

var num = "472";
var strng = "string"
var number = "string"
var n = num.toString(472);
document.write("Value:"+ " " + num + "<br>" + "Type:" + " " + strng + "<br>" + "Valur:" + " " + n + "<br>" + "Type:" + " " + number +"<br>"+ "<br>")

// // Task 10

var userInput = prompt("Enter Input")
var arr = ['Peanuts']
var res = userInput.toUpperCase("PEANUTS");
alert(res);

// //  Task 11

var java = "javascript"
var intoTitle = java.toLowerCase("JAVASCRIPT");
document.write("UserInput:"+ " "+ java + "<br>" + "Titlecase"+" " + intoTitle+"<br>")


// //  Task 12

var num = 35.36;
var n = num.toString().replace(".","")
document.write("Number:"+ " " + num +"<br>" +"Result:"+" "+ n+"<br>")


//   Task 13

var userName = prompt("Enter your name:" )
var b = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
if(userName.match(b)){
    alert("Enter valid User Name");
}


//  Task 14


var varity = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Welcome to ABC Bakery,What do you want to order Sir/Ma'am?")
var itemsOdered = userInput.toLowerCase();
for ( i = 0; i < varity.length ; i++){
    if ( varity[i] === itemsOdered) {
        document.write(varity[i] + " is availabe at Index " + i + " in our bakery" +"<br>")
   
}else {
    document.write("Sorry not available")
}
}




// // Task 16

var university = "University of Karachi";
var intoArr = university.split('');
for(var i=0; i<intoArr.length; i++){
    document.write(intoArr[i] +"<br>")
} 


// //  Task 17

var a = prompt("Enter your Country Name");
var country = a.length
document.write("The last letter is " + a.charAt(country-1)+ "<br>")




// //  Task 18

var str = "The quick brown fox jumps over the lazy dog";
var str = str.toLowerCase ();
var count = (str.match(/the/g) || []).length;
document.write("Text:"+" " +str+"<br>" +"There are " +count+ "occurance(s) of word 'the' "+"<br>"+"<br>")




// //      Chptr 26-30    //////


//   Task 1


var posiNum = 6.45214;
var round = Math.round(posiNum)
var floor = Math.floor(posiNum)
var ceil = Math.ceil(posiNum)
document.write("Positive Number:"+" "+ posiNum+ "<br>" +"Round of value:" + " " +round+ "<br>"+ "floor value:"+ " " +floor+"<br>"+"ceil value:"+" "+ceil+ "<br>"+"<br>" )


// //   Task 2

var negiNum = -4.673;
var round = Math.round(negiNum)
var floor = Math.floor(negiNum)
var ceil = Math.ceil(negiNum)
document.write("Negative Number:"+" "+ negiNum+ "<br>" +"Round of value:" + " " +round+ "<br>"+ "floor value:"+ " " +floor+"<br>"+"ceil value:"+" "+ceil+ "<br>"+"<br>" )


// //   Task 3

var absValue = -10;
var value = Math.abs(absValue);
 document.write("The Absolute value is : " + absValue+ " "+ "is"+" " +value+ "<br>"+"<br>"  );

         

//   Task 4

var a = Math.random();
var b = (a*5) + (+1);
document.write("Random Dice Value: "+Math.floor(b))


//   Task 5

var head = Math.random();
var randomNumber = Math.floor((head*2) + (+1)  );
document.write(randomNumber+ "<br>")
if(randomNumber === 2){
    document.write("Random Coin Value Head <br>")
}else if(randomNumber === 1){
    document.write("Random Coin Value tail <br>")
}


//   Task 6

var RandomNumber = Math.random();
var num1 = (RandomNumber*100) + (+0.1);
document.write("Random Number between 1 and 100:"+ " " + Math.floor(num1));


//   Task 7

var x = Math.random();
var scretNumber = Math.floor((x*10) + (+1));
document.write(scretNumber);
var Guess = prompt("Guess the number between 1-10: ");
if(Guess === scretNumber){
    alert("Congrats User: " )

}else{
    alert("Try Again");
}



// /    Chptr 31-34 

//   Task 1


var newDate = new Date();
document.write(newDate+"<br>");


//   Task 2

var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
var output = document.write('Current Month:'+" ");
document.write(thisMonth);

 if(output.textContent !== undefined) {
    output.textContent = thisMonth;
  }
  else {
    output.innerText = thisMonth;
  }

//     Task 3

var strg = new Date();
var dateRes = strg.toString();
var toDay = dateRes.slice(0,3);
document.write("Today is " + toDay + "<br><br>")


//    Task 4

var date = new Date();
var str = date.toDateString();
var day = str.slice(0.3);
if( day ==="Sun" || day === "Sat"){
 document.write("Its fun Day " + "<br><br>")
}


//   Task  5

var e = new Date();
var f = e.toString();
var g = f.slice(8,2);
var h = parseInt(g);
if( h <= 15){
    document.write("Thd First fiften days of month " + "<br><br>")

}else if( h >=16){
    document.write("Last days of month " + "<br><br>")
}


//  Task 6

var New = new Date();
var getTime = New.getTime();
var x = getTime / 1000*60;
document.write("Current Date:" + New +"<br>"+ "Elapsed Milisecond since 1, January 1970:"+getTime+"<br>"+"Elapsed minutes since 1, january 1970:" +x)


//  Task 7

var hours = new Date();
var ampm = hours.getHours();
if(ampm < 12){
    alert("Its AM")

}else if(ampm>= 12 &&  ampm!= 0){
    alert("Its PM")
}


//   Task 9

var ramDan = new Date("June 18 2015");
var june_mili = ramDan.getTime();
var today_Date = new Date();
var today_Mili = today_Date.getTime();
var Mili = today_Mili - june_mili;
var days = Mili/(1000*60*60*24);
document.write( Math.floor(days) + "Days have passed since june 18 2015 <br> <br>")


//  Task 10

var date = new Date (" 2015" )
var refferenceDate = new Date ("Sat Dec 2015 22:50:16")
var mili = date.getTime();
var refferenceMili = refferenceDate.getTime();
var Mili = reffenenceMili - mili;
var second = Mili/(1000*60)
document.write(second)



//  Task 11

var currentDate = new Date();
var currentHour = currentDate.getHours();
var agoDate = new Date();
var agoHour = agoDate.setHours((currentHour-1));
document.write(agoHour)




//  task

var cur_date = new Date();
curdate = cur_date.setHours(22);
document.write(cur_date);



// /    Chptr 35-38

//  Task 1

function date() {
    var x = new Date()
   document.write(x);

}
date();

//  Task 2

function fullName() {
  var FirstName =prompt("Enter your first name")
  var LastName =prompt("Enter your last name")
document.write(FirstName+ " " + LastName)

}
fullName();


//   Task 3

function sum_method (x,y){
    document.write((+x) + (+y))
}
var number = sum_method (prompt("enter first number") , prompt("enter second number"))


//   Task 4 ///  "Calculator"


function calCulator (num1,optr,num2){
    if (optr === "+"){
        return (+num1) +(+num2)
    } else if (optr === "-"){
        return num1 - num2
    } else if (optr === "/"){
        return num1 / num2
    } else if (optr === "*"){
        return num1 * num2
    } else{
        return "Operator Not Found"
    }
}

var result = calCulator (prompt("enter your first number"),prompt("enter your operator"),prompt("enter your second number"))
document.write(result)
    

//   Task 5

function squareShape (y){
    document.write(y * y)

}

var z = squareShape(prompt("Enter your Number: "))


//   Task 6

var facTorail = [];
function f (n) {
    if(n == 0 || n == 1)
    return 1;
    if(facTorail[n] > 0)
    return facTorail[n];
    return facTorail[n] = f(n-1) * n;
}
var n = f (prompt("Enter your Number"))
document.write(n);


//  Task 7

function count ( start,End){
    for(var i = start ; i <= End ; i++){
        document.write(i + " ")
    }

}

var counting = count(prompt("Counting Starts at:"),prompt("Counting End at") )


//  Task 8

function hypotenuse (base, perp){
    var o = (base) + ( perp)
    var hyp = Math.sqrt(hypotenuse);
    document.write("Hypotneuse" + hyp);
}

var h = hypotenuse(Math.pow(prompt("value of base"),2),Math.pow(prompt("Value of Perpendicular"),2))


//  Task 9

function areaRectangle (width= prompt("Enter width"),height = prompt("Enter Height")){
    var area = width * height
    document.write("Area of rectangle is "+area)

}
areaRectangle();


//  Task 10


function palinDrome(){
    var w = prompt("enter your word: ")
    var m = "";
        for(var i = w.length - 1; i >=0 ; i--){
        m += w[i]
    }

    if (m === w){
       
             document.write("this is palindrome word");
    }else {
        document.write("this is not palindrome")
    }
}
palinDrome();


//  Task 11

function Capital (d){
    var c = d;
    var e = c.toUpperCase();
    document.write(e);

}

var res = Capital(prompt("Write a sentence"))



// ///         xxxx     //////

/// Chaptr 38-42

//   Task 1

var x = 0
var y = 10
 
function increase(){
    while (x < y){
        console.log(x)
        x++

    }
    console.log(x)
}
increase()


// /   Task 2 ///

function LeapYear() { 
    var year= document.getElementById("year").value; 
      
    document.getElementById("trueflase").innerHTML  
        = (year % 100 === 0) ? (year % 400 === 0) 
                : (year % 4 === 0); 
} 


// /    Task 3 ///

var sideOne =prompt('Enter side1');
var sideSecond =prompt('Enter side2');
var sideThird =prompt('Enter side3');


var ss = (sideOne + sideSecond + sideThird) / 2;

var areofTri = Math.sqrt( ss * (ss - sideOne) * (ss - sideSecond) * (ss - sideThird)

);

document.write(areofTri)


// /   Task 4 ///



var string = "Pleases read this application and give me gratuity” Such occurrences are ea, ea, uiPleases read this application and give me gratuity” Such occurrences are ea, ea, uiPleases read this application and give me gratuity” Such occurrences are ea, ea, uiPleases read this application and give me gratuity” Such occurrences are ea, ea, ui";
var vowel = ["a", "e", "i", "o", "u"];

String.prototype.character = function name() {
    var i;
    for ( i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for ( j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
            }

        }
    }
}

string.character();
document.write(string);


// /   Task 5 ///


function findOccurrences() {
    var str = "Pleases read this application and give me gratuity” Such occurrences are ea, ea, u";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  document.write(findOccurrences());


//   Task 6


var chem = prompt("Enter Your Chemistry Marks")
var phy = prompt("Enter Your Physics Marks")
var math = prompt("Enter Your Maths Marks")
function mainFunction(){
    Avrge()
    percent()
    

}
function Avrge (){
    var Avrge = ((+chem) + (+phy) + (+math)) / 3;
    console.log("Average " + Avrge)
    
}

function percent () {
    var totalMarks = 300
    var percent = (((+chem) + (+phy) + (+math))/totalMarks)*100;
    console.log("Percentage " + percent)
}


//  Task 7

var dis = prompt("Enter distance in KM")

function into_meters() {
   disIntoMeter = dis*1000
    console.log(dis + "km " + " = " +  disIntoMeter + "m ")
}
into_meters()

function into_feet() {
    disIntoFeet = dis*3281
     console.log(dis + "km " + " = " +  disIntoFeet + "feet ")
}
into_feet()

function into_inches() {
    disIntoInches = dis*39370
     console.log(dis + "km " + " = " +  disIntoInches + "Inches ")
}
into_inches()

function into_centimeter() {
    disIntoCentimeter = dis*100000
     console.log(dis + "km " + " = " +  disIntoCentimeter + "Centimeter ")
}
into_centimeter()



// // chptr 43-48


function pic(){
    alert('Thanks for buying phone from us')
}


// / Task 2

function mobPics(){
    alert('Thanks for buying phone from us')
}


// Task 3

function deleteName(){
    document.getElementById('Table').deleteRow(1)
}

//  Task 5

var x = 0; 
var vaLue = document.getElementById('vaLue')
function increasing(){
x++
console.log(x)
console.log(vaLue.innerHTML = Number(x))
}
function decreasing() {
    x--
    console.log(x)
console.log(vaLue.innerHTML = Number(x))

}


//  Task 6

function expand(){
    var details =  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea voluptate corporis pariatur laborum rerum, quos hic voluptates recusandae odit? Magnam, ipsam iure. A expedita at nostrum natus, fugiat accusantium.';
document.getElementById("detailaid").innerHTML = details
}

// /   chptr 58-67

// / Task 1

var main_content = document.getElementById("main-content")
console.log(main_content)
console.log(main_content.childNodes)

var render = document.getElementsByClassName('render')
console.log(render)

var firstName = document.getElementById('first-name').value = 'Babar'
var lastName = document.getElementById('last-name').value = 'Munawar'
var email= document.getElementById('email').value = 'babarmunawar007@gmail.com'







