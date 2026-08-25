window.GYM = window.GYM || {};

GYM.MUSCLE_TR = {
  chest: "Göğüs",
  deltoids: "Omuz",
  triceps: "Arka kol",
  biceps: "Ön kol",
  "upper-back": "Sırt / kanat",
  abs: "Karın",
  obliques: "Yan karın",
  quadriceps: "Ön bacak",
  hamstring: "Arka bacak",
  gluteal: "Kalça",
  adductors: "İç bacak",
  forearm: "Ön kol alt",
  trapezius: "Trapez",
  "lower-back": "Bel",
  calves: "Baldır",
  neck: "Boyun"
};

GYM.MUSCLE_FROM_API = {
  pectorals: "chest",
  chest: "chest",
  delts: "deltoids",
  deltoids: "deltoids",
  shoulders: "deltoids",
  triceps: "triceps",
  biceps: "biceps",
  lats: "upper-back",
  "upper back": "upper-back",
  rhomboids: "upper-back",
  abs: "abs",
  obliques: "obliques",
  quadriceps: "quadriceps",
  hamstrings: "hamstring",
  glutes: "gluteal",
  abductors: "gluteal",
  adductors: "adductors",
  forearms: "forearm",
  traps: "trapezius",
  "lower back": "lower-back",
  spine: "lower-back",
  "hip flexors": "abs",
  calves: "calves"
};

GYM.slugs = function (names) {
  return [...new Set((names || []).map((n) => GYM.MUSCLE_FROM_API[String(n).toLowerCase()]).filter(Boolean))];
};

GYM.renderMuscles = function (el, primaryNames, secondaryNames) {
  const primary = GYM.slugs(primaryNames);
  const secondary = GYM.slugs(secondaryNames).filter((s) => !primary.includes(s));
  el.innerHTML = `
    <div class="body-maps">
      ${mapSvg("front", primary, secondary)}
      ${mapSvg("back", primary, secondary)}
    </div>
    <div class="muscle-legend">
      ${primary.map((s) => `<span class="pill hot">${GYM.MUSCLE_TR[s] || s}</span>`).join("")}
      ${secondary.map((s) => `<span class="pill warm">${GYM.MUSCLE_TR[s] || s}</span>`).join("")}
    </div>
    <div class="legend-note"><b>Turuncu</b> ana kas · <b>sarı</b> yardımcı kas</div>
  `;
};

function mapSvg(side, primary, secondary) {
  const data = side === "front" ? window.BODY_FRONT : window.BODY_BACK;
  const vb = side === "front" ? "0 0 724 1448" : "724 0 724 1448";
  let paths = "";
  (data || []).forEach((part) => {
    const cls = primary.includes(part.slug) ? "hot" : secondary.includes(part.slug) ? "warm" : "";
    const groups = part.path || {};
    ["common", "left", "right"].forEach((k) => {
      (groups[k] || []).forEach((d) => {
        paths += `<path class="muscle ${cls}" d="${d}"/>`;
      });
    });
  });
  const label = side === "front" ? "Ön" : "Arka";
  return `<div class="body-col"><svg class="body-svg" viewBox="${vb}" aria-hidden="true">${paths}</svg><small>${label}</small></div>`;
}
