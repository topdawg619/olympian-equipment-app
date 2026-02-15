const inventory = [
  { id: 'H-201', name: 'SpeedFlex Helmet', category: 'Helmet', size: 'L', condition: 'Cleared', status: 'out', team: 'Varsity' },
  { id: 'H-202', name: 'SpeedFlex Helmet', category: 'Helmet', size: 'M', condition: 'Needs pads', status: 'out', team: 'JV' },
  { id: 'S-101', name: 'Shoulder Pads', category: 'Pads', size: 'XL', condition: 'Cleared', status: 'out', team: 'Varsity' },
  { id: 'S-118', name: 'Shoulder Pads', category: 'Pads', size: 'L', condition: 'Cleared', status: 'available', team: 'JV' },
  { id: 'J-41', name: 'Game Jersey', category: 'Jersey', size: 'M', condition: 'Needs stitching', status: 'out', team: 'JV' },
  { id: 'J-77', name: 'Game Jersey', category: 'Jersey', size: 'L', condition: 'Cleared', status: 'out', team: 'Varsity' },
  { id: 'A-08', name: 'Practice Pants', category: 'Pants', size: 'XL', condition: 'Cleared', status: 'available', team: 'Varsity' },
  { id: 'A-15', name: 'Practice Pants', category: 'Pants', size: 'L', condition: 'Needs wash', status: 'out', team: 'JV' }

];

const players = [
  { id: 'p1', number: 0, name: 'Carlos Lopez', team: 'Varsity', position: 'CB / WR', status: 'Cleared' },
  { id: 'p2', number: 1, name: 'Jayden Fuentes', team: 'Varsity', position: 'QB / WR (C)', status: 'Cleared' },
  { id: 'p3', number: 2, name: 'Dylan Loe', team: 'Varsity', position: 'DB / WR', status: 'Cleared' },
  { id: 'p4', number: 3, name: 'Patricio Flatts', team: 'Varsity', position: 'WR', status: 'Cleared' },
  { id: 'p5', number: 4, name: 'Jeremiah Delgado Faucher', team: 'Varsity', position: 'MLB / RB (C)', status: 'Cleared' },
  { id: 'p6', number: 5, name: 'Jonah Zamora', team: 'Varsity', position: 'WB / RB', status: 'Awaiting visor install' },
  { id: 'p7', number: 6, name: 'Andie Deanda', team: 'Varsity', position: 'ATH', status: 'Cleared' },
  { id: 'p8', number: 7, name: 'Bermejo Gabriel', team: 'Varsity', position: 'ATH', status: 'Cleared' },
  { id: 'p9', number: 8, name: 'Jorgani Estrada', team: 'Varsity', position: 'WR / DB (C)', status: 'Cleared' },
  { id: 'p10', number: 9, name: 'Mikey Talavera', team: 'Varsity', position: 'TE / LB', status: 'Cleared' },
  { id: 'p11', number: 11, name: 'Emi Martin Del Campo', team: 'Varsity', position: 'OLB / LB', status: 'Needs chinstrap swap' },
  { id: 'p12', number: 12, name: 'Ismael LaFrancis', team: 'Varsity', position: 'FS / WR', status: 'Cleared' },
  { id: 'p13', number: 13, name: 'Juan Neo Ruiz', team: 'Varsity', position: 'CB (C)', status: 'Cleared' },
  { id: 'p14', number: 14, name: 'Kayne Price', team: 'Varsity', position: 'DB', status: 'Awaiting shoulder pads' },
  { id: 'p15', number: 15, name: 'Jordan Sandoval', team: 'Varsity', position: 'WR', status: 'Cleared' },
  { id: 'p16', number: 16, name: 'Hasson Franco', team: 'Varsity', position: 'ATH', status: 'Needs ankle brace' },
  { id: 'p17', number: 17, name: 'Derek Haven', team: 'Varsity', position: 'WR / K', status: 'Cleared' },
  { id: 'p18', number: 18, name: 'Torrion Parker', team: 'Varsity', position: 'CB / FS', status: 'Cleared' },
  { id: 'p19', number: 19, name: 'Johnny Espinoza', team: 'Varsity', position: 'DB / WR', status: 'Cleared' },
  { id: 'p20', number: 20, name: 'Jahmir Jaydon Blackmon', team: 'Varsity', position: 'SS / FS', status: 'Cleared' },
  { id: 'p21', number: 21, name: 'Raul Castillo', team: 'Varsity', position: 'DB', status: 'Cleared' },
  { id: 'p22', number: 23, name: 'Walter Ignacio', team: 'Varsity', position: 'RB / DB', status: 'Cleared' },
  { id: 'p23', number: 24, name: 'Gabriel Moreno', team: 'Varsity', position: 'DB / WR', status: 'Cleared' },
  { id: 'p24', number: 25, name: 'Isaac Castro', team: 'Varsity', position: 'WR', status: 'Cleared' },
  { id: 'p25', number: 27, name: 'Butler Robert', team: 'Varsity', position: 'DB / S', status: 'Cleared' },
  { id: 'p26', number: 28, name: 'Devin Fuller', team: 'Varsity', position: 'RB / LB', status: 'Cleared' },
  { id: 'p27', number: 29, name: 'Dillan Durruthy', team: 'Varsity', position: 'RB', status: 'Needs new helmet shell' },
  { id: 'p28', number: 30, name: 'Sebastian Sierra', team: 'Varsity', position: 'DB', status: 'Cleared' },
  { id: 'p29', number: 31, name: 'Eisuke Simmons', team: 'Varsity', position: 'K', status: 'Cleared' },
  { id: 'p30', number: 32, name: 'Luis Iturralde', team: 'Varsity', position: 'WR', status: 'Cleared' },
  { id: 'p31', number: 33, name: 'David LaFrancis', team: 'Varsity', position: 'WR', status: 'Cleared' },
  { id: 'p32', number: 34, name: 'Gio Ware', team: 'Varsity', position: 'WR / KR', status: 'Cleared' },
  { id: 'p33', number: 37, name: 'Jayce Reimer', team: 'Varsity', position: 'RB', status: 'Cleared' },
  { id: 'p34', number: 40, name: 'Amarii Oehmke', team: 'Varsity', position: 'LB', status: 'Missing thigh pads' },
  { id: 'p35', number: 43, name: 'Eric Ortega', team: 'Varsity', position: 'LB', status: 'Cleared' },
  { id: 'p36', number: 44, name: 'Luis Hernandez', team: 'Varsity', position: 'DE', status: 'Cleared' },
  { id: 'p37', number: 45, name: 'Max Barrios', team: 'Varsity', position: 'ATH', status: 'Cleared' },
  { id: 'p38', number: 51, name: 'Julian Carl Devera', team: 'Varsity', position: 'OL / DL', status: 'Cleared' },
  { id: 'p39', number: 52, name: 'Sebastian Marquez', team: 'Varsity', position: 'DL', status: 'Cleared' },
  { id: 'p40', number: 53, name: 'Noah Soria', team: 'Varsity', position: 'DE / LB', status: 'Cleared' },
  { id: 'p41', number: 54, name: 'Derryl Estoesta', team: 'Varsity', position: 'DB', status: 'Cleared' },
  { id: 'p42', number: 55, name: 'Joseph Schacht', team: 'Varsity', position: 'C / LS', status: 'Cleared' },
  { id: 'p43', number: 56, name: 'Aaden Diepham', team: 'Varsity', position: 'OL / DL', status: 'Cleared' },
  { id: 'p44', number: 60, name: 'Josiah Rivera', team: 'Varsity', position: 'DE / TE', status: 'Cleared' },
  { id: 'p45', number: 62, name: 'Ian Burke', team: 'Varsity', position: 'OL / DL', status: 'Cleared' },
  { id: 'p46', number: 64, name: 'Enzo Aviles', team: 'Varsity', position: 'OL', status: 'Cleared' },
  { id: 'p47', number: 65, name: 'Henry Sabin', team: 'Varsity', position: 'OL', status: 'Cleared' },
  { id: 'p48', number: 68, name: 'Diego Galvan', team: 'Varsity', position: 'OL', status: 'Cleared' },
  { id: 'p49', number: 69, name: 'Delgado Jack', team: 'Varsity', position: 'OL / DL', status: 'Cleared' },
  { id: 'p50', number: 70, name: 'Chris Palacios', team: 'Varsity', position: 'T / G', status: 'Cleared' },
  { id: 'p51', number: 71, name: 'Gianni Marino', team: 'Varsity', position: 'C / OL', status: 'Cleared' },
  { id: 'p52', number: 72, name: 'Daniel Liera', team: 'Varsity', position: 'DT / OL', status: 'Cleared' },
  { id: 'p53', number: 74, name: 'Cervantes Aaden', team: 'Varsity', position: 'DL / OL', status: 'Cleared' },
  { id: 'p54', number: 75, name: 'Lorenzo Nava', team: 'Varsity', position: 'OL', status: 'Cleared' },
  { id: 'p55', number: 76, name: 'Xavier Torres', team: 'Varsity', position: 'NG / T', status: 'Cleared' },
  { id: 'p56', number: 77, name: 'Andres Aranda', team: 'Varsity', position: 'OL / DL', status: 'Cleared' },
  { id: 'p57', number: 78, name: 'Juan Madera', team: 'Varsity', position: 'OL', status: 'Cleared' },
  { id: 'p58', number: 79, name: 'Theron Lopez', team: 'Varsity', position: 'OG / DL', status: 'Cleared' },
  { id: 'p59', number: 82, name: 'Christopher Gutierrez', team: 'Varsity', position: 'WR', status: 'Needs visor' },
  { id: 'p60', number: 88, name: 'Gardy Stephan', team: 'Varsity', position: 'DL / TE', status: 'Cleared' },
  { id: 'p61', number: 91, name: 'Kymarley McKoy', team: 'Varsity', position: 'DT', status: 'Needs knee brace' },
  { id: 'p62', number: 99, name: 'Hasson Franco', team: 'Varsity', position: 'DE', status: 'Cleared' }
];


let checkouts = [
  { id: 'c1', playerId: 'p59', itemId: 'H-201', issued: '2026-02-10', due: '2026-02-20', status: 'On time', notes: '' },
  { id: 'c2', playerId: 'p34', itemId: 'S-101', issued: '2026-02-05', due: '2026-02-12', status: 'Flagged', notes: 'Shoulder pad strap ripped' },
  { id: 'c3', playerId: 'p27', itemId: 'J-41', issued: '2026-02-03', due: '2026-02-10', status: 'Overdue', notes: 'Requesting smaller size' },
  { id: 'c4', playerId: 'p11', itemId: 'A-15', issued: '2026-02-11', due: '2026-02-18', status: 'On time', notes: '' }
];

const teamSelect = document.getElementById('teamSelect');
const summaryEl = document.getElementById('summary');
const inventoryGrid = document.getElementById('inventoryGrid');
const inventorySearch = document.getElementById('inventorySearch');
const checkoutsTableBody = document.querySelector('#checkoutsTable tbody');
const rosterEl = document.getElementById('roster');
const dialog = document.getElementById('checkoutDialog');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutPlayer = document.getElementById('checkoutPlayer');
const checkoutItem = document.getElementById('checkoutItem');
const checkoutDue = document.getElementById('checkoutDue');
const checkoutNotes = document.getElementById('checkoutNotes');

document.getElementById('newCheckoutBtn').addEventListener('click', () => {
  populateCheckoutForm();
  dialog.showModal();
});
document.getElementById('cancelCheckout').addEventListener('click', () => dialog.close());
checkoutForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newCheckout = {
    id: crypto.randomUUID(),
    playerId: checkoutPlayer.value,
    itemId: checkoutItem.value,
    issued: new Date().toISOString().slice(0, 10),
    due: checkoutDue.value,
    status: 'On time',
    notes: checkoutNotes.value.trim()
  };
  checkouts = [newCheckout, ...checkouts];
  const item = inventory.find((i) => i.id === newCheckout.itemId);
  if (item) item.status = 'out';
  dialog.close();
  renderAll();
});

teamSelect.addEventListener('change', renderAll);
inventorySearch.addEventListener('input', renderInventory);

function getTeamFilter() {
  return teamSelect.value;
}

function renderSummary() {
  const team = getTeamFilter();
  const relevantInventory = inventory.filter((item) => team === 'all' || item.team === team);
  const relevantCheckouts = checkouts.filter((co) => {
    const player = players.find((p) => p.id === co.playerId);
    return !player || team === 'all' || player.team === team;
  });
  const overdue = relevantCheckouts.filter((co) => isOverdue(co.due));

  summaryEl.innerHTML = [
    { label: 'Total items', value: relevantInventory.length },
    { label: 'Checked out', value: relevantInventory.filter((i) => i.status === 'out').length },
    { label: 'Available', value: relevantInventory.filter((i) => i.status === 'available').length },
    { label: 'Overdue', value: overdue.length }
  ]
    .map(
      (card) => `
        <div class="summary-card">
          <span>${card.value}</span>
          <small>${card.label}</small>
        </div>`
    )
    .join('');
}

function renderInventory() {
  const team = getTeamFilter();
  const term = inventorySearch.value.toLowerCase();
  const filtered = inventory.filter((item) => {
    const matchesTeam = team === 'all' || item.team === team;
    const matchesTerm = item.name.toLowerCase().includes(term) || item.category.toLowerCase().includes(term);
    return matchesTeam && matchesTerm;
  });

  inventoryGrid.innerHTML = filtered
    .map(
      (item) => `
        <article class="inventory-card">
          <h3>${item.name}</h3>
          <div class="badges">
            <span class="badge">${item.category}</span>
            <span class="badge">Size ${item.size}</span>
            <span class="badge ${item.team === 'JV' ? 'jv' : 'varsity'}">${item.team}</span>
            <span class="badge ${item.status === 'available' ? 'available' : 'out'}">${item.status === 'available' ? 'Available' : 'Checked out'}</span>
          </div>
          <p>${item.condition}</p>
        </article>`
    )
    .join('');
}

function renderCheckouts() {
  const team = getTeamFilter();
  checkoutsTableBody.innerHTML = checkouts
    .filter((co) => {
      const player = players.find((p) => p.id === co.playerId);
      return !player || team === 'all' || player.team === team;
    })
    .map((co) => {
      const player = players.find((p) => p.id === co.playerId);
      const item = inventory.find((i) => i.id === co.itemId);
      const chipClass = co.status === 'On time' ? 'ok' : co.status === 'Flagged' ? 'alert' : 'danger';
      return `
        <tr>
          <td>${player?.name || 'Unknown'} (${player?.team || '—'})</td>
          <td>${item?.name || co.itemId}</td>
          <td>${formatDate(co.issued)}</td>
          <td>${formatDate(co.due)}</td>
          <td><span class="status-chip ${chipClass}">${co.status}</span></td>
          <td>
            <button data-action="return" data-id="${co.id}">Return</button>
            <button data-action="flag" data-id="${co.id}">Flag</button>
          </td>
        </tr>`;
    })
    .join('');

  checkoutsTableBody.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', handleCheckoutAction);
  });
}

function renderRoster() {
  const team = getTeamFilter();
  rosterEl.innerHTML = players
    .filter((player) => team === 'all' || player.team === team)
    .map((player) => {
      const chipClass = player.status.includes('Cleared') ? 'ok' : player.status.includes('Missing') ? 'danger' : 'alert';
      return `
        <article class="roster-card">
          <h4>#${player.number} ${player.name}</h4>
          <small>${player.team} · ${player.position}</small>
          <div class="status-chip ${chipClass}">${player.status}</div>
        </article>`;
    })
    .join('');
}

function handleCheckoutAction(evt) {
  const id = evt.target.dataset.id;
  const action = evt.target.dataset.action;
  checkouts = checkouts.map((co) => {
    if (co.id !== id) return co;
    if (action === 'return') {
      const item = inventory.find((i) => i.id === co.itemId);
      if (item) item.status = 'available';
      return null;
    }
    if (action === 'flag') {
      return { ...co, status: 'Flagged' };
    }
    return co;
  }).filter(Boolean);
  renderAll();
}

function populateCheckoutForm() {
  checkoutPlayer.innerHTML = players
    .map((player) => `<option value="${player.id}">${player.name} (${player.team})</option>`)
    .join('');
  checkoutItem.innerHTML = inventory
    .filter((item) => item.status === 'available')
    .map((item) => `<option value="${item.id}">${item.name} · ${item.team}</option>`)
    .join('');
  checkoutDue.value = new Date().toISOString().slice(0, 10);
  checkoutNotes.value = '';
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function isOverdue(dateStr) {
  if (!dateStr) return false;
  return new Date(dateStr) < new Date();
}

function renderAll() {
  renderSummary();
  renderInventory();
  renderCheckouts();
  renderRoster();
}

renderAll();
