// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ixktinlgjjxvnfottfdp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4a3Rpbmxnamp4dm5mb3R0ZmRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzA2NzgsImV4cCI6MjA2Mjg0NjY3OH0.SuOSjG8fy-MoRE88lQONFfwv39IPUc6HqxkCLwTRuFs';
export const supabase = createClient(supabaseUrl, supabaseKey);
