//array method -07.29-
let data = [
  {
    age: 40,
    name: "dorjoo",
    grade: 10,
    gender: "male",
    balance: 567898,
  },
  {
    age: 2,
    name: "chucka",
    grade: 10,
    gender: "female",
    balance: 56,
  },
  {
    age: 4,
    name: "dulmaa",
    grade: 1,
    gender: "female",
    balance: 567896789,
  },
  {
    age: 9,
    name: "puje",
    grade: 45,
    gender: "male",
    balance: 100,
  },
  {
    age: 6,
    name: "baska",
    grade: 40,
    gender: "male",
    balance: 5,
  },
  {
    age: 21,
    name: "anhaa",
    grade: 70,
    gender: "female",
    balance: 569,
  },
  {
    age: 45,
    name: "purwe",
    grade: 30,
    gender: "female",
    balance: 5679,
  },
  {
    age: 22,
    name: "myga",
    grade: 4,
    gender: "male",
    balance: 56789,
  },
];

//nasand hursen surach oloh filter bich
function findAdultStudent(students) {
  let adult = students.filter((students) => {
    return students.age >= 18;
  });
  return adult;
}
console.log("bodlogo1=", findAdultStudent(data));

//gender ugun guut tuhain gender eer filter dej uguh function bich

function findByGender(student) {
  let gen = "female";
  let filtered = student.filter((student) => {
    return student.gender === gen;
  });
  return filtered;
}

console.log("bodlogo2 =", findByGender(data));
//bodlogo 2.5
function findfilterByGender(student) {
  let gender = "male";
  let filtered = student.filter((student) => {
    return student.gender === gender;
  });
  return filtered;
}
console.log("bodlogo2.5=", findfilterByGender(data));
//bodlogo 3
function findAgeBySort(student) {
  let sort = student.sort((student2, student1) => {
    return student2.age - student1.age;
  });
  return sort;
}
console.log("bodlogo3 =", findAgeBySort(data));
//bodlogo 4
function findichStudent(student) {
  let number = 2000;
  let filtered = student.filter((student) => {
    return student.balance > number;
  });
  return filtered;
}
console.log(" bodlogo4 =", findichStudent(data));
//bodlogo 5
function findAddClassCode(student) {
  let classcode = "3A";
  let map = student.map((student) => {
    return {
      name: student.name,
      classcode: classcode,
      balance: student.balance,
      gender: student.gender,
      age: student.age,
      grade: student.grade,
    };
  });
  return map;
}
console.log(" bodlogo5 =", findAddClassCode(data));

//bodlogo6
function findRemovegender(students) {
  let result = students.map((student) => {
    return {
      name: student.name,
      balance: student.balance,
      age: student.age,
      grade: student.grade,
    };
  });
  return result;
}
console.log(" bodlogo6 =", findRemovegender(data));
