function calculate() {

  // 🔹 قراءة القيم
  let et0 = parseFloat(document.querySelector('[placeholder="ET0 (mm/day)"]').value);
  let kc = parseFloat(document.querySelector('[placeholder="Kc"]').value);
  let area = parseFloat(document.querySelector('[placeholder="Area (m²)"]').value);
  let hours = parseFloat(document.querySelector('[placeholder="Operating Hours/day"]').value);

  // 🔴 تحقق من المدخلات
  if (!et0 || !kc || !area || !hours) {
    alert("⚠️ Please fill all required inputs");
    return;
  }

  // 🔹 الحسابات
  let etc = et0 * kc;

  let volume = (etc * area) / 1000; // m³/day

  let flow = volume / hours; // m³/hr

  // 🔹 عرض النتائج
  document.querySelectorAll(".box span")[0].innerText = flow.toFixed(2);

}
