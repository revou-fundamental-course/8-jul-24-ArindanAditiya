document.getElementById("hitungBMI").addEventListener("click", () => {
  const beratBadan = parseFloat(document.getElementById("berat").value);
  const tinggiBadanCm = parseFloat(document.getElementById("tinggi").value);
  const tinggiBadanM = tinggiBadanCm / 100;

  if (isNaN(beratBadan) || isNaN(tinggiBadanM) || tinggiBadanM === 0) {
    alert("Mohon masukkan nilai berat badan dan tinggi badan yang valid.");
    return;
  }

  const bmi = beratBadan / (tinggiBadanM * tinggiBadanM);
  let status = "";

  console.log(typeof bmi);

  if (bmi < 18.5) {
    status = "Kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal (ideal)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Kelebihan berat badan";
  } else {
    status = "Kegemukan (Obesitas)";
  }

  console.log(status);

  document.getElementById("output1").innerText = "BMI Anda: " + bmi.toFixed(1);
  document.getElementById("beratHasil").innerText = beratBadan;
  document.getElementById("output2").innerText = "Status: " + status;

  const pesan = `Halo, saya ingin konsultasi dengan dokter mengenai hasil BMI saya. BMI saya adalah ${bmi.toFixed(1)} (${status}).`;
  const pesanTerenkode = encodeURIComponent(pesan);
  const waUrl = "https://wa.me/6285221978481?text=" + pesanTerenkode;
  document.querySelector(".sosmed.wa").href = waUrl;

  console.log(pesan);
});
