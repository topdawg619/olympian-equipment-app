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
  { id: 'p1', name: 'Henry Sabin', number: 65, team: 'Varsity', position: 'OL', status: 'Cleared' },
  { id: 'p2', name: 'Gio Ware', number: 34, team: 'Varsity', position: 'WR/KR', status: 'Cleared' },
  { id: 'p3', name: 'Christopher Gutierrez', number: 82, team: 'Varsity', position: 'WR', status: 'Needs visor' },
  { id: 'p4', name: 'Juan Madera', number: 78, team: 'Varsity', position: 'OL', status: 'Cleared' },
  { id: 'p5', name: 'Kymarley McKoy', number: 91, team: 'Varsity', position: 'DT', status: 'Needs knee brace' },
  { id: 'p6', name: 'Xavier Torres', number: 76, team: 'Varsity', position: 'NG', status: 'Cleared' },
  { id: 'p7', name: 'Amarii Oehmke', number: 40, team: 'Varsity', position: 'LB', status: 'Missing thigh pads' },
  { id: 'p8', name: 'Isaac Castro', number: 25, team: 'Varsity', position: 'WR', status: 'Cleared' },
  { id: 'p9', name: 'Devin Fuller', number: 28, team: 'JV', position: 'RB/LB', status: 'Cleared' },
  { id: 'p10', name: 'Dillan Durruthy', number: 29, team: 'JV', position: 'RB', status: 'Needs new helmet' },
  { id: 'p11', name: 'Jayce Reimer', number: 37, team: 'JV', position: 'RB', status: 'Cleared' },
  { id: 'p12', name: 'Enzo Aviles', number: 64, team: 'JV', position: 'OL', status: 'Missing girdle' }
];

let checkouts = [
  { id: 'c1', playerId: 'p3', itemId: 'H-201', issued: '2026-02-10', due: '2026-02-20', status: 'On time', notes: '' },
  { id: 'c2', playerId: 'p7', itemId: 'S-101', issued: '2026-02-05', due: '2026-02-12', status: 'Flagged', notes: 'Shoulder pad strap ripped' },
  { id: 'c3', playerId: 'p10', itemId: 'J-41', issued: '2026-02-03', due: '2026-02-10', status: 'Overdue', notes: 'Requesting smaller size' },
  { id: 'c4', playerId: 'p9', itemId: 'A-15', issued: '2026-02-11', due: '2026-02-18', status: 'On time', notes: '' }
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
