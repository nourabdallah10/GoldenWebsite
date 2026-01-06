# GitHub Pages Deployment Guide with Custom Domain

This guide will walk you through deploying your Golden Furniture website to GitHub Pages and connecting it with your GoDaddy domain `goldenfurniturestore.com`.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js 18+ installed
- Access to your GoDaddy domain management

---

## Step 1: Initialize Git Repository (if not already done)

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Golden Furniture website"
```

---

## Step 2: Create GitHub Repository

1. **Go to GitHub** (https://github.com)
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Repository settings:**
   - **Name:** `GoldenWebsite` (or any name you prefer)
   - **Description:** "Golden Furniture Store Website"
   - **Visibility:** Choose Public (required for free GitHub Pages) or Private (requires GitHub Pro)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. **Click "Create repository"**

---

## Step 3: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/GoldenWebsite.git

# Rename branch to main (if needed)
git branch -M main

# Push code to GitHub
git push -u origin main
```

**Note:** If you're using SSH instead of HTTPS:
```bash
git remote add origin git@github.com:YOUR_USERNAME/GoldenWebsite.git
```

---

## Step 4: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click on "Settings"** (top menu)
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source":**
   - Select **"GitHub Actions"** as the source
5. **Save the settings**

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy your site when you push to the `main` branch.

---

## Step 5: Configure Custom Domain in GitHub

1. **Still in the Pages settings**, scroll to **"Custom domain"**
2. **Enter your domain:** `goldenfurniturestore.com`
3. **Check "Enforce HTTPS"** (this will be available after DNS is configured)
4. **Click "Save"**

This will:
- Create a `CNAME` file in your repository (already created in `public/CNAME`)
- Set up the domain configuration

---

## Step 6: Configure DNS in GoDaddy

Now you need to point your GoDaddy domain to GitHub Pages:

### Option A: Using Apex Domain (goldenfurniturestore.com)

1. **Log in to GoDaddy** (https://www.godaddy.com)
2. **Go to "My Products"** → Find your domain → Click **"DNS"**
3. **Add/Edit DNS Records:**

   **For Apex Domain (goldenfurniturestore.com):**
   
   Add these **A Records** (replace existing if any):
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** `185.199.108.153`
   - **TTL:** 600 seconds (or default)
   
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** `185.199.109.153`
   - **TTL:** 600 seconds
   
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** `185.199.110.153`
   - **TTL:** 600 seconds
   
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** `185.199.111.153`
   - **TTL:** 600 seconds

   **For www subdomain (www.goldenfurniturestore.com):**
   
   Add a **CNAME Record:**
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `YOUR_USERNAME.github.io` (replace with your GitHub username)
   - **TTL:** 600 seconds (or default)

### Option B: Using CNAME (Recommended - Easier)

If GoDaddy supports CNAME flattening (most do):

1. **Add CNAME Record:**
   - **Type:** CNAME
   - **Name:** @ (or leave blank for apex)
   - **Value:** `YOUR_USERNAME.github.io` (replace with your GitHub username)
   - **TTL:** 600 seconds

2. **Add CNAME for www:**
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `YOUR_USERNAME.github.io`
   - **TTL:** 600 seconds

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username (e.g., if your username is `johndoe`, use `johndoe.github.io`)

---

## Step 7: Wait for DNS Propagation

DNS changes can take **15 minutes to 48 hours** to propagate, but usually takes **1-2 hours**.

You can check DNS propagation status at:
- https://www.whatsmydns.net/#CNAME/goldenfurniturestore.com
- https://dnschecker.org/#CNAME/goldenfurniturestore.com

---

## Step 8: Verify Deployment

1. **Check GitHub Actions:**
   - Go to your repository → **"Actions"** tab
   - You should see a workflow run that builds and deploys your site
   - Wait for it to complete (green checkmark)

2. **Check GitHub Pages:**
   - Go to **Settings** → **Pages**
   - You should see: "Your site is live at https://goldenfurniturestore.com"

3. **Test your website:**
   - Visit `https://goldenfurniturestore.com` (may take a few minutes after DNS propagates)
   - Visit `https://www.goldenfurniturestore.com`

---

## Step 9: Enable HTTPS (After DNS is Configured)

1. **Go to repository Settings** → **Pages**
2. **Under "Custom domain"**, check **"Enforce HTTPS"**
3. **Wait a few minutes** for GitHub to provision the SSL certificate

---

## Troubleshooting

### Site Not Loading

1. **Check DNS propagation:**
   ```bash
   # In terminal/command prompt
   nslookup goldenfurniturestore.com
   ```
   Should return GitHub Pages IP addresses (185.199.108.153, etc.)

2. **Check GitHub Actions:**
   - Ensure the workflow completed successfully
   - Check for any build errors

3. **Clear browser cache** and try again

### Build Fails

1. **Check the Actions tab** for error messages
2. **Common issues:**
   - Missing dependencies: Check `package.json`
   - TypeScript errors: Run `npm run lint` locally
   - Build errors: Run `npm run build` locally to test

### Domain Not Working

1. **Verify DNS records** in GoDaddy match the instructions above
2. **Wait longer** - DNS can take up to 48 hours
3. **Check GitHub Pages settings** - ensure custom domain is saved
4. **Verify CNAME file** exists in your repository at `public/CNAME`

### HTTPS Not Available

- Wait 24-48 hours after DNS is configured
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings
- Clear browser cache

---

## Updating Your Website

After the initial setup, updating is simple:

```bash
# Make your changes
# ... edit files ...

# Commit changes
git add .
git commit -m "Update website"

# Push to GitHub
git push origin main
```

GitHub Actions will automatically:
1. Build your site
2. Deploy to GitHub Pages
3. Your site will be live in 1-2 minutes

---

## Important Notes

- **GitHub Pages is free** for public repositories
- **Private repositories** require GitHub Pro ($4/month) for GitHub Pages
- **Custom domains are free** with GitHub Pages
- **HTTPS is automatically provided** by GitHub Pages
- **Builds happen automatically** on every push to `main` branch

---

## Support

If you encounter issues:
1. Check GitHub Actions logs for errors
2. Verify DNS configuration in GoDaddy
3. Check GitHub Pages documentation: https://docs.github.com/en/pages
4. Ensure your repository is public (or you have GitHub Pro)

---

## Summary Checklist

- [ ] Git repository initialized
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled (GitHub Actions source)
- [ ] Custom domain configured in GitHub Pages settings
- [ ] DNS records added in GoDaddy
- [ ] DNS propagated (checked with DNS checker)
- [ ] Website accessible at goldenfurniturestore.com
- [ ] HTTPS enabled and working
- [ ] www subdomain working (optional but recommended)

---

**Congratulations!** Your website should now be live at `https://goldenfurniturestore.com` 🎉

