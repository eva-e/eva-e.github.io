function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp.value);
  const body = document.querySelector("body");
  const outer = document.querySelector("outer");

  if (myTemp.value < 10) {
    console.log("It is freezing");
    body.style.backgroundColor = "pink";
    outer.style.backgroundColor = "green";
  } else if (myTemp.value >= 10 && myTemp.value < 20) {
    console.log("It is pleasant weather");
    body.style.backgroundColor = "green";
    outer.style.backgroundColor = "pink";
  } else if (myTemp.value >= 20 && myTemp.value < 30) {
    console.log("It is nice and sunny");
    body.style.backgroundColor = "cream";
  } else if (myTemp.value >= 30) {
    console.log("It is burning hot");
    body.style.backgroundColor = "lime";
  }
}
