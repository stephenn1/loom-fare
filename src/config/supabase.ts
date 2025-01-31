import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hqeoienegxyhxzpmhnro.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZW9pZW5lZ3h5aHh6cG1obnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMDExODgsImV4cCI6MjA0Njg3NzE4OH0.FX1LU8forHd-jRk9-AOVz1wp-9dxMqVeennjnU4B_Wc"
);
