import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json(
    { error: "I'm a teapot" },
    { status: 418 }
  );

  response.headers.set("x-final", "aGFzaA=="); 
  // base64 of "hash"

  return response;
}