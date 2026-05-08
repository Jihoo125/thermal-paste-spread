const socketNamesRaw = [
  "Socket 1",
  "Socket 2",
  "Socket 0",
  "Socket 16",
  "Socket 25",
  "Socket 169",
  "Socket 495",
  "Socket 495A",
  "Socket 499",
  "Socket 611",
  "Socket 680",
  "Socket 864",
  "Socket 1168",
  "Socket 1224",
  "Socket 1248",
  "Socket 1274",
  "Socket 1288",
  "Socket 1356",
  "Socket 1366",
  "Socket 1567",
  "Socket 1577",
  "Socket 1744",
  "Socket 2011",
  "Socket 2066",
  "Socket 3647",
  "Socket 4189",
  "Socket 4677",
  "Socket 1700",
  "Slot 1",
  "Slot 2",
  "Slot A",
  "PAC418",
  "LGA 1156",
  "LGA 1155",
  "LGA 1150",
  "LGA 1151",
  "LGA 1200",
  "LGA 1366",
  "LGA 2011-3",
  "LGA 2066",
  "Socket 3",
  "Socket 4",
  "Socket 5",
  "Socket 6",
  "Socket 7",
  "Super Socket 7",
  "Socket 8",
  "Socket 370",
  "Socket 423",
  "Socket 462",
  "Socket 478",
  "Socket 479",
  "Socket 563",
  "Socket 571",
  "Socket 603",
  "Socket 604",
  "Socket 754",
  "Socket 771",
  "Socket 775",
  "Socket 939",
  "Socket 940",
  "Socket 988",
  "Socket 989",
  "Socket F",
  "Socket FM1",
  "Socket FM2",
  "Socket FM2+",
  "Socket AM1",
  "Socket AM2",
  "Socket AM2+",
  "Socket AM3",
  "Socket AM3+",
  "Socket AM4",
  "Socket AM5",
  "Socket TR4",
  "Socket sTRX4",
  "Socket sTR5",
  "Socket SP3",
  "Socket SP5",
  "Socket G1",
  "Socket G2",
  "Socket G3",
  "Socket M",
  "Socket P",
  "Socket T",
  "Socket H",
  "Socket R",
  "Socket B"
];

function inferSocketSize(name) {
  const exact = {
    "Socket 1": { w: 50, h: 50 },
    "Socket 2": { w: 50, h: 50 },
    "Socket 0": { w: 50, h: 50 },
    "Socket 16": { w: 50, h: 50 },
    "Socket 25": { w: 50, h: 50 },
    "Socket 169": { w: 35, h: 35 },
    "Socket 495": { w: 35, h: 35 },
    "Socket 495A": { w: 35, h: 35 },
    "Socket 499": { w: 35, h: 35 },
    "Socket 611": { w: 40, h: 40 },
    "Socket 680": { w: 42.5, h: 42.5 },
    "Socket 864": { w: 42.5, h: 42.5 },
    "Socket 1168": { w: 35, h: 35 },
    "Socket 1224": { w: 37.5, h: 37.5 },
    "Socket 1248": { w: 37.5, h: 37.5 },
    "Socket 1274": { w: 37.5, h: 37.5 },
    "Socket 1288": { w: 37.5, h: 37.5 },
    "Socket 1356": { w: 42.5, h: 45 },
    "Socket 1366": { w: 42.5, h: 45 },
    "Socket 1567": { w: 52.5, h: 45 },
    "Socket 1577": { w: 52.5, h: 45 },
    "Socket 1744": { w: 45, h: 45 },
    "Socket 2011": { w: 52.5, h: 45 },
    "Socket 2066": { w: 52.5, h: 45 },
    "Socket 3647": { w: 76, h: 56.5 },
    "Socket 4189": { w: 77.5, h: 56.5 },
    "Socket 4677": { w: 77.5, h: 56.5 },
    "Socket 1700": { w: 45, h: 37.5 },
    "Slot 1": { w: 120, h: 50 },
    "Slot 2": { w: 140, h: 60 },
    "Slot A": { w: 120, h: 50 },
    "PAC418": { w: 60, h: 60 },
    "LGA 1156": { w: 37.5, h: 37.5 },
    "LGA 1155": { w: 37.5, h: 37.5 },
    "LGA 1150": { w: 37.5, h: 37.5 },
    "LGA 1151": { w: 37.5, h: 37.5 },
    "LGA 1200": { w: 37.5, h: 37.5 },
    "LGA 1366": { w: 42.5, h: 45 },
    "LGA 2011-3": { w: 52.5, h: 45 },
    "LGA 2066": { w: 52.5, h: 45 },
    "Socket 3": { w: 50, h: 50 },
    "Socket 4": { w: 50, h: 50 },
    "Socket 5": { w: 50, h: 50 },
    "Socket 6": { w: 50, h: 50 },
    "Socket 7": { w: 50, h: 50 },
    "Super Socket 7": { w: 50, h: 50 },
    "Socket 8": { w: 60, h: 60 },
    "Socket 370": { w: 35, h: 35 },
    "Socket 423": { w: 42.5, h: 42.5 },
    "Socket 462": { w: 37.5, h: 37.5 },
    "Socket 478": { w: 35, h: 35 },
    "Socket 479": { w: 35, h: 35 },
    "Socket 563": { w: 40, h: 40 },
    "Socket 571": { w: 40, h: 40 },
    "Socket 603": { w: 42.5, h: 42.5 },
    "Socket 604": { w: 42.5, h: 42.5 },
    "Socket 754": { w: 40, h: 40 },
    "Socket 771": { w: 42.5, h: 45 },
    "Socket 775": { w: 37.5, h: 37.5 },
    "Socket 939": { w: 40, h: 40 },
    "Socket 940": { w: 40, h: 40 },
    "Socket 988": { w: 35, h: 35 },
    "Socket 989": { w: 35, h: 35 },
    "Socket F": { w: 40, h: 40 },
    "Socket FM1": { w: 40, h: 40 },
    "Socket FM2": { w: 40, h: 40 },
    "Socket FM2+": { w: 40, h: 40 },
    "Socket AM1": { w: 25, h: 25 },
    "Socket AM2": { w: 40, h: 40 },
    "Socket AM2+": { w: 40, h: 40 },
    "Socket AM3": { w: 40, h: 40 },
    "Socket AM3+": { w: 40, h: 40 },
    "Socket AM4": { w: 40, h: 40 },
    "Socket AM5": { w: 40, h: 40 },
    "Socket TR4": { w: 75.4, h: 58.5 },
    "Socket sTRX4": { w: 75.4, h: 58.5 },
    "Socket sTR5": { w: 75.4, h: 58.5 },
    "Socket SP3": { w: 75.4, h: 58.5 },
    "Socket SP5": { w: 72.5, h: 75.4 },
    "Socket G1": { w: 37.5, h: 37.5 },
    "Socket G2": { w: 37.5, h: 37.5 },
    "Socket G3": { w: 42, h: 28 },
    "Socket M": { w: 35, h: 35 },
    "Socket P": { w: 35, h: 35 },
    "Socket T": { w: 35, h: 35 },
    "Socket H": { w: 37.5, h: 37.5 },
    "Socket R": { w: 42, h: 28 },
    "Socket B": { w: 42, h: 28 }
  };

  if (exact[name]) return exact[name];
  return { w: 37.5, h: 37.5 };
}

const socketData = Array.from(new Set(socketNamesRaw))
  .map((name) => {
    const { w, h } = inferSocketSize(name);
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return { id, name, w, h };
  });

const canvas = document.getElementById("simCanvas");
const ctx = canvas.getContext("2d");

const socketSelect = document.getElementById("socketSelect");
const patternSelect = document.getElementById("patternSelect");
const brushSizeInput = document.getElementById("brushSize");
const brushSizeNumberInput = document.getElementById("brushSizeNumber");
const viscosityInput = document.getElementById("viscosity");
const viscosityNumberInput = document.getElementById("viscosityNumber");
const pressureInput = document.getElementById("pressure");
const pressureNumberInput = document.getElementById("pressureNumber");
const tpsInput = document.getElementById("tps");
const tpsNumberInput = document.getElementById("tpsNumber");
const clearBtn = document.getElementById("clearBtn");
const centerDropBtn = document.getElementById("centerDropBtn");
const resetOptionsBtn = document.getElementById("resetOptionsBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");

const defaultOptions = {
  socketName: "Socket 1700",
  brushPattern: "dot",
  brushSize: 10,
  viscosity: 0.35,
  pressure: 0.55,
  tps: 60
};

const sim = {
  cols: 180,
  rows: 122,
  grease: [],
  nextGrease: [],
  socketMask: [],
  isDrawing: false,
  pointerX: 0,
  pointerY: 0,
  prevPointerX: 0,
  prevPointerY: 0,
  brushSize: Number(brushSizeInput.value),
  viscosity: Number(viscosityInput.value),
  pressure: Number(pressureInput.value),
  tps: Number(tpsInput.value),
  accumulatorMs: 0,
  lastTimeMs: 0,
  selectedSocket: socketData.find((s) => s.name === "Socket 1700") || socketData[0]
};

const BASE_TPS = 60;

function initArrays() {
  const total = sim.cols * sim.rows;
  sim.grease = new Float32Array(total);
  sim.nextGrease = new Float32Array(total);
  sim.socketMask = new Uint8Array(total);
}

function indexAt(x, y) {
  return y * sim.cols + x;
}

function toGrid(canvasX, canvasY) {
  const x = Math.max(0, Math.min(sim.cols - 1, Math.floor((canvasX / canvas.width) * sim.cols)));
  const y = Math.max(0, Math.min(sim.rows - 1, Math.floor((canvasY / canvas.height) * sim.rows)));
  return { x, y };
}

function setSocketMask(socket) {
  sim.selectedSocket = socket;
  sim.socketMask.fill(0);
  sim.grease.fill(0);

  const scale = Math.min(sim.cols / 56, sim.rows / 56);
  const w = Math.max(12, Math.floor(socket.w * scale));
  const h = Math.max(12, Math.floor(socket.h * scale));
  const cx = Math.floor(sim.cols / 2);
  const cy = Math.floor(sim.rows / 2);
  const x0 = Math.floor(cx - w / 2);
  const y0 = Math.floor(cy - h / 2);

  for (let y = 0; y < sim.rows; y += 1) {
    for (let x = 0; x < sim.cols; x += 1) {
      const inside = x >= x0 && x < x0 + w && y >= y0 && y < y0 + h;
      sim.socketMask[indexAt(x, y)] = inside ? 1 : 0;
    }
  }
}

function addGreaseDot(gx, gy, radius, strength = 1) {
  const r2 = radius * radius;
  const xStart = Math.max(0, gx - radius);
  const xEnd = Math.min(sim.cols - 1, gx + radius);
  const yStart = Math.max(0, gy - radius);
  const yEnd = Math.min(sim.rows - 1, gy + radius);

  for (let y = yStart; y <= yEnd; y += 1) {
    for (let x = xStart; x <= xEnd; x += 1) {
      const dx = x - gx;
      const dy = y - gy;
      const d2 = dx * dx + dy * dy;
      if (d2 > r2) continue;
      const idx = indexAt(x, y);
      if (sim.socketMask[idx] === 0) continue;
      const falloff = 1 - d2 / r2;
      sim.grease[idx] = Math.min(1, sim.grease[idx] + falloff * 0.12 * strength);
    }
  }
}

function addBrushPattern(gx, gy, prevX, prevY) {
  const radius = sim.brushSize;
  const pattern = patternSelect.value;

  if (pattern === "dot") {
    addGreaseDot(gx, gy, radius, 1.25);
    return;
  }

  if (pattern === "ring") {
    const inner = Math.max(1, Math.floor(radius * 0.65));
    for (let y = gy - radius; y <= gy + radius; y += 1) {
      for (let x = gx - radius; x <= gx + radius; x += 1) {
        if (x < 0 || x >= sim.cols || y < 0 || y >= sim.rows) continue;
        const dx = x - gx;
        const dy = y - gy;
        const d = Math.hypot(dx, dy);
        if (d <= radius && d >= inner) {
          const idx = indexAt(x, y);
          if (sim.socketMask[idx]) sim.grease[idx] = Math.min(1, sim.grease[idx] + 0.16);
        }
      }
    }
    return;
  }

  if (pattern === "square") {
    for (let y = gy - radius; y <= gy + radius; y += 1) {
      for (let x = gx - radius; x <= gx + radius; x += 1) {
        if (x < 0 || x >= sim.cols || y < 0 || y >= sim.rows) continue;
        const idx = indexAt(x, y);
        if (sim.socketMask[idx]) {
          sim.grease[idx] = Math.min(1, sim.grease[idx] + 0.1);
        }
      }
    }
    return;
  }

  if (pattern === "x") {
    for (let i = -radius; i <= radius; i += 1) {
      const aX = gx + i;
      const aY = gy + i;
      const bX = gx + i;
      const bY = gy - i;
      if (aX >= 0 && aX < sim.cols && aY >= 0 && aY < sim.rows) {
        const idx = indexAt(aX, aY);
        if (sim.socketMask[idx]) sim.grease[idx] = Math.min(1, sim.grease[idx] + 0.2);
      }
      if (bX >= 0 && bX < sim.cols && bY >= 0 && bY < sim.rows) {
        const idx = indexAt(bX, bY);
        if (sim.socketMask[idx]) sim.grease[idx] = Math.min(1, sim.grease[idx] + 0.2);
      }
    }
    addGreaseDot(gx, gy, Math.max(2, Math.floor(radius * 0.35)), 1);
    return;
  }

  if (pattern === "plus") {
    for (let i = -radius; i <= radius; i += 1) {
      const hX = gx + i;
      const hY = gy;
      const vX = gx;
      const vY = gy + i;
      if (hX >= 0 && hX < sim.cols && hY >= 0 && hY < sim.rows) {
        const idx = indexAt(hX, hY);
        if (sim.socketMask[idx]) sim.grease[idx] = Math.min(1, sim.grease[idx] + 0.18);
      }
      if (vX >= 0 && vX < sim.cols && vY >= 0 && vY < sim.rows) {
        const idx = indexAt(vX, vY);
        if (sim.socketMask[idx]) sim.grease[idx] = Math.min(1, sim.grease[idx] + 0.18);
      }
    }
    return;
  }

  if (pattern === "star") {
    for (let i = -radius; i <= radius; i += 1) {
      const points = [
        [gx + i, gy],
        [gx, gy + i],
        [gx + i, gy + i],
        [gx + i, gy - i]
      ];
      for (const [px, py] of points) {
        if (px >= 0 && px < sim.cols && py >= 0 && py < sim.rows) {
          const idx = indexAt(px, py);
          if (sim.socketMask[idx]) sim.grease[idx] = Math.min(1, sim.grease[idx] + 0.14);
        }
      }
    }
    addGreaseDot(gx, gy, Math.max(2, Math.floor(radius * 0.25)), 1);
    return;
  }

  if (pattern === "spray") {
    const points = Math.max(20, Math.floor(radius * 10));
    for (let i = 0; i < points; i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * radius;
      const sx = Math.round(gx + Math.cos(angle) * dist);
      const sy = Math.round(gy + Math.sin(angle) * dist);
      if (sx < 0 || sx >= sim.cols || sy < 0 || sy >= sim.rows) continue;
      const idx = indexAt(sx, sy);
      if (sim.socketMask[idx]) sim.grease[idx] = Math.min(1, sim.grease[idx] + 0.07);
    }
    return;
  }

  if (pattern === "spiral") {
    const turns = 3.5;
    const steps = Math.max(24, radius * 8);
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      const angle = t * turns * Math.PI * 2;
      const dist = t * radius;
      const sx = Math.round(gx + Math.cos(angle) * dist);
      const sy = Math.round(gy + Math.sin(angle) * dist);
      if (sx < 0 || sx >= sim.cols || sy < 0 || sy >= sim.rows) continue;
      const idx = indexAt(sx, sy);
      if (sim.socketMask[idx]) sim.grease[idx] = Math.min(1, sim.grease[idx] + 0.13);
    }
    return;
  }

  if (pattern === "line") {
    const dx = gx - prevX;
    const dy = gy - prevY;
    const dist = Math.max(1, Math.hypot(dx, dy));
    const steps = Math.ceil(dist);
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      const sx = Math.round(prevX + dx * t);
      const sy = Math.round(prevY + dy * t);
      addGreaseDot(sx, sy, Math.max(2, Math.floor(radius * 0.55)), 1.1);
    }
  }
}

function diffuseGrease() {
  const speedScale = sim.tps / BASE_TPS;
  const spreadRate = (0.02 + sim.pressure * 0.05) * speedScale;
  const retention = 1;

  for (let y = 1; y < sim.rows - 1; y += 1) {
    for (let x = 1; x < sim.cols - 1; x += 1) {
      const idx = indexAt(x, y);
      if (sim.socketMask[idx] === 0) {
        sim.nextGrease[idx] = 0;
        continue;
      }

      const center = sim.grease[idx];

      const n = sim.socketMask[indexAt(x, y - 1)] ? sim.grease[indexAt(x, y - 1)] : center;
      const s = sim.socketMask[indexAt(x, y + 1)] ? sim.grease[indexAt(x, y + 1)] : center;
      const e = sim.socketMask[indexAt(x + 1, y)] ? sim.grease[indexAt(x + 1, y)] : center;
      const w = sim.socketMask[indexAt(x - 1, y)] ? sim.grease[indexAt(x - 1, y)] : center;

      const lap = n + s + e + w - 4 * center;
      let next = center + spreadRate * lap;
      next *= retention;
      if (next < 0.0002) next = 0;
      if (next > 1) next = 1;
      sim.nextGrease[idx] = next;
    }
  }

  const tmp = sim.grease;
  sim.grease = sim.nextGrease;
  sim.nextGrease = tmp;
}

function drawScene() {
  const style = getComputedStyle(document.body);
  const canvasBg = style.getPropertyValue("--canvas-bg").trim() || "#0f1822";
  const cpuBg = style.getPropertyValue("--cpu").trim() || "#202a35";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = canvasBg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cw = canvas.width / sim.cols;
  const ch = canvas.height / sim.rows;

  for (let y = 0; y < sim.rows; y += 1) {
    for (let x = 0; x < sim.cols; x += 1) {
      const idx = indexAt(x, y);

      if (sim.socketMask[idx]) {
        ctx.fillStyle = cpuBg;
      } else {
        ctx.fillStyle = canvasBg;
      }
      ctx.fillRect(x * cw, y * ch, cw + 0.5, ch + 0.5);

      const amount = sim.grease[idx];
      if (amount > 0) {
        const alpha = Math.min(0.92, 0.16 + amount * 0.85);
        const shade = Math.floor(182 + amount * 52);
        ctx.fillStyle = `rgba(${shade}, ${shade}, ${shade}, ${alpha})`;
        ctx.fillRect(x * cw, y * ch, cw + 0.5, ch + 0.5);
      }
    }
  }

  drawSocketBorder(cw, ch);
}

function drawSocketBorder(cw, ch) {
  const style = getComputedStyle(document.body);
  const border = style.getPropertyValue("--cpu-border").trim() || "#6b7f94";
  let minX = sim.cols;
  let minY = sim.rows;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < sim.rows; y += 1) {
    for (let x = 0; x < sim.cols; x += 1) {
      const idx = indexAt(x, y);
      if (sim.socketMask[idx]) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  ctx.strokeStyle = border;
  ctx.lineWidth = 2;
  ctx.strokeRect(minX * cw, minY * ch, (maxX - minX + 1) * cw, (maxY - minY + 1) * ch);
}

function syncThemeButton() {
  const isLight = document.body.classList.contains("light");
  themeToggleBtn.textContent = isLight ? "◐" : "○";
}

function animationLoop(nowMs) {
  if (typeof nowMs !== "number") {
    requestAnimationFrame(animationLoop);
    return;
  }
  if (!sim.lastTimeMs) sim.lastTimeMs = nowMs;
  const frameDelta = Math.min(100, nowMs - sim.lastTimeMs);
  sim.lastTimeMs = nowMs;
  sim.accumulatorMs += frameDelta;
  const tickMs = 1000 / sim.tps;

  while (sim.accumulatorMs >= tickMs) {
    if (sim.isDrawing) {
      addBrushPattern(sim.pointerX, sim.pointerY, sim.prevPointerX, sim.prevPointerY);
      sim.prevPointerX = sim.pointerX;
      sim.prevPointerY = sim.pointerY;
    }
    diffuseGrease();
    sim.accumulatorMs -= tickMs;
  }

  drawScene();
  requestAnimationFrame(animationLoop);
}

function onPointerDown(e) {
  if (e.button !== 0) return;
  const rect = canvas.getBoundingClientRect();
  const localX = e.clientX - rect.left;
  const localY = e.clientY - rect.top;
  const grid = toGrid(localX, localY);
  sim.isDrawing = true;
  sim.pointerX = grid.x;
  sim.pointerY = grid.y;
  sim.prevPointerX = grid.x;
  sim.prevPointerY = grid.y;
  addBrushPattern(grid.x, grid.y, grid.x, grid.y);
}

function onPointerMove(e) {
  if (!sim.isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const localX = e.clientX - rect.left;
  const localY = e.clientY - rect.top;
  const grid = toGrid(localX, localY);
  sim.pointerX = grid.x;
  sim.pointerY = grid.y;
}

function onPointerUp() {
  sim.isDrawing = false;
}

function resizeCanvas() {
  const parent = canvas.parentElement;
  const w = parent.clientWidth;
  const h = parent.clientHeight;
  canvas.width = Math.max(640, Math.floor(w));
  canvas.height = Math.max(420, Math.floor(h));
}

function setupUI() {
  for (const socket of socketData) {
    const option = document.createElement("option");
    option.value = socket.id;
    option.textContent = `${socket.name} (${socket.w} x ${socket.h} mm)`;
    socketSelect.appendChild(option);
  }
  socketSelect.value = sim.selectedSocket.id;
  patternSelect.value = defaultOptions.brushPattern;

  socketSelect.addEventListener("change", () => {
    const next = socketData.find((s) => s.id === socketSelect.value) || socketData[0];
    setSocketMask(next);
  });

  brushSizeInput.addEventListener("input", () => {
    sim.brushSize = Number(brushSizeInput.value);
    brushSizeNumberInput.value = brushSizeInput.value;
  });
  brushSizeNumberInput.addEventListener("input", () => {
    const next = Number(brushSizeNumberInput.value);
    if (Number.isNaN(next)) return;
    const clamped = Math.max(2, Math.min(30, Math.round(next)));
    sim.brushSize = clamped;
    brushSizeInput.value = String(clamped);
    brushSizeNumberInput.value = String(clamped);
  });

  viscosityInput.addEventListener("input", () => {
    sim.viscosity = Number(viscosityInput.value);
    viscosityNumberInput.value = viscosityInput.value;
  });
  viscosityNumberInput.addEventListener("input", () => {
    const next = Number(viscosityNumberInput.value);
    if (Number.isNaN(next)) return;
    const clamped = Math.max(0.05, Math.min(0.9, next));
    sim.viscosity = clamped;
    viscosityInput.value = clamped.toFixed(2);
    viscosityNumberInput.value = clamped.toFixed(2);
  });

  pressureInput.addEventListener("input", () => {
    sim.pressure = Number(pressureInput.value);
    pressureNumberInput.value = pressureInput.value;
  });
  pressureNumberInput.addEventListener("input", () => {
    const next = Number(pressureNumberInput.value);
    if (Number.isNaN(next)) return;
    const clamped = Math.max(0.05, Math.min(1.5, next));
    sim.pressure = clamped;
    pressureInput.value = clamped.toFixed(2);
    pressureNumberInput.value = clamped.toFixed(2);
  });

  tpsInput.addEventListener("input", () => {
    sim.tps = Number(tpsInput.value);
    tpsNumberInput.value = tpsInput.value;
  });
  tpsNumberInput.addEventListener("input", () => {
    const next = Number(tpsNumberInput.value);
    if (Number.isNaN(next)) return;
    const clamped = Math.max(10, Math.min(240, Math.round(next)));
    sim.tps = clamped;
    tpsInput.value = String(clamped);
    tpsNumberInput.value = String(clamped);
  });

  clearBtn.addEventListener("click", () => {
    sim.grease.fill(0);
  });

  centerDropBtn.addEventListener("click", () => {
    addGreaseDot(Math.floor(sim.cols / 2), Math.floor(sim.rows / 2), Math.max(4, sim.brushSize + 4), 1.9);
  });

  resetOptionsBtn.addEventListener("click", () => {
    const defaultSocket =
      socketData.find((s) => s.name === defaultOptions.socketName) || socketData[0];
    sim.brushSize = defaultOptions.brushSize;
    sim.viscosity = defaultOptions.viscosity;
    sim.pressure = defaultOptions.pressure;
    sim.tps = defaultOptions.tps;

    socketSelect.value = defaultSocket.id;
    patternSelect.value = defaultOptions.brushPattern;

    brushSizeInput.value = String(defaultOptions.brushSize);
    brushSizeNumberInput.value = String(defaultOptions.brushSize);
    viscosityInput.value = defaultOptions.viscosity.toFixed(2);
    viscosityNumberInput.value = defaultOptions.viscosity.toFixed(2);
    pressureInput.value = defaultOptions.pressure.toFixed(2);
    pressureNumberInput.value = defaultOptions.pressure.toFixed(2);
    tpsInput.value = String(defaultOptions.tps);
    tpsNumberInput.value = String(defaultOptions.tps);

    setSocketMask(defaultSocket);
  });

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    syncThemeButton();
  });
}

function init() {
  initArrays();
  setupUI();
  resizeCanvas();
  setSocketMask(sim.selectedSocket);
  syncThemeButton();

  window.addEventListener("resize", resizeCanvas);
  canvas.addEventListener("mousedown", onPointerDown);
  canvas.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);
  canvas.addEventListener("mouseleave", onPointerUp);
  canvas.addEventListener("contextmenu", (e) => e.preventDefault());

  requestAnimationFrame(animationLoop);
}

init();
