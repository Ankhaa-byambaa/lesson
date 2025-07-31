const carListDiv = document.getElementById("carList");

cars.map((car) => {
  const mainDiv = document.createElement("div");
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

  mileage.className = "carMileage";
  supplier.className = "carSupplier";
  year.className = "carYear";
  fuelEfficiency.className = "carFuelEfficiency";
  price.className = "carPrice";
  mainDiv.className = "card";
  pTag.className = "carName";
  colorPTag.className = "carColor";
  image.className = "image";

  mileage.innerText = car.mileage;
  image.iinerHTML = car.image;
  price.innerText = "price :" + car.price;
  supplier.innerText = car.supplier;
  pTag.innerText = car.model;
  year.innerTex = car.year;
  colorPTag.innerText = car.color;
  fuelEfficiency.innerText = car.fuelEfficiency;

  mainDiv.appendChild(image);
  mainDiv.appendChild(pTag);
  mainDiv.appendChild(colorPTag);
  carListDiv.appendChild(mainDiv);
});
