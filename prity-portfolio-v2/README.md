# Prity Singh Portfolio (React + Vite)
## Run
`npm install` then `npm run dev` (build: `npm run build`).
## Edit content
Everything lives in `src/data/content.js`. Empty links render a visible placeholder, never a dead link. Add a project by adding an object to `projects`.
## Assets checklist (put in `public/` ; missing files show placeholders)
- [ ] `resume.pdf`  - [ ] `assets/portrait.webp`
- [ ] `assets/predictx-1.webp`, `water-1.webp`  - [ ] `assets/civic-1.webp`, `civic-2.webp`  - [ ] `assets/healthroot-1.webp`, `healthroot-2.webp`  - [ ] `assets/zerodha-1.webp`
- [ ] Certificate images (set `img` per achievement)
## Contact form
Create a free form at formspree.io, then create `.env` with `VITE_FORMSPREE_ID=yourFormId`. Add the same variable in Vercel.
## GitHub + Vercel
`git init && git add . && git commit -m "init"`, create a GitHub repo, `git remote add origin <url> && git push -u origin main`. In Vercel: Add New Project, import the repo, framework Vite, Deploy.
## Mobile testing
Use browser DevTools device mode (375px, 768px, 1280px) and open the Vercel URL on a real phone.
