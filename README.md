# Olympian Equipment Tracker

Prototype web app to help the Olympian High School football program (JV + Varsity) keep tabs on helmets, pads, jerseys, and other gear. Everything is client-side so it can be hosted on GitHub Pages with zero backend.

## Features
- Team switcher for JV vs Varsity
- Inventory list with size, condition, and availability badges
- Checkout queue showing who has what, due dates, and condition notes
- Player roster cards with status chips (Cleared / Needs Attention)
- Quick actions: mark items returned, flag damage, assign new checkout
- Data stored in-memory for demo (can persist to localStorage if needed)

## Running locally
```bash
cd projects/olympian-equipment-app
python3 -m http.server 8080
# visit http://localhost:8080
```

## Deploying to GitHub Pages
1. Create a public repo (e.g., `topdawg619/olympian-equipment-app`).
2. Push the contents of this folder to `main`.
3. In repository settings → Pages, choose `Deploy from branch`, select `main` and `/root`.
4. GitHub Pages will serve the prototype at `https://<user>.github.io/olympian-equipment-app/`.

## Next steps
- Hook up Supabase/Firebase for real logins + persistence.
- Add QR codes to items so coaches/players can check gear in/out from phones.
- Generate CSV or PDF audit reports for end-of-season reconciliation.

## Demo data
- Players populated with the 2025-26 Olympian Varsity roster (Jayden Fuentes, Juan Neo Ruiz, Gio Ware, Dillan Durruthy, etc.).
- Inventory + checkout rows simulate helmets, pads, jerseys, and practice pants with live statuses.
