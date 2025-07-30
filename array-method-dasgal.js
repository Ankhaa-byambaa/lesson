let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 9,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 8,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3000000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getDiscountedProducts(products) {
  let ene = products.isDiscounted;
  let result = products.filter((products) => {
    return products.isDiscounted === true;
  });
  return result;
}
console.log("dasgal 1=", getDiscountedProducts(data));

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  let filtered = products.filter((product) => {
    return (product.stock = 0);
  });
  return filtered;
}
console.log("dasgal 2 = ", getOutOfStockProducts(data));

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getExpensiveProducts(products) {
  let filtered = products.filter((product) => {
    return product.price > 1000000;
  });
  return filtered;
}
console.log("dasgal 3 = ", getExpensiveProducts(data));

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getComputers(products) {
  let filtered = products.filter((product) => {
    return product.category === "Computers";
  });
  return filtered;
}
console.log("dasgal 4 = ", getComputers(data));

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
function filterByBrand(products, brandName) {
  let name = "Apple";
  let filtered = products.filter((product) => {
    return product.brand === name;
  });
  return filtered;
}
console.log("dasgal 5 = ", filterByBrand(data));

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
function addIsHeavyFlag(products) {
  let filtered = products.filter((product) => {
    if (product.weight > 1) {
      return (product.IsHeavy = "true");
    } else {
      return (product.IsHeavy = "false");
    }
  });
  return filtered;
}
console.log("dasgal 6 = ", addIsHeavyFlag(data));

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
function increasePriceByTenPercent(products) {
  let dicountPercent = 10;
  let num = 0;
  let filtered = products.filter((product) => {
    num = product.price / dicountPercent;
    return (product.price += num);
  });
  return filtered;
}
console.log("dasgal 7 = ", increasePriceByTenPercent(data));

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
function addFinalPrice(products) {
  let price = products.discountPercent;
  let result = products.filter((product) => {
    return (product.FinalPrice = product.price * product.discountPercent);
  });
  return result;
}
console.log("dasgal 8 = ", addFinalPrice(data));

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
function getTopRatedProduct(products) {
  let max = products[0];
  for (i = 0; i < products.length; i++) {
    if (max.rating < products[i].rating) {
      max = products[i];
    }
  }
  return max;
}
console.log("dasgal 9 = ", getTopRatedProduct(data));

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
function getCheapestProduct(products) {
  let min = products[0];
  for (i = 0; i < products.length; i++) {
    if (min.rating > products[i].rating) {
      min = products[i];
    }
  }
  return min;
}
console.log("dasgal 10 =", getCheapestProduct(data));
// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
  let totalStock = 0;
  for (i = 0; i < products.length; i++) {
    totalStock = totalStock + products[i].stock;
  }
  return totalStock;
}
console.log("dasgal11=", getTotalStock(data));

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
function getTotalPrice(products) {
  let totalPrice = 0;
  for (i = 0; i < products.length; i++) {
    totalPrice = totalPrice + products[i].price;
  }
  return totalPrice;
}
console.log("dasgal12=", getTotalPrice(data));

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
function filterBySupplier(products, supplierName) {
  let name = "Unitel";
  let filtered = products.filter((product) => {
    return product.supplier === name;
  });
  return filtered;
}
console.log("dasgal13=", filterBySupplier(data));

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
function getProductNames(products) {
  let map = products.map((product) => {
    return { name: product.name };
  });
  return map;
}
console.log("dasgal14=", getProductNames(data));

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  let sort = products.sort((product2, product1) => {
    return product2.price - product1.price;
  });
  return sort;
}
console.log("dasgal15=", sortByPriceAscending(data));

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
  let result = products.filter((product) => {
    return product.stock <= 5;
  });
  return result;
}
console.log("dasgal16=", getLowStockProducts(data));

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  let filtered = products.map((product) => {
    return product.supplier;
  });
  return filtered;
}
console.log("dasgal17=", getUniqueSuppliers(data));

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  let map = products.map((product) => {
    return {
      name: product.name,
      price: product.price,
    };
  });
  return map;
}
console.log("dasgal18=", getNameAndPriceList(data));

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  let result = products.filter((products) => {
    return products.rating > 4.5;
  });
  return result;
}
console.log(" dasgal19 =", getHighlyRatedProducts(data));

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
function addIdToProducts(products) {
  let map = products.map((product, index) => {
    // const id = Math.random();-random too awna
    //index ugsun bol 0 -ees ehelne
    return {
      ...product,
      id: index + 1,
    };
  });
  return map;
}
console.log("dsagal 20 =", addIdToProducts(data));
