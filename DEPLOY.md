# Run and deploy

## Local dev
```bash
# Node 20+ recommended
node -v      # should be v20.x
npm -v

# from the project root
npm install
npm run dev
# open http://localhost:3000
```

## Production build (local check)
```bash
npm run build
npm start    # serves the production build on port 3000
```

## Deploy to Vercel (fastest path)
```bash
# once: install CLI
npm i -g vercel
vercel login

# from the project root
vercel --confirm          # creates a Preview deployment (shareable URL)
vercel --prod --confirm   # promotes to Production
```
Or use the dashboard:

### Push the repo to GitHub:
```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/YOUR-USER/aaliyan-portfolio.git
git push -u origin main
```

In Vercel: New Project → Import from GitHub → aaliyan-portfolio → Deploy.

Framework: detected as Next.js (no custom settings needed).

Every PR automatically gets a Preview URL for quick review.

## Optional env and assets
If you add analytics later: set `NEXT_PUBLIC_GA_ID` in Vercel → Project → Settings → Environment Variables → redeploy.

Put your resume at `public/resume.pdf` so the button works.

Replace images in `public/images/*` with the same filenames to swap visuals quickly.

## Quick troubleshooting
If you see a stale cache or build weirdness:

```powershell
# Windows PowerShell
Remove-Item -Recurse -Force .next, node_modules
npm cache clean --force
npm install
npm run dev
```

If animations error with React 19: ensure the Framer Motion usage stays in client components and imports named exports (no `export *` barrels).

If images do not show: confirm filenames and cases match exactly.
