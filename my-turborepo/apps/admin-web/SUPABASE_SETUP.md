# 🔐 Supabase Setup Guide for Admin Dashboard

## Quick Setup (5 minutes)

### Step 1: Create Supabase Project

1. Go to **https://supabase.com/**
2. Click **"Start your project"** or **"New Project"**
3. Sign in with GitHub (or create account)
4. Click **"New Project"**
5. Fill in:
   - **Name**: `civic-voice-dev` (or any name)
   - **Database Password**: Save this! (e.g., `DevPassword123!`)
   - **Region**: Choose closest to you
6. Click **"Create new project"**
7. ⏳ Wait 2-3 minutes for project to set up

### Step 2: Get Your Credentials

Once your project is ready:

1. Click **"Project Settings"** (gear icon in sidebar)
2. Click **"API"** in the left menu
3. You'll see:
   - **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon/public key**: `eyJhbGc...` (long string)

### Step 3: Update Environment Variables

1. Open file: `apps/admin-web/.env.local`
2. Replace the placeholder values:

```bash
# Replace with YOUR actual Supabase values
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...your-actual-key...
```

3. **Save the file**

### Step 4: Create Admin User

1. In Supabase dashboard, click **"Authentication"** in sidebar
2. Click **"Users"** tab
3. Click **"Add User"** button (top right)
4. Select **"Create new user"**
5. Enter:
   - **Email**: `admin@test.com` (or your preferred email)
   - **Password**: `Admin123456!` (or your preferred password)
   - **Auto Confirm User**: ✅ Check this box!
6. Click **"Create user"**

**Save these credentials!** You'll use them to log in.

### Step 5: Restart Dev Server

1. In VS Code terminal, press `Ctrl+C` to stop the server
2. Run again:
   ```bash
   cd "c:\A SSD NEW WIN\code\ssipmt2\my-turborepo"
   npm run dev
   ```

### Step 6: Log In! 🎉

1. Open browser to **http://localhost:3001/login**
2. Enter your credentials:
   - Email: `admin@test.com`
   - Password: `Admin123456!`
3. Click **"Sign in"**
4. You should be redirected to the dashboard!

---

## Troubleshooting

### "Invalid login credentials"
- Make sure you checked **"Auto Confirm User"** when creating the user
- OR go to Authentication → Users, find your user, and click "Confirm User"

### "Failed to fetch" or network errors
- Check that your `.env.local` has the correct URL and key
- Make sure there are no extra spaces in the environment variables
- Restart the dev server after changing `.env.local`

### "Email not confirmed"
- In Supabase dashboard, go to Authentication → Users
- Click on your user
- Click **"Confirm User"** button

---

## Default Test Credentials (After Setup)

Once you've completed the setup, use these credentials:

| Field | Value |
|-------|-------|
| **Email** | `admin@test.com` |
| **Password** | `Admin123456!` |

**Important**: Change these for production use!

---

## Next Steps

After logging in successfully:
- Explore the dashboard interface
- Set up the database schema (see main SETUP.md)
- Configure the API backend with same Supabase credentials
- Create additional admin users if needed

---

## Additional Users

To create more admin users:
1. Supabase Dashboard → Authentication → Users
2. Click "Add User" → "Create new user"
3. Enter email and password
4. Check "Auto Confirm User"
5. Click "Create user"

---

## Security Notes

- ⚠️ Never commit `.env.local` to git (already in .gitignore)
- ⚠️ Use different credentials for production
- ⚠️ Enable Row Level Security (RLS) on your Supabase tables
- ⚠️ Set up email confirmation for production environments

---

**Need help?** Check the main `SETUP.md` or ask your team!
