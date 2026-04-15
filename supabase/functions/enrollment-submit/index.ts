const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const payload = await req.json();

    const submission = {
      fullName: String(payload.fullName ?? "").trim(),
      age: String(payload.age ?? "").trim(),
      instrument: String(payload.instrument ?? "").trim(),
      mode: String(payload.mode ?? "").trim(),
      phoneNumber: String(payload.phoneNumber ?? "").trim(),
      email: String(payload.email ?? "").trim(),
      message: String(payload.message ?? "").trim(),
    };

    const missingFields = ["fullName", "age", "instrument", "mode", "phoneNumber", "email"].filter(
      (field) => !submission[field as keyof typeof submission],
    );

    if (missingFields.length > 0) {
      return jsonResponse(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        400,
      );
    }

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbysvm_jmfJvHeVsr9BVRXl5S1pwR7oSDdhN6HeT2Uip4G-3EmJ53CYdr5CWMVHh1XcI/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      },
    );

    const responseText = await response.text();
    const permissionDenied = /You do not have permission to access the requested document/i.test(responseText);

    if (!response.ok || permissionDenied) {
      return jsonResponse(
        {
          success: false,
          error: permissionDenied
            ? "Google Apps Script denied access. Redeploy the web app with access set to Anyone and verify the linked document permissions."
            : `Google Apps Script error: ${responseText.slice(0, 300) || response.statusText}`,
        },
        502,
      );
    }

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unexpected submission error",
      },
      500,
    );
  }
});