import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");

  if (!key) {
    return NextResponse.json({
      message: "Try harder."
    });
  }

  if (key === "developer") {
    return NextResponse.json({
      secret: "process.env.SECRET_KEY"
    });
  }

  if (key === "process.env.SECRET_KEY") {
    return NextResponse.json({
      answer: "secrets"
    });
  }

  return NextResponse.json({
    message: "Wrong key."
  });
}