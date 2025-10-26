# Deployment Guide for GitHub Pages

This site is now configured as a **static site** that can be hosted on GitHub Pages! 🎉

## ✅ What Was Configured

1. Added `output: 'export'` to `next.config.js` for static export
2. Created GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment
3. Added `.nojekyll` file to prevent Jekyll processing
4. The build process generates static files in the `out/` directory

## 🚀 Deploy to GitHub Pages (Automatic)

### Step 1: Push to GitHub

If you haven't already, create a GitHub repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit - Smiles in Stain website"
git remote add origin https://github.com/YOUR_USERNAME/smiles-in-stain.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run when you push to `main`

### Step 3: Access Your Site

After the workflow completes (takes 1-2 minutes), your site will be available at:

```
https://YOUR_USERNAME.github.io/smiles-in-stain/
```

## 🔧 Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

### Build the static site:

```bash
npm run build
```

This creates an `out/` folder with all static files.

### Deploy the `out/` folder:

You can deploy the `out/` folder to any static hosting service:

- GitHub Pages (manual: push `out/` to `gh-pages` branch)
- Netlify (drag & drop the `out/` folder)
- Vercel (connect your GitHub repo)
- AWS S3
- Any other static hosting

## 📝 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain:

   ```
   www.smilesinstain.org
   ```

2. Configure DNS settings with your domain provider:

   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. Enable custom domain in GitHub Pages settings

## 🔄 Updates

Every time you push to the `main` branch, GitHub Actions will automatically rebuild and deploy your site!

```bash
# Make changes to your site
git add .
git commit -m "Update content"
git push
# Site will automatically redeploy!
```

## 🧪 Test Locally

To test the static build locally:

```bash
# Build the site
npm run build

# Serve the out folder (install serve if needed)
npx serve out

# Open http://localhost:3000
```

## 📊 Build Output

The static build includes:

- HTML files for all pages
- Optimized CSS and JavaScript
- All assets from the `public/` folder
- Fully functional single-page application

Total size: ~83 KB (very lightweight!)
