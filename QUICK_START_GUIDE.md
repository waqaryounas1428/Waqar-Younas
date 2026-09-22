# 🚀 Quick Start Guide - Run Your Portfolio

## Method 1: Double-Click to Run (Easiest)

**Just double-click `RUN_PROJECT.bat`** in your project folder!

This will:
1. Install dependencies (if needed)
2. Start the development server
3. Open your portfolio at `http://localhost:5173`

---

## Method 2: Using Terminal

### Step 1: Open Terminal
- Press `Ctrl + ~` in VS Code
- Or open Command Prompt/PowerShell

### Step 2: Run Commands
```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

### Step 3: View Your Portfolio
- Open browser and go to: `http://localhost:5173`
- Or click the link shown in terminal

---

## 🛑 Stop the Server

Press `Ctrl + C` in the terminal

---

## 📋 Available Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint
```

---

## 🔧 Troubleshooting

### Port Already in Use
If you see "Port 5173 is already in use":
- Stop other running servers
- Or the app will use a different port (check terminal)

### Dependencies Error
If you see errors about missing packages:
```bash
npm install
```

### Build Errors
If build fails:
```bash
npm run build
```
Check the error messages and fix any issues

---

## 🌐 Access Your Portfolio

**Local Development:**
- URL: `http://localhost:5173`
- Hot reload enabled (changes appear instantly)

**Network Access:**
- Check terminal for network URL
- Access from other devices on same network

---

## ✅ What You'll See

When running successfully:
- ✅ Development server started
- ✅ Portfolio opens in browser
- ✅ All sections visible
- ✅ Navigation working
- ✅ Animations smooth

---

## 🎨 Making Changes

1. Edit any file in `src/` folder
2. Save the file
3. Browser automatically refreshes
4. See changes instantly!

---

**Enjoy building your portfolio!** 🚀
