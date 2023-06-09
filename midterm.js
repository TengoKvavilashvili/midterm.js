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

/* array */
/ახსენით რა არის და რისთვის გამოიყენება მონაცემთა სტრუქტურები (data structures)?/;


/რა არის მასივი (array)?/;
//მასივი (array) არის მონაცემთა სტრუქტურა, რომელიც გამოიყენება ბევრი ელემენტების შესანახად ერთ ცვლადში.

let cars = [
  'Bmw', 'Mercedes', 'Toyota', 'Lexus'
];
// ყველა ელემენტს აქვს ინდექსი,ინდექსები JavaScript მასივებში იწყება 0-დან, რაც ნიშნავს, რომ პირველი ელემენტი არის ინდექსში 0, მეორე 1 და ა.შ.
console.log(cars[3]); //Output Lexus

cars.push('Honda');
console.log(cars); //Output ['Bmw', 'Mercedes', 'Toyota', 'Lexus', 'Honda'] ამატებს ელემენტს ბოლოში

cars.pop();
console.log(cars); //Output ['Bmw', 'Mercedes', 'Toyota', 'Lexus'] შლის ბოლო ელემენტს 

cars.shift();
console.log(cars); //Output ['Mercedes', 'Toyota', 'Lexus']  შლის პირველ ელემენტს

cars.unshift('Lamborghini');
console.log(cars); //Output ['Lamborghini', 'Mercedes', 'Toyota', 'Lexus'] ამატებს ელემენტს თავში

cars[3] = 'Ferrari';
console.log(cars); //Output  ['Lamborghini', 'Mercedes', 'Toyota', 'Ferrari'] ელემენტის ჩანაცვლება

cars.splice(2, 1);
console.log(cars); // Output ['Lamborghini', 'Mercedes', 'Ferrari'] წავშალე პირველი ელემენტი ათვლა დავიწყე მე2 ინდექსიდან


/* loops */
/რა არის ციკლი?/;
// ციკლი არის კონსტრუქცია, რომელიც საშუალებას გვაძლევს
// განვახორციელოთ განმეორებითი ოპერაციები რამდენჯერმე ან სანამ 
// გარკვეული პირობა არ დაკმაყოფილდება.


/რა არის იტერაცია იგივე ბიჯი?/;

/როგორ მუშაობს for ციკლი?/;
// for (ინიციალიზაცია; პირობა; განახლება) {
//   კოდის ბლოკი, რომელიც უნდა შესრულდეს ციკლში
// }

// პირველი შესრულდება ინიციალიზაციის ნაწილი,
// რომელიც გამოიყენება მარყუჟის მრიცხველის ინიციალიზაციისთვის.
// შემდეგ მოწმდება პირობა.თუ პირობა ჭეშმარიტია ციკლის შიგნით კოდის ბლოკი შესრულდება.
// კოდის ბლოკის შესრულების შემდეგ შესრულდება განახლების გამოხატულება,
// რომელიც ჩვეულებრივ გამოიყენება მარყუჟის მრიცხველის მნიშვნელობის შესაცვლელად.
// შემდეგ მდგომარეობა კვლავ შემოწმდება და პროცესი მეორდება მანამ, სანამ მდგომარეობა არ გახდება მცდარი.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//   Output 1 2 3 4 5 
// ამ მაგალითში, i ინიციალიზებულია 1-ზე. i <= 5 პირობა ამოწმებს, რომ i არ არის 5-ზე მეტი.
//  კოდის ბლოკში ჩვენ გამოვიტანთ i-ს მნიშვნელობას და შემდეგ ვამატებთ მას 1-ით i++-ის გამოყენებით.
//  პროცესი მეორდება მანამ, სანამ i არ აღემატება 5-ს.

/როგორ მუშაობს while ციკლი?/;
// while loop გამოიყენება კოდის ბლოკის გასამეორებლად, სანამ გარკვეული პირობა მართალია.

// while (პირობა) {
//   შესასრულებელი კოდი
// }

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }
//  Output 0 1 2 3 4


/როგორ მუშაობს do while ციკლი?/;

// do-while ციკლი ახორციელებს მითითებულ კოდის ბლოკს ერთხელ და შემდეგ ამოწმებს პირობას.
//  თუ პირობა დაკმაყოფილებულია, მაშინ კოდის ბლოკი კვლავ შესრულდება. ეს პროცესი გრძელდება მანამ, სანამ მდგომარეობა არ გახდება მცდარი.

// do {
//   // შესასრულებელი კოდის ბლოკი
// } while (პირობა);

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
// Output 0 1 2 3 4

/რა სხვაობაა [break -ს და continue -ს] შორის?/;

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
} // for იმუშავებს i = 0-დან i = 4-მდე და როცა i გახდება 5, ციკლი გაჩერდება (break)

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
} // Output 0 1 3 4    continue-ს შემთხვევაში for ციკლი იმუშავებს i = 0-დან i = 4-მდე, მაგრამ როდესაც i გახდება 2-ის ტოლი,
// მიმდინარე იტერაცია გამოტოვებული იქნება და პროგრამა გადავა შემდეგ იტერაციაზე.

// continue და break შორის მთავარი განსხვავება ისაა,
// რომ break მთლიანად აჩერებს ციკლის შესრულებას,
// ხოლო continue გამოტოვებს მხოლოდ მიმდინარე იტერაციას და გადადის შემდეგზე.



/* functions */
/რა არის ფუნქცია და როგორ მუშაობს ის?/;

/რა არის ფუნქციის ტანი (function body)?/;

/რას ნიშნავს ფუნქციის განსაზღვრა (definition)?/;

/რა არის ფუნქციის გამოძახება (call, invoke)?/;

/რა არის პარამეტრები?/;

/რა არის default პარამეტრი?/;

/რა უნდა გავითვალისწინოთ default პარამეტრის გამოყენებისას?/;

/რას ნიშნაბს ფუნქციის დასაბრუნებელი მნიშვნელობა (return value)?/;

/ახსენით ხილვადობები (local scope vs global)/;

/რა არის shadowing?/;

/რა არის რეკურსია?/;


/* objects */

/რა არის ობიექტი (object)?/;

/არის თუ არა object-ი მონაცემთა სტრუქტურა?/;

/რა არის properties?/;

/რა არის მეთოდი და რითი განსხვავდება ფუნქციისგან?/;

/როგორ მუშაობს this?/;