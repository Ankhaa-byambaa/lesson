let ages = [23, 44, 53, 4, 5, 23];
const popppedElement = ages.pop();
console.log(popppedElement);
console.log(ages.push(popppedElement));
//map/filter/sort
//map method ni array iig uuriig ni uurchluh gui
// map = for loop
//map neg function avna ,tuhain function ni bas neg utga awna
//map shine array uusgej ugnu, shine array ni huuchin arrya taigaa ijil urttai bn

//map ymar aarrya uusgehiig return deer oruulah

let age2 = [23, 44, 53, 4, 5, 23];
for (i = 0; i < age2.length; i++) {
  console.log(age2[i]);
}
// ene 2 adil
age2.map((a) => {
  console.log("a=", a);
});

let map = age2.map((age2) => {
  return {
    value: 10 * age2,
  };
});
console.log(map);

//2619. Array Prototype Last
let num = [null, {}, 3, 5, "8"];
let result = num.map((number) => {
  if (number <= 0 && number >= 0 && number === null) {
    return number;
  } else {
    return false;
  }
});
console.log(result);
//2626. Array Reduce Transformation
let number = [2, 3, 44, 5];

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }
/*
let student = [
  { name: "bataa", gender: "male", grade: 69 },
  { name: "bataa", gender: "male", grade: 59 },
  { name: "bataa", gender: "female", grade: 29 },
  { name: "bataa", gender: "male", grade: 9 },
  { name: "bataa", gender: "female", grade: 90 },
];
const findAvarageGrade = (arr) => {
  let malecount = 0;
  let femalecount = 0;
  let maleAvarageGrade = [];
  let femaleAvarageGrade = [];
  let maleStudent = arr[i].male;
  let femaleStudent = arr[i].female;

  for (i = 0; i < arr[i].length; i++) {
    if (maleStudent === arr[i].gender) {
      malecount++;
      maleStudent = maleStudent.grade + arr[i].grade;
      maleAvarageGrade[malecount] = {
        gender: arr[i].gender,
      };
    } else {
      femalecount++;
      femaleAvarageGrade[femalecount] = {
        gender: arr[i].gender,
      };
    }
  }
  return { maleStudent, femaleStudent };
};
console.log(findAvarageGrade(student));*/

//dasgal
