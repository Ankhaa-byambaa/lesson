// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц
function getAvailableCars(cars) {
  return cars.filter((car) => car.isAvailable);
}

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц
function getRecentCars(cars) {
  return cars.filter((car) => car.year > 2018);
}

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц
function getExpensiveCars(cars) {
  return cars.filter((car) => car.price > 5000000);
}

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц
function getSedans(cars) {
  return cars.filter((car) => car.type === "Sedan");
}

// 5. Брэндээр шүүж буцаадаг функц
function filterByBrand(cars, brandName) {
  return cars.filter((car) => car.brand === brandName);
}

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц
function getHighMileageCars(cars) {
  return cars.filter((car) => car.mileage > 100000);
}

// 7. fuelEfficiency < 5.0 бол efficient: true/false нэмдэг функц
function addEfficiencyFlag(cars) {
  return cars.map((car) => ({
    ...car,
    efficient: car.fuelEfficiency < 5.0,
  }));
}

// 8. Бүх машины үнийг 15% нэмдэг функц
function increaseCarPrices(cars) {
  return cars.map((car) => ({
    ...car,
    price: Math.round(car.price * 1.15),
  }));
}

// 9. 50,000 км-ээс бага явсан машинуудыг буцаадаг функц
function getLowMileageCars(cars) {
  return cars.filter((car) => car.mileage < 50000);
}

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц
function getMostEfficientCar(cars) {
  let result = null;
  cars.forEach(function (car) {
    if (result === null) {
      result = car;
    } else {
      if (car.fuelEfficiency < result.fuelEfficiency) {
        result = car;
      }
    }
  });
  return result;
}

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц
function getMostExpensiveCar(cars) {
  let result = null;
  cars.forEach(function (car) {
    if (result === null) {
      result = car;
    } else {
      if (car.price > result.price) {
        result = car;
      }
    }
  });
  return result;
}

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц
function getTotalMileage(cars) {
  let total = 0;
  cars.forEach(function (car) {
    total = total + car.mileage;
  });
  return total;
}

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц
function filterBySupplier(cars, supplierName) {
  return cars.filter((car) => car.supplier === supplierName);
}

// 14. Машины model нэрсийг массив болгож буцаадаг функц
function getCarModels(cars) {
  return cars.map((car) => car.model);
}

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц
function sortByPriceAscending(cars) {
  return cars.sort((a, b) => a.price - b.price);
}

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц
function getLargeEngineCars(cars) {
  return cars.filter((car) => car.engineSize > 2.0);
}

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц
function getUniqueBrands(cars) {
  let brands = [];
  cars.forEach(function (car) {
    let exists = false;
    brands.forEach(function (brand) {
      if (brand === car.brand) {
        exists = true;
      }
    });
    if (!exists) {
      brands.push(car.brand);
    }
  });
  return brands;
}

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц
function getModelAndYearList(cars) {
  return cars.map((car) => ({
    model: car.model,
    year: car.year,
  }));
}

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц
function tagSuperEfficientCars(cars) {
  return cars.map((car) => ({
    ...car,
    superEfficient: car.fuelEfficiency > 0 && car.fuelEfficiency < 4.0,
  }));
}

// 20. Бүх машинд `id` талбар нэмдэг функц (1-с эхэлнэ)
function addIdToCars(cars) {
  return cars.map((car, index) => ({
    ...car,
    id: index + 1,
  }));
}
