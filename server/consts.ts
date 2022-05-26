import { env } from "process";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY } = env;

export const supabase: SupabaseClient = createClient(
  REACT_APP_SUPABASE_URL || "",
  REACT_APP_SUPABASE_ANON_KEY || ""
);

export const PORT: number = parseInt(env.PROXY_PORT) || 5000;