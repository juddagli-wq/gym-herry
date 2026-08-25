window.GYM = window.GYM || {};

GYM.ANIMS = {
  inclinePress: {
    view: "side",
    gear: "incline",
    setup: { body: 48, thigh: 62, shin: -48, upper: 100, fore: 92 },
    from: { upper: 100, fore: 92 },
    to: { upper: 28, fore: 18 }
  },
  inclineFly: {
    view: "front",
    gear: "incline",
    setup: {},
    from: { upperL: -28, upperR: 28, foreL: 22, foreR: 22 },
    to: { upperL: 88, upperR: -88, foreL: 18, foreR: 18 }
  },
  flatPress: {
    view: "side",
    gear: "flat",
    setup: { body: 86, thigh: 50, shin: -38, upper: 102, fore: 88 },
    from: { upper: 102, fore: 88 },
    to: { upper: 22, fore: 14 }
  },
  machinePress: {
    view: "side",
    gear: "seat",
    setup: { body: 6, thigh: 88, shin: -72, upper: 8, fore: 92 },
    from: { upper: 8, fore: 92 },
    to: { upper: -58, fore: 18 }
  },
  shoulderPress: {
    view: "side",
    gear: "seat",
    setup: { body: 0, thigh: 90, shin: -80, upper: 18, fore: 118 },
    from: { upper: 22, fore: 118 },
    to: { upper: -78, fore: 18 }
  },
  lateralRaise: {
    view: "front",
    gear: "floor",
    setup: {},
    from: { upperL: 10, upperR: -10, foreL: 8, foreR: 8 },
    to: { upperL: 92, upperR: -92, foreL: 12, foreR: 12 }
  },
  frontRaise: {
    view: "side",
    gear: "floor",
    setup: { body: 0, thigh: 6, shin: 4, upper: 14, fore: 8 },
    from: { upper: 16, fore: 8 },
    to: { upper: -82, fore: 10 }
  },
  uprightRow: {
    view: "side",
    gear: "floor",
    setup: { body: 0, thigh: 6, shin: 4, upper: 16, fore: 16 },
    from: { upper: 18, fore: 12 },
    to: { upper: -38, fore: 108 }
  },
  latPulldown: {
    view: "side",
    gear: "lat",
    setup: { body: 8, thigh: 90, shin: -80, upper: -78, fore: 16 },
    from: { upper: -78, fore: 16 },
    to: { upper: 18, fore: 98 }
  },
  cableRow: {
    view: "side",
    gear: "row",
    setup: { body: 8, thigh: 88, shin: -68, upper: -18, fore: 12 },
    from: { upper: -16, fore: 10 },
    to: { upper: 22, fore: 102 }
  },
  tbarRow: {
    view: "side",
    gear: "floor",
    setup: { body: 52, thigh: 32, shin: 10, upper: 72, fore: 18 },
    from: { upper: 74, fore: 18 },
    to: { upper: 22, fore: 96 }
  },
  ropeCurl: {
    view: "side",
    gear: "cable",
    setup: { body: 0, thigh: 6, shin: 4, upper: 18, fore: 10 },
    from: { upper: 18, fore: 12 },
    to: { upper: 16, fore: 128 }
  },
  preacherCurl: {
    view: "side",
    gear: "preacher",
    setup: { body: 8, thigh: 90, shin: -76, upper: 52, fore: 16 },
    from: { upper: 52, fore: 14 },
    to: { upper: 52, fore: 126 }
  },
  inclineCurl: {
    view: "side",
    gear: "incline",
    setup: { body: 42, thigh: 68, shin: -48, upper: 96, fore: 14 },
    from: { upper: 96, fore: 12 },
    to: { upper: 96, fore: 128 }
  },
  hammerCurl: {
    view: "side",
    gear: "floor",
    setup: { body: 0, thigh: 6, shin: 4, upper: 16, fore: 10 },
    from: { upper: 16, fore: 12 },
    to: { upper: 12, fore: 124 }
  },
  pushdown: {
    view: "side",
    gear: "cable",
    setup: { body: 8, thigh: 8, shin: 4, upper: 28, fore: 112 },
    from: { upper: 28, fore: 114 },
    to: { upper: 28, fore: 16 }
  },
  closeGrip: {
    view: "side",
    gear: "flat",
    setup: { body: 86, thigh: 50, shin: -38, upper: 102, fore: 94 },
    from: { upper: 102, fore: 94 },
    to: { upper: 22, fore: 16 }
  },
  legExtension: {
    view: "side",
    gear: "seat",
    setup: { body: 0, thigh: 90, shin: -96, upper: 14, fore: 88 },
    from: { shin: -96 },
    to: { shin: -6 }
  },
  legPress: {
    view: "side",
    gear: "press",
    setup: { body: 68, thigh: 48, shin: 62, upper: 90, fore: 88 },
    from: { thigh: 52, shin: 68 },
    to: { thigh: 12, shin: 8 }
  },
  legCurl: {
    view: "side",
    gear: "flat",
    setup: { body: -86, thigh: 6, shin: 8, upper: 78, fore: 18 },
    from: { shin: 8 },
    to: { shin: 108 }
  },
  abductor: {
    view: "front",
    gear: "seat",
    setup: {},
    from: { thighL: 10, thighR: -10 },
    to: { thighL: 46, thighR: -46 }
  },
  crunch: {
    view: "side",
    gear: "mat",
    setup: { body: 86, thigh: 52, shin: -70, upper: 88, fore: 68 },
    from: { body: 86 },
    to: { body: 56 }
  },
  legRaise: {
    view: "side",
    gear: "mat",
    setup: { body: 86, thigh: 8, shin: 8, upper: 88, fore: 18 },
    from: { thigh: 8, shin: 8 },
    to: { thigh: -72, shin: 10 }
  }
};

GYM.SVG = {
  side: `
<svg class="fig" viewBox="0 0 320 280" aria-hidden="true">
  <g class="gear"></g>
  <g transform="translate(168,158)">
    <g class="j-body">
      <line class="bone" x1="0" y1="0" x2="0" y2="-74"/>
      <g transform="translate(0,-90)"><circle class="head" r="16"/></g>
      <g transform="translate(4,-62)">
        <g class="j-upper">
          <line class="bone" x1="0" y1="0" x2="0" y2="50"/>
          <g transform="translate(0,50)">
            <g class="j-fore">
              <line class="bone" x1="0" y1="0" x2="0" y2="44"/>
              <circle class="dumbbell" cx="0" cy="50" r="9"/>
            </g>
          </g>
        </g>
      </g>
    </g>
    <g class="j-thigh">
      <line class="bone" x1="0" y1="0" x2="0" y2="60"/>
      <g transform="translate(0,60)">
        <g class="j-shin">
          <line class="bone" x1="0" y1="0" x2="0" y2="56"/>
          <ellipse class="shoe" cx="10" cy="56" rx="16" ry="6"/>
        </g>
      </g>
    </g>
  </g>
</svg>`,
  front: `
<svg class="fig" viewBox="0 0 320 280" aria-hidden="true">
  <g class="gear"></g>
  <g transform="translate(160,86)">
    <circle class="head" r="16"/>
    <line class="bone" x1="0" y1="16" x2="0" y2="78"/>
    <g transform="translate(-18,28)">
      <g class="j-upper-l">
        <line class="bone" x1="0" y1="0" x2="0" y2="48"/>
        <g transform="translate(0,48)">
          <g class="j-fore-l">
            <line class="bone" x1="0" y1="0" x2="0" y2="42"/>
            <circle class="dumbbell" cx="0" cy="48" r="8"/>
          </g>
        </g>
      </g>
    </g>
    <g transform="translate(18,28)">
      <g class="j-upper-r">
        <line class="bone" x1="0" y1="0" x2="0" y2="48"/>
        <g transform="translate(0,48)">
          <g class="j-fore-r">
            <line class="bone" x1="0" y1="0" x2="0" y2="42"/>
            <circle class="dumbbell" cx="0" cy="48" r="8"/>
          </g>
        </g>
      </g>
    </g>
    <g transform="translate(-10,78)">
      <g class="j-thigh-l">
        <line class="bone" x1="0" y1="0" x2="0" y2="58"/>
        <g transform="translate(0,58)">
          <line class="bone" x1="0" y1="0" x2="0" y2="52"/>
          <ellipse class="shoe" cx="0" cy="54" rx="10" ry="6"/>
        </g>
      </g>
    </g>
    <g transform="translate(10,78)">
      <g class="j-thigh-r">
        <line class="bone" x1="0" y1="0" x2="0" y2="58"/>
        <g transform="translate(0,58)">
          <line class="bone" x1="0" y1="0" x2="0" y2="52"/>
          <ellipse class="shoe" cx="0" cy="54" rx="10" ry="6"/>
        </g>
      </g>
    </g>
  </g>
</svg>`
};

GYM.GEAR = {
  floor: `<line class="eq" x1="40" y1="248" x2="280" y2="248"/>`,
  mat: `<rect class="eq-fill" x="50" y="200" width="220" height="18" rx="4"/><line class="eq" x1="40" y1="248" x2="280" y2="248"/>`,
  flat: `<rect class="eq-fill" x="70" y1="168" width="180" height="16" rx="4"/><rect class="eq" x="92" y="184" width="10" height="60"/><rect class="eq" x="218" y="184" width="10" height="60"/>`,
  incline: `<path class="eq-fill" d="M86 210 L230 128 L230 146 L86 228 Z"/><rect class="eq" x="86" y="210" width="12" height="38"/><rect class="eq" x="218" y="146" width="12" height="102"/>`,
  seat: `<rect class="eq-fill" x="128" y="168" width="70" height="14" rx="3"/><rect class="eq-fill" x="186" y="92" width="14" height="90" rx="3"/><rect class="eq" x="148" y="182" width="10" height="62"/>`,
  cable: `<rect class="eq" x="248" y="36" width="12" height="212"/><line class="eq-dash" x1="254" y1="48" x2="200" y2="120"/>`,
  lat: `<rect class="eq" x="236" y="28" width="14" height="220"/><line class="eq" x1="90" y1="40" x2="243" y2="40"/><line class="eq-dash" x1="160" y1="40" x2="160" y2="92"/>`,
  row: `<rect class="eq" x="36" y="40" width="12" height="208"/><rect class="eq-fill" x="120" y="176" width="90" height="12" rx="3"/><line class="eq-dash" x1="48" y1="120" x2="140" y2="150"/>`,
  preacher: `<path class="eq-fill" d="M110 150 L190 118 L198 136 L118 168 Z"/><rect class="eq-fill" x="128" y="168" width="64" height="12" rx="3"/>`,
  press: `<rect class="eq-fill" x="68" y="52" width="184" height="18" rx="4"/><rect class="eq-fill" x="96" y="168" width="110" height="16" rx="4"/>`
};

const JOINTS = {
  body: ".j-body",
  upper: ".j-upper",
  fore: ".j-fore",
  thigh: ".j-thigh",
  shin: ".j-shin",
  upperL: ".j-upper-l",
  upperR: ".j-upper-r",
  foreL: ".j-fore-l",
  foreR: ".j-fore-r",
  thighL: ".j-thigh-l",
  thighR: ".j-thigh-r"
};

function applyPose(el, pose) {
  Object.keys(JOINTS).forEach((k) => {
    if (pose[k] == null) return;
    const node = el.querySelector(JOINTS[k]);
    if (node) node.setAttribute("transform", `rotate(${pose[k]})`);
  });
}

function fillScene(el, animName, poseExtra) {
  const spec = GYM.ANIMS[animName] || GYM.ANIMS.flatPress;
  el.innerHTML = GYM.SVG[spec.view];
  const gear = el.querySelector(".gear");
  if (gear) gear.innerHTML = GYM.GEAR[spec.gear] || GYM.GEAR.floor;
  applyPose(el, Object.assign({}, spec.setup, poseExtra));
  return spec;
}

GYM.paint = function (el, animName) {
  const spec = GYM.ANIMS[animName] || GYM.ANIMS.flatPress;
  fillScene(el, animName, spec.from);
};

GYM.Figure = {
  root: null,
  raf: 0,
  start: 0,
  spec: null,

  mount(el, animName) {
    this.stop();
    this.root = el;
    this.spec = fillScene(el, animName, {});
    this.tick = (t) => {
      if (!this.start) this.start = t;
      const p = (t - this.start) / 1500;
      const wave = (Math.sin(p * Math.PI * 2 - Math.PI / 2) + 1) / 2;
      const e = wave < 0.5 ? 2 * wave * wave : 1 - ((-2 * wave + 2) ** 2) / 2;
      const pose = lerpPose(this.spec.from, this.spec.to, e);
      applyPose(el, Object.assign({}, this.spec.setup, pose));
      this.raf = requestAnimationFrame(this.tick);
    };
    this.raf = requestAnimationFrame(this.tick);
  },

  stop() {
    cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.start = 0;
  }
};

function lerpPose(a, b, t) {
  const out = {};
  const keys = new Set([...Object.keys(a || {}), ...Object.keys(b || {})]);
  keys.forEach((k) => {
    const av = a[k] == null ? b[k] : a[k];
    const bv = b[k] == null ? a[k] : b[k];
    out[k] = av + (bv - av) * t;
  });
  return out;
}
