import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://riswkvukhtjrofcigqjc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpc3drdnVraHRqcm9mY2lncWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NTIzMDMsImV4cCI6MjAzNTUyODMwM30.p2SA01rLdeX2p2tB5fPeEw_JPpOc7cBPqaV7AxT5lB4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
