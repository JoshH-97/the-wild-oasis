
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://dmdowvhjrocvqtyljgro.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZG93dmhqcm9jdnF0eWxqZ3JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2ODA5MTIsImV4cCI6MjA0NzI1NjkxMn0.DvmA9iC7a1WOR2zkhwVOIlThbrBGRHgwdwME6YWTyUQ";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase; 