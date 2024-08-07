import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabaseUrl = "https://dslmgbyrouwuwsmptrya.supabase.co";
const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzbG1nYnlyb3V3dXdzbXB0cnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NzE2NDksImV4cCI6MjAzODQ0NzY0OX0.VqiNo6VmplRt4RRWdIJtor8jLFjwvjmdCriyrwbP2-Q"
);

export default supabase;
