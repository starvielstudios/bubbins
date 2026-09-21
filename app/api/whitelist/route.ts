import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  console.log("WHITELIST API HIT");

  try {
    const body = await req.json();

    const {
      xUsername,
      repostUrl,
      walletAddress,
      email,
    } = body;

    if (!xUsername || !walletAddress) {
      return NextResponse.json(
        {
          success: false,
          message: "X username and wallet address are required.",
        },
        { status: 400 }
      );
    }

    const { data: existing, error: existingError } =
      await supabase
        .from("whitelist_applications")
        .select("id")
        .eq("wallet_address", walletAddress)
        .maybeSingle();

    if (existingError) {
      console.error("Existing check error:", existingError);

      return NextResponse.json(
        {
          success: false,
          message: existingError.message,
        },
        { status: 500 }
      );
    }

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: "This wallet has already applied.",
        },
        { status: 409 }
      );
    }

    const { error } = await supabase
      .from("whitelist_applications")
      .insert({
        x_username: xUsername,
        repost_url: repostUrl || null,
        wallet_address: walletAddress,
        email: email || null,
        repost_verified: false,
        status: "pending",
      });

    if (error) {
      console.error("Insert error:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted!",
    });
  } catch (error) {
    console.error("Whitelist API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}