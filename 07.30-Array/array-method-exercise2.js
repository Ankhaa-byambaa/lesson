let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(arr) {
  let filtered = arr.map((car) => {
    return car.isAvailable === true;
  });
  return filtered;
}
console.log("exercise 1 = ", getAvailableCars(cars));

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(arr) {
  let result = arr.filter((car) => {
    return car.year >= 2018;
  });
  return result;
}
console.log("exercise 2 = ", getRecentCars(cars));

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(arr) {
  let result = arr.filter((car) => {
    return car.price >= 5000000;
  });
  return result;
}
console.log("exercise 3 = ", getExpensiveCars(cars));
// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(arr) {
  let result = arr.filter((car) => {
    return car.type === "Sedan";
  });
  return result;
}
console.log("exercise 4 = ", getSedans(cars));

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brandName) {
  let Name = "Toyota";
  let result = cars.filter((car) => {
    return car.brand === Name;
  });
  return result;
}
console.log("Exercise 5 = ", filterByBrand(cars));

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  let result = cars.filter((car) => {
    return car.mileage > 100000;
  });
  return result;
}
console.log("Exercise 6 = ", getHighMileageCars(cars));

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  let result = cars.filter((car) => {
    if (car.fuelEfficiency <= 5.0) {
      return car && (car.efficient = false);
    } else {
      return car && (car.efficient = true);
    }
  });
  return result;
}
console.log("Exercise 7 = ", addEfficiencyFlag(cars));
// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(arr) {
  let percent = 15;
  let num = 0;
  let map = arr.filter((car) => {
    num = car.price / percent;
    return (car.price += num);
  });
  return map;
}
console.log("Exercise 8 = ", increaseCarPrices(cars));

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let result = cars.filter((car) => {
    return car.mileage < 500000;
  });
  return result;
}
console.log("Exercise 9 = ", getLowMileageCars(cars));

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars) {
  let name = "CityMotors";
  let result = cars.filter((car) => {
    if (car.supplier === name) {
      return car;
    }
  });
  return result;
}
console.log("Exercise 13 = ", filterBySupplier(cars));

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  let result = cars.filter((car) => {
    return {
      model: car.model,
    };
  });
  return result;
}
console.log("exercise 14 = ", getCarModels(cars));

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  let result = cars.sort((price2, price1) => {
    return price1.price - price2.price;
  });
  return result;
}
console.log("exercise 15 = ", sortByPriceAscending(cars));

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let result = cars.filter((car) => {
    return car.engineSize > 2.0;
  });
  return result;
}
console.log("exercise 16 = ", getLargeEngineCars(cars));

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  let result = cars;
}

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  let filtered = cars.filter((car) => {
    return (
      car.fuelEfficiency <= 4.0 && (car.fuelEfficiency = "super efficient")
    );
  });
  return filtered;
}
console.log("exercise 19 = ", tagSuperEfficientCars(cars));

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  let result = cars.map((car, index) => {
    return {
      ...car,
      id: index + 1,
    };
  });
  return result;
}
console.log("Erxecise 20 = ", addIdToCars(cars));

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  let arrBrand = cars.map((car) => {
    return car.brand;
  });
  let uniqueBrandName = [];
  arrBrand.forEach((brand) => {
    if (uniqueBrandName.includes(brand) === cars.brand) {
    } else {
      uniqueBrandName.push(brand);
    }
  });
  return uniqueBrandName;
}
console.log("Exercise 17 = ", getUniqueBrands(cars));

//--------------------------------------------------------------------------------------
// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  let min = cars.fuelEfficiency;
  for (i = 0; i < cars.length; i++) {
    if (min > cars[i].fuelEfficiency) {
      min = cars[i].fuelEfficiency;
    }
  }
  return min;
}

console.log("Exercise 10 = ", getMostEfficientCar(cars));

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  let max = cars[0];
  for (i = 0; i < cars.length; i++) {
    if (max < cars[i].price) {
      max = cars[i].price;
    }
  }
  return max;
}
console.log("Exercise 11 = ", getMostExpensiveCar(cars));

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.

function getTotalMileage(cars) {
  let sum = 0;
  cars.forEach((car) => {
    sum += car.mileage;
  });

  return sum;
}
console.log("exrecise 12 =", getTotalMileage(cars));
