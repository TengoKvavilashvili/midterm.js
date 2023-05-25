/* თითოეულ საკითზე გაეცით პასუხი და მოიყვანეთ მაგალითები! */

/* variables */

// /რა არის ცვლადი (variable)?/;
// ცვლადი არის კონტეინერი რომელშიც მოვათავსებთ მნიშვნელობას შესანახად და მანიპულაციისთვის.
// ცვლადში შეგვიძლია შევინახოთ სხვადასხვა ტიპის მნიშვნელობები; რიცხვები,სტრიქონები,ობიექტები და სხვა.
// let num = 10;   (num)


// /რა არის მინიჭების ოპერატორი (assignment operator)?/;
// მინიჭების ოპერატორი გამოიყენება ცვლადისთვის მნიშვნელობის მინიჭებისთვის
// variable = value;   (=)
// ასევე შეგვიძლი შევცვალოთ არსებული ცვლადის მნიშვნელობა მინიჭების ოპერატორის გამოყენებით:
// let = x;
// x = 5;

// let y = 10;
// y += 5;
// console.log(y);  // Output 15


// // /რა არის მნიშვნელობა (value)?/;
// მნიშვნელობა აღნიშნავს ცვლადში შენახულ მონაცემებს ან ინფორმაციას.
// მნიშვნელობები შეიძლება იყოს სხვადასხვა ფორმები ან ტიპები:
// მაგ: რიცხვები,სტრიქონები,ლოგიკური მნიშვნელობები(true,false),
// null, undefined, ობიექტები, მასივები, ფუნქციები.
// let userName = Nika; (Nika)


/* conditionals */
/რას ეწოდება კოდის ბლოკი (code block)?/;

let age = 19;
if (age < 18) {
  // block code
  console.log('You cannot enter!');
} else {
  console.log('You may enter');
}


// /რა არის [if | else | else if]?/;
// if:ამოწმებს პირობას ბლოკის შიგნით თუ პირობა ჭეშმარიტია (true) შესრულდება ბლოლკში არსებული პირობა.
// else if: გამოიყენება რათა მიუთითოთ ახალი პირობა შესამოწმებლად, თუ პირველი პირობა მცდარია(false) 
// და else if ბლოკში არსებული პირობა ჭეშმარიტია შესრულდება if else პირობა .
// else: პირობა შესრულდება თუ ყველა წინა პირობა იქნება მცდარი ანუ (false).
let time = 18;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting); /*Output Good day*/

//  /როგორ მუშაობს: [და, ან, არა] ოპერატორები (and, or, not)?/;

//  and (&&) ოპერატორი:  && ოპერატორი აბრუნებს true-ს, თუ ორივე ოპერანტი არის true, ხოლო false-ს წინააღმდეგ შემთხვევაში.
//  თუ პირველი ოპერანდი მცდარია, მეორე ოპერანდი არ ფასდება, რადგან საერთო შედეგი ყოველთვის მცდარი (false) იქნება. 

let a = true;
let b = false;
console.log(a && b); // Output false

// ან (||) ოპერატორი: || ოპერატორი აბრუნებს true, თუ რომელიმე ოპერანდი არის true, და false, თუ ორივე ოპერანდი არის false.
//   თუ პირველი ოპერანდი ჭეშმარიტია (true), მეორე ოპერანდი არ ფასდება, რადგან საერთო შედეგი ყოველთვის იქნება ჭეშმარიტი (true).

console.log(a || b); // Output: true

// არა (!) ოპერატორი: ! ოპერატორი არის ერთიანი ოპერატორი, რომელიც აბრუნებს თავისი ოპერანდის მნიშვნელობას.
//  თუ ოპერანდი არის true, ის აბრუნებს false-ს, ხოლო თუ ოპერანდი არის false, ის აბრუნებს true.

console.log(!a); // Output: false

console.log(!b); // Output: true



/როგორ მუშაობს switch (case და default)?/;
//  როგორც მივხვდი switch არის if else მოდიფიკაცია რომლითაც ბევრი შედარების გაკეთება არის შესაძლებელი.
//  მაგალითად:
const num = 50;
switch (num) {
  case 49:
    console.log('Error!');
    break;
  case 100:
    console.log('Error!');
    break;
  case 50:
    console.log('OK!');
    break;
    default:
      console.log('Not Now!');
}



let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('It\'s Monday!');
    break;
  case 'Tuesday':
    console.log('It\'s Tuesday!');
    break;
  default:
    console.log('It\'s another day of the week.');
}

// default გამოიყენება იმ შემთხვევაში თუ არცერთი პირობა არ შესრულდა შესრულდება default-ში მოცემული პირობა ..

