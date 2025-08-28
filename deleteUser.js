import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // 👈 Load .env.local file
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function deleteUser(userId) {
  const { data, error } = await supabaseAdmin.auth.admin.deleteUser(userId);

  if (error) {
    console.error("Error deleting user:", error);
  } else {
    console.log("User deleted:", data);
  }
}

const userIdToDelete = 'c713d9e7-f4b2-430f-920c-2119f6f48ebd'; // Replace with your user ID

deleteUser(userIdToDelete);
