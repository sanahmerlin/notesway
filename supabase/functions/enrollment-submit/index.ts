import { corsHeaders } from "npm:@supabase/supabase-js@2.95.3/cors";
import { z } from "npm:zod@3.24.3";

const submissionSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  age: z.string().trim().min(1, "Age is required"),
  instrument: z.string().trim().min(1, "Instrument is required"),
  mode: z.string().trim().min(1, "Mode is required"),
  phoneNumber: z.string().trim().min(1, "Phone number is required"),
  email: z.string().trim().email("Valid email is required"),
  message: z.string().optional().default(""),
});

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
    const parsedBody = submissionSchema.safeParse(payload);

    if (!parsedBody.success) {
      return jsonResponse(
        {
          success: false,
          error: "Invalid enrollment data.",
          fields: parsedBody.error.flatten().fieldErrors,
        },
        400,
      );
    }

    const submission = parsedBody.data;

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
        200,
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