var calculateTax = function () {
  //   var inc = parseFloat(
  //     document.getElementById("income").value.split(",").join("")
  //   );

  var arr = document.getElementsByClassName("amount");
  var totalIncome = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].value) > 0) {
      totalIncome += parseFloat(arr[i].value);
    } else if (parseFloat(arr[i].value) <= 0) {
      alert("Income must be greater than 0");
    } else if (typeof parseFloat(arr[i].value) != "float") {
      alert("Income must be number");
    }
  }
  document.getElementById("totalIncome").innerText = totalIncome;

  var taxRate = 0;
  if (totalIncome > 5000000) {
    taxRate = 35;
  } else if (totalIncome > 2000000) {
    taxRate = 30;
  } else if (totalIncome > 1000000) {
    taxRate = 25;
  } else if (totalIncome > 750000) {
    taxRate = 20;
  } else if (totalIncome > 500000) {
    taxRate = 15;
  } else if (totalIncome > 300000) {
    taxRate = 10;
  } else if (totalIncome > 150000) {
    taxRate = 5;
  } else {
    taxRate = 0;
  }

  var taxInc = totalIncome * (taxRate / 100);
  document.getElementById("taxRate").innerText = taxRate;
  document.getElementById("taxIncome").innerText = taxInc;
};

window.onload = function () {
  document.getElementById("calculate").onclick = calculateTax;
};
