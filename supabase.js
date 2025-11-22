const SUPABASE_URL = "https://jiwqdeappkownblynumh.supabase.co";
const SUPABASE_ANON_KEY = "sb_secret_MKqm8J46gndW5rPPwqEHUQ_dUJZ36sl";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabase = supabaseClient;
