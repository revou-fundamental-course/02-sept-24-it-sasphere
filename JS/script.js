function openPopup(shape, type) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popupTitle");
  const calculatorForm = document.getElementById("calculatorForm");
  const result = document.getElementById("result");

  popupTitle.textContent = `${type} ${shape}`;
  calculatorForm.innerHTML = "";
  result.textContent = "";

  let formHTML = "";

  switch (shape) {
    case "Persegi":
      formHTML = `
          <label for="side">Sisi:</label>
          <input type="number" id="side" required>
        `;
      break;

    case "Persegi Panjang":
      formHTML = `
          <label for="length">Panjang:</label>
          <input type="number" id="length" required>
          <label for="width">Lebar:</label>
          <input type="number" id="width" required>
        `;
      break;

    case "Segitiga":
      if (type === "Luas") {
        formHTML = `
          <label for="base">Alas:</label>
          <input type="number" id="base" required>
          <label for="height">Tinggi:</label>
          <input type="number" id="height" required>
        `;
      } else {
        formHTML = `
          <label for="side1">Sisi 1:</label>
          <input type="number" id="side1" required>
          <label for="side2">Sisi 2:</label>
          <input type="number" id="side2" required>
          <label for="side3">Sisi 3:</label>
          <input type="number" id="side3" required>
        `;
      }
      break;

    case "Lingkaran":
      formHTML = `
          <label for="radius">Jari-jari:</label>
          <input type="number" id="radius" required>
        `;
      break;

    case "Jajar Genjang":
      if (type === "Luas") {
        formHTML = `
          <label for="baseJG">Alas:</label>
          <input type="number" id="baseJG" required>
          <label for="heightJG">Tinggi:</label>
          <input type="number" id="heightJG" required>
        `;
      } else {
        formHTML = `
          <label for="baseJG">Alas:</label>
          <input type="number" id="baseJG" required>
          <label for="sideJG">Sisi Miring:</label>
          <input type="number" id="sideJG" required>
        `;
      }
      break;

    case "Trapesium":
      if (type === "Luas") {
        formHTML = `
          <label for="topSide">Sisi Atas:</label>
          <input type="number" id="topSide" required>
          <label for="bottomSide">Sisi Bawah:</label>
          <input type="number" id="bottomSide" required>
          <label for="heightT">Tinggi:</label>
          <input type="number" id="heightT" required>
        `;
      } else {
        formHTML = `
          <label for="topSide">Sisi Atas:</label>
          <input type="number" id="topSide" required>
          <label for="bottomSide">Sisi Bawah:</label>
          <input type="number" id="bottomSide" required>
          <label for="side1T">Sisi 1:</label>
          <input type="number" id="side1T" required>
          <label for="side2T">Sisi 2:</label>
          <input type="number" id="side2T" required>
        `;
      }
      break;

    case "Belah Ketupat":
      if (type === "Luas") {
        formHTML = `
          <label for="diagonal1">Diagonal 1:</label>
          <input type="number" id="diagonal1" required>
          <label for="diagonal2">Diagonal 2:</label>
          <input type="number" id="diagonal2" required>
        `;
      } else {
        formHTML = `
          <label for="sideBK">Sisi:</label>
          <input type="number" id="sideBK" required>
        `;
      }
      break;

    case "Layang-Layang":
      if (type === "Luas") {
        formHTML = `
          <label for="diagonal1LL">Diagonal 1:</label>
          <input type="number" id="diagonal1LL" required>
          <label for="diagonal2LL">Diagonal 2:</label>
          <input type="number" id="diagonal2LL" required>
        `;
      } else {
        formHTML = `
          <label for="shortSide">Sisi Pendek:</label>
          <input type="number" id="shortSide" required>
          <label for="longSide">Sisi Panjang:</label>
          <input type="number" id="longSide" required>
        `;
      }
      break;
  }

  formHTML += `<button onclick="calculate('${shape}', '${type}')">Hitung ${type}</button>`;
  calculatorForm.innerHTML = formHTML;

  popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

function calculate(shape, type) {
  let resultText = "";
  const result = document.getElementById("result");

  switch (shape) {
    case "Persegi":
      const side = parseFloat(document.getElementById("side").value);
      if (type === "Luas") {
        resultText = `Luas Persegi: ${side * side}`;
      } else {
        resultText = `Keliling Persegi: ${4 * side}`;
      }
      break;

    case "Persegi Panjang":
      const length = parseFloat(document.getElementById("length").value);
      const width = parseFloat(document.getElementById("width").value);
      if (type === "Luas") {
        resultText = `Luas Persegi Panjang: ${length * width}`;
      } else {
        resultText = `Keliling Persegi Panjang: ${2 * (length + width)}`;
      }
      break;

    case "Segitiga":
      if (type === "Luas") {
        const base = parseFloat(document.getElementById("base").value);
        const height = parseFloat(document.getElementById("height").value);
        resultText = `Luas Segitiga: ${(base * height) / 2}`;
      } else {
        const side1 = parseFloat(document.getElementById("side1").value);
        const side2 = parseFloat(document.getElementById("side2").value);
        const side3 = parseFloat(document.getElementById("side3").value);
        resultText = `Keliling Segitiga: ${side1 + side2 + side3}`;
      }
      break;

    case "Lingkaran":
      const radius = parseFloat(document.getElementById("radius").value);
      if (type === "Luas") {
        resultText = `Luas Lingkaran: ${(Math.PI * radius * radius).toFixed(
          2
        )}`;
      } else {
        resultText = `Keliling Lingkaran: ${(2 * Math.PI * radius).toFixed(2)}`;
      }
      break;
    case "Jajar Genjang":
      if (type === "Luas") {
        const baseJG = parseFloat(document.getElementById("baseJG").value);
        const heightJG = parseFloat(document.getElementById("heightJG").value);
        resultText = `Luas Jajar Genjang: ${baseJG * heightJG}`;
      } else {
        const baseJG = parseFloat(document.getElementById("baseJG").value);
        const sideJG = parseFloat(document.getElementById("sideJG").value);
        resultText = `Keliling Jajar Genjang: ${2 * (baseJG + sideJG)}`;
      }
      break;

    case "Trapesium":
      if (type === "Luas") {
        const topSide = parseFloat(document.getElementById("topSide").value);
        const bottomSide = parseFloat(
          document.getElementById("bottomSide").value
        );
        const heightT = parseFloat(document.getElementById("heightT").value);
        resultText = `Luas Trapesium: ${
          ((topSide + bottomSide) * heightT) / 2
        }`;
      } else {
        const topSide = parseFloat(document.getElementById("topSide").value);
        const bottomSide = parseFloat(
          document.getElementById("bottomSide").value
        );
        const side1T = parseFloat(document.getElementById("side1T").value);
        const side2T = parseFloat(document.getElementById("side2T").value);
        resultText = `Keliling Trapesium: ${
          topSide + bottomSide + side1T + side2T
        }`;
      }
      break;

    case "Belah Ketupat":
      if (type === "Luas") {
        const diagonal1 = parseFloat(
          document.getElementById("diagonal1").value
        );
        const diagonal2 = parseFloat(
          document.getElementById("diagonal2").value
        );
        resultText = `Luas Belah Ketupat: ${(diagonal1 * diagonal2) / 2}`;
      } else {
        const sideBK = parseFloat(document.getElementById("sideBK").value);
        resultText = `Keliling Belah Ketupat: ${4 * sideBK}`;
      }
      break;

    case "Layang-Layang":
      if (type === "Luas") {
        const diagonal1LL = parseFloat(
          document.getElementById("diagonal1LL").value
        );
        const diagonal2LL = parseFloat(
          document.getElementById("diagonal2LL").value
        );
        resultText = `Luas Layang-Layang: ${(diagonal1LL * diagonal2LL) / 2}`;
      } else {
        const shortSide = parseFloat(
          document.getElementById("shortSide").value
        );
        const longSide = parseFloat(document.getElementById("longSide").value);
        resultText = `Keliling Layang-Layang: ${2 * (shortSide + longSide)}`;
      }
      break;
  }
  result.textContent = resultText; // Tampilkan hasil
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const shape = e.target.closest(".box").querySelector("h3").textContent;
    const type = e.target.textContent;
    openPopup(shape, type);
  });
});
