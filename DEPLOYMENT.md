# Deploying to Vercel

## Quick Deploy (Recommended)

1. **Push to GitHub** (if you haven't already):
   ```bash
   cd wrespo-website
   git init
   git add .
   git commit -m "Initial commit - Wrespo.ai website"
   git branch -M main
   # Create a repo on GitHub, then:
   git remote add origin https://github.com/YOUR-USERNAME/wrespo-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login (use your GitHub account for easy integration)
   - Click "Add New Project"
   - Import your `wrespo-website` repository
   - Vercel will auto-detect it's a Next.js project
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

## Custom Domain Setup

Once deployed, to add your custom domain (wrespo.ai):

1. In your Vercel project dashboard, go to **Settings → Domains**
2. Add `wrespo.ai`
3. Follow Vercel's instructions to update your domain's DNS records
4. Also add `www.wrespo.ai` (Vercel will auto-redirect)

## Environment Variables

If you need to add API keys or environment variables:

1. In Vercel dashboard, go to **Settings → Environment Variables**
2. Add any keys you need (Google Analytics, Meta Pixel, form endpoints, etc.)
3. Redeploy for changes to take effect

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Pull requests get their own preview URLs
- Rollback to any previous deployment with one click

## Performance

Your site should achieve:
- Lighthouse Score: 90+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

Vercel automatically optimizes:
- Image optimization
- Edge caching
- Global CDN
- Automatic compression

## Custom Configurations

The website is already optimized for Vercel, but you can customize:
- `vercel.json` - Build and routing configuration
- `next.config.js` - Next.js specific settings
- Environment variables in Vercel dashboard

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
