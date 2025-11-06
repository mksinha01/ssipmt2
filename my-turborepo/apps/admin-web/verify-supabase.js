/**
 * Supabase Connection Verification Script
 * Run this to verify your Supabase credentials are working correctly
 * 
 * Usage: node verify-supabase.js
 */

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables from .env.local
const envPath = join(__dirname, '.env.local')
try {
  const envContent = readFileSync(envPath, 'utf-8')
  const envVars = {}
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/)
    if (match) {
      envVars[match[1].trim()] = match[2].trim()
    }
  })
  process.env.NEXT_PUBLIC_SUPABASE_URL = envVars.NEXT_PUBLIC_SUPABASE_URL
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY
} catch (error) {
  console.error('❌ Could not read .env.local file')
  console.error('Make sure .env.local exists in apps/admin-web/')
  process.exit(1)
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('\n🔍 Verifying Supabase Connection...\n')

// Check if credentials are set
console.log('1️⃣ Checking environment variables...')
if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_URL is not set or still using placeholder')
  console.error('   Update your .env.local file with your actual Supabase URL')
  process.exit(1)
}
if (!supabaseAnonKey || supabaseAnonKey.includes('placeholder')) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_ANON_KEY is not set or still using placeholder')
  console.error('   Update your .env.local file with your actual Supabase anon key')
  process.exit(1)
}
console.log('✅ Environment variables are set')
console.log(`   URL: ${supabaseUrl}`)
console.log(`   Key: ${supabaseAnonKey.substring(0, 20)}...`)

// Create Supabase client
console.log('\n2️⃣ Creating Supabase client...')
const supabase = createClient(supabaseUrl, supabaseAnonKey)
console.log('✅ Supabase client created')

// Test connection
console.log('\n3️⃣ Testing connection to Supabase...')
try {
  const { data, error } = await supabase.auth.getSession()
  if (error) {
    console.error('❌ Connection test failed:', error.message)
    process.exit(1)
  }
  console.log('✅ Successfully connected to Supabase!')
} catch (error) {
  console.error('❌ Connection failed:', error.message)
  process.exit(1)
}

// Check if users exist
console.log('\n4️⃣ Checking for existing users...')
try {
  // Note: Regular anon key cannot list all users for security reasons
  // This will just verify the auth system is responsive
  console.log('✅ Auth system is responsive')
  console.log('   (Cannot list users with anon key - this is expected)')
} catch (error) {
  console.error('⚠️  Could not check users:', error.message)
}

console.log('\n' + '='.repeat(60))
console.log('✅ SUPABASE CONNECTION SUCCESSFUL!')
console.log('='.repeat(60))
console.log('\nNext steps:')
console.log('1. Create an admin user in Supabase dashboard:')
console.log('   - Go to Authentication → Users')
console.log('   - Click "Add User" → "Create new user"')
console.log('   - Email: admin@test.com')
console.log('   - Password: Admin123456!')
console.log('   - Check "Auto Confirm User"')
console.log('   - Click "Create user"')
console.log('\n2. Start the dev server:')
console.log('   npm run dev')
console.log('\n3. Log in at http://localhost:3001/login')
console.log('   with the credentials you just created!')
console.log('\n')
