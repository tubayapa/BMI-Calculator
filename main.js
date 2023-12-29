function calc() {
  let bmi;
  let result = document.getElementById("result");
  let category = document.getElementById("category");

  let weight = parseInt(document.getElementById("weight").value);
  document.getElementById("weVal").textContent = weight + "kg";

  let height = parseInt(document.getElementById("height").value);
  document.getElementById("heVal").textContent = height + "cm";

  bmi = (weight / Math.pow(height / 100, 2)).toFixed();
  result.textContent = bmi;

  if (bmi <= 18.5) {
    category.innerHTML = "Underweight";
    result.style.color = "orange";
  } else if (bmi >= 18.5 && bmi <= 24.0) {
    category.innerHTML = "Normal";
    result.style.color = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category.innerHTML = "Overweight";
    result.style.color = "brown";
  } else if (bmi >= 30) {
    category.innerHTML = "Obese";
    result.style.color = "red";
  }
}
