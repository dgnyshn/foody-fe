import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const endpointId = process.env.ROUTER_ENDPOINT_ID;
    const apiKey = process.env.ROUTER_API_KEY;

    if (!endpointId || !apiKey) {
      console.error("Missing Router.so credentials");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Router.so endpoint'ine istek at
    const response = await fetch(
      `https://app.router.so/api/endpoints/${endpointId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Router.so API error:", errorData);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
