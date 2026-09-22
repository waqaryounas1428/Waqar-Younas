# Deployment Guide - Vercel

## Prerequisites
- Git installed on your machine
- GitHub account
- Vercel account (sign up at https://vercel.com)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio ready for deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"
   - Your site will be live in minutes!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Build Configuration

The project is configured with:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Environment Variables

If you need environment variables:
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables (e.g., API keys)

## Custom Domain

To add a custom domain:
1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests create preview deployments automatically

## Local Testing Before Deployment

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Build Fails
- Check all imports are correct
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

### 404 Errors
- The `vercel.json` file handles SPA routing
- All routes redirect to index.html

### Images Not Loading
- Ensure images are in the `public` folder or imported correctly
- Check image paths are relative

## Performance Optimization

Your site includes:
- ✅ Optimized images
- ✅ Code splitting
- ✅ Minified CSS/JS
- ✅ Fast CDN delivery via Vercel

## Support

For issues:
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev/guide/

---

**Your portfolio is now ready for deployment! 🚀**
