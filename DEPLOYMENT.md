# Aksisfire - Vercel Deployment Guide

Follow these steps to deploy your site to Vercel:

### 1. Push to GitHub
Ensure all your changes (including the new `vercel.json`) are pushed to your GitHub repository.

### 2. Connect to Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **"Add New"** > **"Project"**.
3. Import your `aksis-fire-systems` repository.

### 3. Project Settings
Vercel should automatically detect **Vite** as the framework. If not, ensure these settings:
*   **Framework Preset:** `Vite`
*   **Build Command:** `npm run build`
*   **Output Directory:** `dist`

### 4. Admin Credentials (Optional)
If you want to keep the admin panel secure, ensure you don't share the URL with unauthorized users. Since the authentication is currently hardcoded and uses `localStorage`, it will work out of the box on Vercel.

### 5. Domain Setup
Once the deployment is successful, you can add your custom domain `aksisfire.com.tr` in the **"Settings" > "Domains"** section of your Vercel project.

---
**Note:** The `vercel.json` I added will handle the page refreshes, so you won't get 404 errors when navigating directly to pages like `/products` or `/admin`.
