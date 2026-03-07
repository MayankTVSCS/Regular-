import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({
    message: "Nothing interesting here."
  });

  response.headers.set("x-dev-hint", "Y29kZSByZXZpZXc="); 
  // base64 of "code review"

  return response;
}