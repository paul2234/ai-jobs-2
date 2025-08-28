const createClient = window.supabase.createClient;
const SUPABASE_URL = "https://bprgyyiwxxhovgpvejtv.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwcmd5eWl3eHhob3ZncHZlanR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMzUxMzgsImV4cCI6MjA3MDcxMTEzOH0.hvaMHY1vceASXaalJoengaeIdyB2MVqUilJTBKEYCG0"; // From Supabase settings
const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

export default supabase;