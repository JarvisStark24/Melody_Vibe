import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // Create a Supabase client configured with the user's access token.
  const supabase = createMiddlewareClient({ req, res });

  await supabase.auth.getSession();
  return res;
}
