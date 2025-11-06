# 🚀 Quick Login Reference

## Setup Status Checklist

- [ ] Created Supabase project at https://supabase.com
- [ ] Updated `.env.local` with actual Supabase URL and anon key
- [ ] Created admin user in Supabase (Authentication → Users → Add User)
- [ ] Checked "Auto Confirm User" when creating the user
- [ ] Restarted dev server after updating `.env.local`

## Default Test Credentials

After completing Supabase setup, use these credentials:

```
Email:    admin@test.com
Password: Admin123456!
```

*(Or whatever credentials you created in Supabase dashboard)*

## Login URL

**Admin Dashboard Login:**
- http://localhost:3001/login

## Verify Your Setup

Before trying to log in, verify your Supabase connection:

```bash
cd apps/admin-web
npm run verify-supabase
```

This will check:
- ✅ Environment variables are set correctly
- ✅ Supabase URL is valid
- ✅ Connection to Supabase works

## Common Issues

### "Invalid login credentials"
➡️ **Solution**: Make sure you created the user in Supabase dashboard and checked "Auto Confirm User"

### "Failed to fetch"
➡️ **Solution**: Check your `.env.local` has the correct Supabase URL and key (no placeholder values)

### "Email not confirmed"
➡️ **Solution**: In Supabase dashboard, go to Authentication → Users → Click on your user → "Confirm User"

### Environment variables not loading
➡️ **Solution**: Restart the dev server after updating `.env.local`

## Full Setup Instructions

See `SUPABASE_SETUP.md` for detailed step-by-step instructions.
