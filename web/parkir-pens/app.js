/* =============================================
   PARKIR PENS — App Logic
   =============================================

   ✏️ EASY ADJUSTMENT:
   Edit the PARKING_LAYOUT array below to match your real parking lot.
   
   Each row is an array of spot labels.
   - Use a string like "A1" for a real spot.
   - Use null for an empty/spacer cell (no spot rendered).
   - Use "---" to insert a row label (text after "---" is the label).
   
   Example:
     ["---Row A"],        // row label
     ["A1","A2","A3"],    // 3 spots
     [null,"B1","B2"],    // 1 spacer then 2 spots

   Change `GRID_COLUMNS` in style.css (--grid-columns) to match
   the widest row length.
   ============================================= */

const PARKING_LAYOUT = [
  // ── Adjust this to your real parking layout ──
  ["---Row A"],
  ["A1", "A2", "A3", "A4", "A5"],
  ["---Row B"],
  ["B1", "B2", "B3", "B4", "B5"],
  ["---Row C"],
  ["C1", "C2", "C3", "C4", "C5"],
  ["---Row D"],
  ["D1", "D2", "D3", "D4", "D5"],
];

// ── LocalStorage key ──
const STORAGE_KEY = "parkir_pens_data";

// ── State ──
let selectedSpot = null; // pre-confirm selection
let parkedData   = loadParked(); // { spot, timestamp }

// ── DOM refs ──
const grid        = document.getElementById("parking-grid");
const statusBanner = document.getElementById("status-banner");
const statusSpot  = document.getElementById("status-spot");
const statusTime  = document.getElementById("status-time");
const statusText  = document.getElementById("status-text");
const confirmBar  = document.getElementById("confirm-bar");
const confirmSpot = document.getElementById("confirm-spot");
const btnConfirm  = document.getElementById("btn-confirm");
const btnCancel   = document.getElementById("btn-cancel");
const btnClear    = document.getElementById("btn-clear");

// ── Init ──
buildGrid();
renderState();

// ── Build the grid from PARKING_LAYOUT ──
function buildGrid() {
  grid.innerHTML = "";
  PARKING_LAYOUT.forEach(row => {
    row.forEach(cell => {
      if (cell === null) {
        // Spacer
        const spacer = document.createElement("div");
        spacer.className = "spot spacer";
        grid.appendChild(spacer);
      } else if (typeof cell === "string" && cell.startsWith("---")) {
        // Row label
        const label = document.createElement("div");
        label.className = "row-label";
        label.textContent = cell.slice(3).trim() || "";
        grid.appendChild(label);
      } else {
        // Real spot
        const btn = document.createElement("button");
        btn.className = "spot";
        btn.dataset.spot = cell;
        btn.textContent = cell;
        btn.id = `spot-${cell}`;
        btn.addEventListener("click", () => handleSpotClick(cell));
        grid.appendChild(btn);
      }
    });
  });
}

// ── Spot click handler ──
function handleSpotClick(spotId) {
  // If already parked here, do nothing (must clear first)
  if (parkedData && parkedData.spot === spotId) return;

  // Toggle selection
  if (selectedSpot === spotId) {
    selectedSpot = null;
  } else {
    selectedSpot = spotId;
  }
  renderState();
}

// ── Confirm ──
btnConfirm.addEventListener("click", () => {
  if (!selectedSpot) return;
  parkedData = {
    spot: selectedSpot,
    timestamp: Date.now(),
  };
  saveParked(parkedData);
  selectedSpot = null;
  renderState();
});

// ── Cancel ──
btnCancel.addEventListener("click", () => {
  selectedSpot = null;
  renderState();
});

// ── Clear ──
btnClear.addEventListener("click", () => {
  if (confirm("Clear your parked spot?")) {
    parkedData = null;
    localStorage.removeItem(STORAGE_KEY);
    selectedSpot = null;
    renderState();
  }
});

// ── Render everything based on state ──
function renderState() {
  // Reset all spots
  document.querySelectorAll(".spot").forEach(el => {
    el.classList.remove("selected", "parked");
  });

  // Mark parked spot
  if (parkedData) {
    const parkedEl = document.getElementById(`spot-${parkedData.spot}`);
    if (parkedEl) parkedEl.classList.add("parked");

    statusSpot.textContent = parkedData.spot;
    statusTime.textContent = `Parked ${formatTime(parkedData.timestamp)}`;
    statusBanner.classList.remove("hidden");
  } else {
    statusBanner.classList.add("hidden");
  }

  // Mark selected spot
  if (selectedSpot) {
    const selEl = document.getElementById(`spot-${selectedSpot}`);
    if (selEl) selEl.classList.add("selected");

    confirmSpot.textContent = selectedSpot;
    confirmBar.classList.remove("hidden");
  } else {
    confirmBar.classList.add("hidden");
  }
}

// ── Persistence ──
function saveParked(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadParked() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// ── Time formatting ──
function formatTime(ts) {
  const d = new Date(ts);
  const now = new Date();
  const diff = now - d;
  const mins = Math.floor(diff / 60000);
  const hrs  = Math.floor(mins / 60);

  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  if (hrs < 24) return `${hrs}h ${mins % 60}m ago`;

  return d.toLocaleDateString("en-GB", {
    day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
  });
}

// Update the "ago" timer every minute
setInterval(() => {
  if (parkedData) {
    statusTime.textContent = `Parked ${formatTime(parkedData.timestamp)}`;
  }
}, 60000);

// ── Reset All ──
const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", () => {
  if (confirm("Reset all data? This will clear your saved parking spot and all cached data.")) {
    localStorage.clear();
    parkedData = null;
    selectedSpot = null;
    // Force-clear all spot classes immediately
    document.querySelectorAll(".spot").forEach(el => {
      el.classList.remove("selected", "parked");
    });
    confirmBar.classList.add("hidden");
    statusBanner.classList.add("hidden");
    // Also re-render after a frame to be safe
    requestAnimationFrame(() => renderState());
  }
});
