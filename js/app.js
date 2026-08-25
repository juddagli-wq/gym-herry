const $ = (sel, el = document) => el.querySelector(sel);
const screens = $("#screens");
const modal = $("#modal");
const titleEl = $("#title");
const subEl = $("#subtitle");

const state = {
  view: "home",
  groupId: null,
  exId: null,
  queue: [],
  qIndex: 0,
  doneSets: {},
  restLeft: 0,
  restTimer: 0
};

const weights = JSON.parse(localStorage.getItem("herry-weights") || "{}");

function groupById(id) {
  return GYM.GROUPS.find((g) => g.id === id);
}
function exById(id) {
  return GYM.EXERCISES.find((e) => e.id === id);
}
function inGroup(id) {
  return GYM.EXERCISES.filter((e) => e.group === id).sort((a, b) => a.no - b.no);
}
function repsLabel(ex) {
  return ex.reps === "max" ? `${ex.sets} x max` : `${ex.sets} x ${ex.reps}`;
}

function setHeader(title, sub, chip) {
  titleEl.textContent = title;
  subEl.textContent = sub;
  $("#count-chip").textContent = chip;
}

function stopMini() {
  GYM.Figure.stop();
}

function render() {
  stopMini();
  document.querySelectorAll(".nav button").forEach((b) => {
    const tab = state.view === "live" ? "live"
      : (state.view === "groups" || state.view === "list" || state.view === "detail") ? "groups"
      : "home";
    b.classList.toggle("on", b.dataset.go === tab);
  });
  if (state.view === "home") renderHome();
  else if (state.view === "groups") renderGroups();
  else if (state.view === "list") renderList();
  else if (state.view === "detail") renderDetail();
  else if (state.view === "live") renderLive();
}

function renderHome() {
  setHeader("Herry Gym", "Kağıttaki işaretli program", `${GYM.EXERCISES.length} hareket`);
  screens.innerHTML = `
    <div class="hero">
      <div>Isınma + 8–10 sn gerilme, sonra işaretli setler.</div>
      <div class="hint">Kardio: haftada en az 3 gün, 15–20 dk, nabız %60–80.</div>
    </div>
    <div class="section-title">Antrenman günleri</div>
    <div class="days">
      ${GYM.DAYS.map((d) => `
        <button class="day" data-day="${d.id}">
          <div>
            <b>${d.name}</b>
            <span>${d.subtitle}</span>
            <span class="day-moves">${(d.exercises || []).map((id) => exById(id).nameTr || exById(id).name).join(" · ")}</span>
          </div>
          <span class="chip">Başla</span>
        </button>
      `).join("")}
    </div>
    <div class="section-title">Tüm program</div>
    <button class="primary" id="all-day" style="width:100%">23 hareketi sırayla çalış</button>
  `;
  screens.querySelectorAll("[data-day]").forEach((btn) => {
    btn.onclick = () => startDay(btn.dataset.day);
  });
  $("#all-day").onclick = () => startQueue(GYM.EXERCISES.map((e) => e.id));
}

function renderGroups() {
  setHeader("Kas grupları", "Sadece işaretlediklerin", "7 grup");
  screens.innerHTML = `<div class="groups">
    ${GYM.GROUPS.map((g) => {
      const n = inGroup(g.id).length;
      return `<button class="group" data-g="${g.id}">
        <div style="display:flex;gap:12px;align-items:center">
          <div class="dot" style="--c:${g.color}">${g.emoji}</div>
          <div><b>${g.title}</b><span>${n} hareket</span></div>
        </div>
        <span>›</span>
      </button>`;
    }).join("")}
  </div>`;
  screens.querySelectorAll("[data-g]").forEach((b) => {
    b.onclick = () => {
      state.groupId = b.dataset.g;
      state.view = "list";
      render();
    };
  });
}

function renderList() {
  const g = groupById(state.groupId);
  const list = inGroup(state.groupId);
  setHeader(g.title, "İşaretli sıra", `${list.length} hareket`);
  screens.innerHTML = `
    <button class="back">‹ Kaslar</button>
    ${list.map(cardHtml).join("")}
    <button class="primary" id="start-g" style="width:100%;margin-top:8px">Bu grubu çalış</button>
  `;
  $(".back").onclick = () => { state.view = "groups"; render(); };
  bindCards();
  $("#start-g").onclick = () => startQueue(list.map((e) => e.id));
}

function cardHtml(ex) {
  return `<button class="ex-card" data-ex="${ex.id}">
    <div class="mini"><img src="${ex.gif}" alt=""></div>
    <div>
      <b>${ex.no}. ${ex.name}</b><br>
      <small>${ex.nameTr}</small>
    </div>
    <div class="sets">${repsLabel(ex)}</div>
  </button>`;
}

function bindCards() {
  screens.querySelectorAll("[data-ex]").forEach((b) => {
    b.onclick = () => {
      state.exId = b.dataset.ex;
      state.view = "detail";
      render();
    };
  });
}

function renderDetail() {
  const ex = exById(state.exId);
  const g = groupById(ex.group);
  setHeader(ex.name, ex.nameTr, repsLabel(ex));
  screens.innerHTML = `
    <button class="back">‹ ${g.title}</button>
    <div class="stage">
      <img class="move-gif" src="${ex.gif}" alt="${ex.name}">
      <div class="caption">Gerçek hareket animasyonu</div>
    </div>
    <div id="muscles" class="muscle-panel"></div>
    <button class="video-btn" id="yt">▶ Nasıl yapıldığını videoda izle</button>
    <div class="kg-box">
      <span>Ağırlık (kg)</span>
      <input id="kg" type="number" inputmode="decimal" placeholder="—" value="${weights[ex.id] || ""}">
      <small style="color:var(--muted)">1. ay kaydı</small>
    </div>
    <div class="section-title">Nasıl yapılır</div>
    <div class="steps">
      ${ex.steps.map((s, i) => `<div class="step"><b>${i + 1}</b>${s}</div>`).join("")}
    </div>
    <div class="row">
      <button class="ghost" id="only">Sadece bunu çalış</button>
      <button class="primary" id="go">Antrenmana ekle</button>
    </div>
  `;
  $(".back").onclick = () => { state.view = "list"; render(); };
  GYM.renderMuscles($("#muscles"), ex.primary, ex.secondary);
  $("#yt").onclick = () => openVideo(ex);
  $("#kg").onchange = (e) => {
    weights[ex.id] = e.target.value;
    localStorage.setItem("herry-weights", JSON.stringify(weights));
  };
  $("#only").onclick = () => startQueue([ex.id]);
  $("#go").onclick = () => {
    const rest = inGroup(ex.group).map((x) => x.id);
    startQueue(rest, rest.indexOf(ex.id));
  };
}

function startDay(id) {
  const day = GYM.DAYS.find((d) => d.id === id);
  const ids = day.exercises || day.groups.flatMap((g) => inGroup(g).map((e) => e.id));
  startQueue(ids);
}

function startQueue(ids, at = 0) {
  state.queue = ids;
  state.qIndex = at;
  state.doneSets = {};
  ids.forEach((id) => { state.doneSets[id] = 0; });
  stopRest();
  state.view = "live";
  render();
}

function renderLive() {
  if (!state.queue.length) {
    setHeader("Antrenman", "Bir gün seç", "—");
    screens.innerHTML = `
      <div class="hero">Önce Program’dan Gün A / B / C seç, ya da bir kas grubunu çalış.</div>
      <button class="primary" id="to-home" style="width:100%">Programa dön</button>
    `;
    $("#to-home").onclick = () => { state.view = "home"; render(); };
    return;
  }
  const ex = exById(state.queue[state.qIndex]);
  const done = state.doneSets[ex.id] || 0;
  const pct = Math.round(((state.qIndex + done / ex.sets) / state.queue.length) * 100);
  setHeader(ex.name, `${state.qIndex + 1} / ${state.queue.length} • ${ex.nameTr}`, repsLabel(ex));
  const resting = state.restLeft > 0;
  screens.innerHTML = `
    <div class="progress"><div class="bar" style="width:${pct}%"></div></div>
    <div class="live-top">
      <small style="color:var(--muted)">${groupById(ex.group).title}</small>
      <small style="color:var(--muted)">${done}/${ex.sets} set</small>
    </div>
    <div class="stage">
      <img class="move-gif" src="${ex.gif}" alt="${ex.name}">
      <div class="caption">${resting ? "Dinlenme" : "Hareketi ve çalışan kası izle"}</div>
    </div>
    <div id="muscles" class="muscle-panel compact"></div>
    ${resting ? `<div class="timer" id="clock">${state.restLeft}s</div>` : ""}
    <div class="pips">
      ${Array.from({ length: ex.sets }, (_, i) => `<button class="pip ${i < done ? "done" : ""}" data-set="${i}">${i + 1}</button>`).join("")}
    </div>
    <div class="row">
      <button class="ghost" id="yt">Video</button>
      <button class="primary" id="set">${resting ? "Dinlenmeyi atla" : done >= ex.sets ? "Sonraki hareket" : `Seti bitir (${ex.reps === "max" ? "max" : ex.reps + " tekrar"})`}</button>
    </div>
    <div class="row" style="margin-top:8px">
      <button class="ghost" id="prev">Önceki</button>
      <button class="ghost" id="skip">Atla</button>
    </div>
  `;
  GYM.renderMuscles($("#muscles"), ex.primary, ex.secondary);
  $("#yt").onclick = () => openVideo(ex);
  $("#set").onclick = () => {
    if (state.restLeft > 0) { stopRest(); renderLive(); return; }
    if (done >= ex.sets) { nextEx(); return; }
    completeSet(ex);
  };
  $("#prev").onclick = () => {
    state.qIndex = Math.max(0, state.qIndex - 1);
    stopRest();
    renderLive();
  };
  $("#skip").onclick = () => nextEx();
  screens.querySelectorAll("[data-set]").forEach((b) => {
    b.onclick = () => {
      state.doneSets[ex.id] = Number(b.dataset.set) + 1;
      renderLive();
    };
  });
}

function completeSet(ex) {
  state.doneSets[ex.id] = (state.doneSets[ex.id] || 0) + 1;
  try { navigator.vibrate?.(30); } catch {}
  if (state.doneSets[ex.id] >= ex.sets) {
    stopRest();
    if (state.qIndex >= state.queue.length - 1) {
      screens.innerHTML = `<div class="hero"><b>Bitti.</b> İşaretli hareketlerin bu bloğu tamam. Yarın diğer gün.</div>
        <button class="primary" id="done-home" style="width:100%">Kapat</button>`;
      $("#done-home").onclick = () => { state.queue = []; state.view = "home"; render(); };
      return;
    }
    renderLive();
    return;
  }
  startRest(ex.rest);
  renderLive();
}

function nextEx() {
  stopRest();
  state.qIndex = Math.min(state.queue.length - 1, state.qIndex + 1);
  renderLive();
}

function startRest(sec) {
  stopRest();
  state.restLeft = sec;
  state.restTimer = setInterval(() => {
    state.restLeft -= 1;
    const clock = $("#clock");
    if (clock) clock.textContent = `${state.restLeft}s`;
    if (state.restLeft <= 0) {
      stopRest();
      renderLive();
      try { navigator.vibrate?.([40, 60, 40]); } catch {}
    }
  }, 1000);
}

function stopRest() {
  clearInterval(state.restTimer);
  state.restLeft = 0;
}

function openVideo(ex) {
  modal.classList.remove("hidden");
  modal.innerHTML = `
    <div class="sheet">
      <header>
        <b>${ex.name}</b>
        <button class="chip" id="close-v">Kapat</button>
      </header>
      <div class="frame">
        <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
          src="https://www.youtube-nocookie.com/embed/${ex.youtube}?rel=0&modestbranding=1"></iframe>
      </div>
      <div style="padding:12px 14px 18px">
        <a class="ghost" style="display:block;text-align:center;text-decoration:none;padding:12px"
           href="https://www.youtube.com/results?search_query=${encodeURIComponent(ex.query)}"
           target="_blank" rel="noopener">YouTube’da başka video ara</a>
      </div>
    </div>`;
  $("#close-v").onclick = closeVideo;
  modal.onclick = (e) => { if (e.target === modal) closeVideo(); };
}

function closeVideo() {
  modal.classList.add("hidden");
  modal.innerHTML = "";
}

document.querySelectorAll(".nav button").forEach((b) => {
  b.onclick = () => {
    closeVideo();
    state.view = b.dataset.go;
    render();
  };
});

function setupDesktopQr() {
  const u = new URL(location.href.split("#")[0]);
  if (u.hostname === "localhost" || u.hostname === "127.0.0.1") {
    u.hostname = "192.168.1.102";
  }
  const url = u.toString();
  const img = $("#qr");
  const label = $("#lan-url");
  if (!img) return;
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`;
  if (label) label.textContent = url;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js", { scope: "/gym-herry/", updateViaCache: "none" }).catch(() => {});
}

function applyHash() {
  const h = location.hash.replace(/^#/, "");
  if (h.startsWith("detail/")) {
    const id = h.slice(7);
    const ex = exById(id);
    if (ex) {
      state.exId = id;
      state.groupId = ex.group;
      state.view = "detail";
    }
  } else if (h.startsWith("list/")) {
    state.groupId = h.slice(5);
    state.view = "list";
  } else if (h === "groups" || h === "live" || h === "home") {
    state.view = h;
  }
}

setupDesktopQr();
applyHash();
window.addEventListener("hashchange", () => { applyHash(); render(); });
render();
setupPwaInstall();

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches
    || window.navigator.standalone === true;
}

function setupPwaInstall() {
  const pop = $("#pwa-pop");
  const btn = $("#pwa-install");
  const later = $("#pwa-later");
  const ios = $("#pwa-ios");
  const andr = $("#pwa-android");
  if (!pop || isStandalone() || sessionStorage.getItem("herry-pwa-skip")) return;

  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(ua);
  let deferred = null;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferred = e;
    ios.classList.add("hidden");
    andr.classList.add("hidden");
    btn.classList.remove("hidden");
    btn.textContent = "Uygulamayı yükle";
    pop.classList.remove("hidden");
  });

  window.addEventListener("appinstalled", () => {
    pop.classList.add("hidden");
  });

  btn.classList.remove("hidden");
  if (isIOS) {
    ios.classList.remove("hidden");
    andr.classList.add("hidden");
    btn.classList.add("hidden");
  } else if (isAndroid) {
    ios.classList.add("hidden");
    andr.classList.add("hidden");
  } else {
    ios.classList.add("hidden");
    andr.classList.add("hidden");
  }
  pop.classList.remove("hidden");

  btn.onclick = async () => {
    if (deferred) {
      deferred.prompt();
      const choice = await deferred.userChoice;
      deferred = null;
      if (choice.outcome === "accepted") pop.classList.add("hidden");
      return;
    }
    if (isIOS) {
      ios.classList.remove("hidden");
      return;
    }
    andr.classList.remove("hidden");
  };

  later.onclick = () => {
    sessionStorage.setItem("herry-pwa-skip", "1");
    pop.classList.add("hidden");
  };
}
