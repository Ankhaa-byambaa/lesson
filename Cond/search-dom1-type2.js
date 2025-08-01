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
    image:
      "https://www.google.com/imgres?q=toyota%20prius%20white&imgurl=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2016%2F08%2F01%2Fautomobiles%2Fautoreviews%2Fdriven-prius-three%2Fdriven-prius-three-superJumbo.jpg&imgrefurl=https%3A%2F%2Fwww.nytimes.com%2F2016%2F08%2F05%2Fautomobiles%2Fautoreviews%2Ftoyota-prius-car-review.html&docid=tbrs5fjgcEzQ8M&tbnid=e0w881tKi8uWPM&vet=12ahUKEwiZ8LO6seiOAxUBS3ADHQNPIxcQM3oECC0QAA..i&w=2048&h=1081&hcb=2&ved=2ahUKEwiZ8LO6seiOAxUBS3ADHQNPIxcQM3oECC0QAA",
  },
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "blue",
    supplier: "AutoJapan",
    engineSize: 1.8,
    image:
      "https://www.google.com/imgres?q=toyota%20prius%20white&imgurl=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2016%2F08%2F01%2Fautomobiles%2Fautoreviews%2Fdriven-prius-three%2Fdriven-prius-three-superJumbo.jpg&imgrefurl=https%3A%2F%2Fwww.nytimes.com%2F2016%2F08%2F05%2Fautomobiles%2Fautoreviews%2Ftoyota-prius-car-review.html&docid=tbrs5fjgcEzQ8M&tbnid=e0w881tKi8uWPM&vet=12ahUKEwiZ8LO6seiOAxUBS3ADHQNPIxcQM3oECC0QAA..i&w=2048&h=1081&hcb=2&ved=2ahUKEwiZ8LO6seiOAxUBS3ADHQNPIxcQM3oECC0QAA",
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
    image:
      "https://www.google.com/imgres?q=Honda%20Civic%20blue%5C&imgurl=https%3A%2F%2Fcarzwerk.com%2Fwp-content%2Fuploads%2F2024%2F01%2FHonda-Civic-Blue-Grey.jpg&imgrefurl=https%3A%2F%2Fcarzwerk.com%2Fblue-honda-civic-carzwerk-sf-bay-area%2F&docid=nr-czXUddUwDIM&tbnid=ksPwgqx6iUJGeM&vet=12ahUKEwiyr_DWseiOAxVBe2wGHWByAMgQM3oECCkQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwiyr_DWseiOAxVBe2wGHWByAMgQM3oECCkQAA",
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
    image:
      "https://www.google.com/imgres?q=Tesla%20Model%203red&imgurl=https%3A%2F%2Fwww.theaa.ie%2Fwp-content%2Fuploads%2F2023%2F10%2Fdown-net_http20231017-46207-ue0fri.jpg&imgrefurl=https%3A%2F%2Fwww.theaa.ie%2Fblog%2Fupgraded-tesla-model-3%2F&docid=L2WVaY7N56LSYM&tbnid=9vATNBu7bFiTJM&vet=12ahUKEwiAyI78seiOAxWEWHADHaQuFGMQM3oECB0QAA..i&w=2482&h=1217&hcb=2&ved=2ahUKEwiAyI78seiOAxWEWHADHaQuFGMQM3oECB0QAA",
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
    image:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xQSjEnFj3n-vAFGaJAMJ95EF1Pc_Y77oNw&s",
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
    image:
      "https://www.google.com/imgres?q=Hyundai%20Sonata%20silver%20&imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2F2024-hyundai-sonata-n-line-67575bf5529cc.jpg%3Fcrop%3D0.571xw%3A0.486xh%3B0.212xw%2C0.418xh%26resize%3D2048%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fhyundai%2Fsonata&docid=frchJChQvLbKdM&tbnid=o1Hzz5jTCRzAUM&vet=12ahUKEwiYiJ-MsuiOAxXMVmwGHbqmByMQM3oECDIQAA..i&w=1285&h=729&hcb=2&ved=2ahUKEwiYiJ-MsuiOAxXMVmwGHbqmByMQM3oECDIQAA",
  },
];
// input hiigeed utge hiihed array dotorh objectoos haigaad gargaj ireh
// uugeer niit heden shirheg brand bolon brand tus buriin product hed bgaag haruulna
const findBrand = cars.filter(() => {});

const carListDiv = document.getElementById("carList");

cars.map((car) => {
  const mainDiv = document.createElement("div");
  const introDiv = document.createElement("img");
  const miniDiv = document.createElement("div");
  const miniDiv2 = document.createElement("div");
  const brandDiv = document.createElement("div");
  const imgTag = document.createElement("img");
  const totalBrand = document.createElement("p");
  const pTag = document.createElement("p");
  const colorPTag = document.createElement("p");
  const image = document.createElement("img");
  const price = document.createElement("p");
  const fuelEfficiency = document.createElement("p");
  const year = document.createElement("p");
  const mileage = document.createElement("p");
  const supplier = document.createElement("p");
  const type = document.createElement("p");
  const brand = document.createElement("p");

  introDiv.className = "introDiv";
  brandDiv.className = "brandDiv";
  totalBrand.className = "totalBrand";
  miniDiv2.className = "miniDiv2";
  miniDiv.className = "miniDiv";
  brand.className = "car";
  type.className = "car";
  mileage.className = "car";
  supplier.className = "car";
  year.className = "car";
  fuelEfficiency.className = "car";
  price.className = "carPrice";
  mainDiv.className = "card";
  pTag.className = "car";
  colorPTag.className = "car";
  image.className = "image";

  imgTag.innerHTML = car.image;
  totalBrand.innerText = car.brand + findBrand;
  brand.innerText = "Brand :" + car.brand;
  type.innerText = car.type;
  mileage.innerText = "Mileage :" + car.mileage;
  image.iinerHTML = car.image;
  price.innerText = "price :" + car.price;
  supplier.innerText = "Supplier :" + car.supplier;
  pTag.innerText = "Model :" + car.model;
  year.innerTex = " Year :" + car.year;
  colorPTag.innerText = car.color;
  fuelEfficiency.innerText = "FuelEfficiency :" + car.fuelEfficiency;
  mainDiv.appendChild(imgTag);
  mainDiv.appendChild(introDiv);
  introDiv.appendChild(miniDiv);
  introDiv.appendChild(miniDiv2);
  mainDiv.appendChild(image);
  mainDiv.appendChild(price);
  miniDiv.appendChild(brand);
  mainDiv.appendChild(miniDiv);
  miniDiv.appendChild(pTag);
  miniDiv2.appendChild(type);
  miniDiv2.appendChild(colorPTag);
  miniDiv2.appendChild(year);
  miniDiv2.appendChild(fuelEfficiency);
  miniDiv2.appendChild(mileage);
  miniDiv2.appendChild(supplier);
  mainDiv.appendChild(miniDiv2);
  carListDiv.appendChild(mainDiv);
});
