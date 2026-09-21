"use client";

import { useState } from "react";
import "./whitelist.css";

export default function WhitelistPage() {
  const [form, setForm] = useState({
    x: "",
    repost: "",
    wallet: "",
    email: "",
    understand: false,
    terms: false,
    updates: false,
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [submitMessage, setSubmitMessage] = useState("");

  const updateField = (
    field: keyof typeof form,
    value: string | boolean
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Remove old error once user starts fixing the form
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Required fields
    if (
      !form.x.trim() ||
      !form.repost.trim() ||
      !form.wallet.trim() ||
      !form.understand ||
      !form.terms
    ) {
      setSubmitStatus("error");
      setSubmitMessage("Please complete all required fields.");
      return;
    }

    try {
      setSubmitStatus("submitting");
      setSubmitMessage("");

      const response = await fetch("/api/whitelist", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          xUsername: form.x.trim(),
          repostUrl: form.repost.trim(),
          walletAddress: form.wallet.trim(),
          email: form.email.trim(),
        }),
      });

      const responseText = await response.text();

      console.log("Whitelist status:", response.status);
      console.log("Whitelist response:", responseText);

      let data: {
        success?: boolean;
        message?: string;
      } = {};

      try {
        data = JSON.parse(responseText);
      } catch {
        data = {
          success: false,
          message:
            responseText ||
            "The server returned an invalid response.",
        };
      }

      if (!response.ok) {
        setSubmitStatus("error");

        setSubmitMessage(
          data.message ||
            "Something went wrong. Please try again."
        );

        return;
      }

      setSubmitStatus("success");

      setSubmitMessage(
        data.message ||
          "Your Bubbins whitelist application has been received!"
      );
    } catch (error) {
      console.error("Whitelist submission error:", error);

      setSubmitStatus("error");

      setSubmitMessage(
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <main className="wl-page">
      <div className="wl-overlay" />

      <section className="wl-main">
        {/* ================================= */}
        {/* TITLE IMAGE                       */}
        {/* ================================= */}

        <div className="wl-copy">
          <img
            src="/whitelist/whitelist-title.png"
            alt="Join the Bubbins Whitelist"
            className="wl-title-image"
          />
        </div>

        {/* ================================= */}
        {/* APPLICATION BUBBLE                */}
        {/* ================================= */}

        <div className="wl-bubble-wrap">
          <svg
            className="wl-bubble-svg"
            viewBox="0 0 520 640"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              {/* OUTER BUBBLE EDGE */}

              <linearGradient
                id="bubbleEdge"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#ffffff"
                  stopOpacity="0.98"
                />

                <stop
                  offset="16%"
                  stopColor="#8eeaff"
                  stopOpacity="0.92"
                />

                <stop
                  offset="35%"
                  stopColor="#c1a7ff"
                  stopOpacity="0.88"
                />

                <stop
                  offset="52%"
                  stopColor="#ffa9ec"
                  stopOpacity="0.84"
                />

                <stop
                  offset="70%"
                  stopColor="#8ce8ff"
                  stopOpacity="0.93"
                />

                <stop
                  offset="86%"
                  stopColor="#d7b5ff"
                  stopOpacity="0.88"
                />

                <stop
                  offset="100%"
                  stopColor="#ffffff"
                  stopOpacity="0.98"
                />
              </linearGradient>

              {/* INSIDE GLASS */}

              <linearGradient
                id="bubbleGlass"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#ffffff"
                  stopOpacity="0.27"
                />

                <stop
                  offset="30%"
                  stopColor="#5ecbff"
                  stopOpacity="0.28"
                />

                <stop
                  offset="70%"
                  stopColor="#236db4"
                  stopOpacity="0.48"
                />

                <stop
                  offset="100%"
                  stopColor="#7259dd"
                  stopOpacity="0.28"
                />
              </linearGradient>
            </defs>

            {/* MAIN BUBBLE */}

            <path
              className="wl-bubble-body"
              d="
                M 112 18

                C 68 17, 38 32, 27 72
                C 17 110, 21 146, 13 192
                C 2 267, 3 354, 15 438
                C 22 487, 10 531, 33 574
                C 53 611, 83 627, 127 630

                C 211 637, 311 637, 397 630

                C 447 627, 482 612, 500 574
                C 520 529, 509 486, 516 440
                C 527 357, 527 269, 516 191
                C 509 146, 514 107, 501 70
                C 487 31, 454 18, 408 18

                C 319 9, 201 9, 112 18

                Z
              "
              fill="url(#bubbleGlass)"
              stroke="url(#bubbleEdge)"
              strokeWidth="8"
            />

            {/* TOP REFLECTION */}

            <path
              className="wl-reflection wl-reflection-top"
              d="
                M 96 52
                C 181 20, 328 19, 418 41
              "
              fill="none"
              stroke="rgba(255,255,255,.75)"
              strokeWidth="13"
              strokeLinecap="round"
            />

            {/* LEFT REFLECTION */}

            <path
              className="wl-reflection wl-reflection-left"
              d="
                M 53 105
                C 24 188, 25 339, 47 451
                C 56 498, 58 538, 80 571
              "
              fill="none"
              stroke="rgba(255,255,255,.65)"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* RIGHT REFLECTION */}

            <path
              className="wl-reflection wl-reflection-right"
              d="
                M 475 110
                C 501 204, 499 353, 477 455
                C 469 500, 466 541, 446 571
              "
              fill="none"
              stroke="rgba(202,150,255,.64)"
              strokeWidth="9"
              strokeLinecap="round"
            />

            {/* BOTTOM REFLECTION */}

            <path
              className="wl-reflection wl-reflection-bottom"
              d="
                M 88 594
                C 191 627, 335 628, 439 598
              "
              fill="none"
              stroke="rgba(165,145,255,.68)"
              strokeWidth="9"
              strokeLinecap="round"
            />
          </svg>

          {/* MOVING LIGHT */}

          <div className="wl-light-sweep" />

          {/* SMALL EDGE BUBBLES */}

          <span className="wl-edge-bubble wl-edge-bubble-1" />
          <span className="wl-edge-bubble wl-edge-bubble-2" />
          <span className="wl-edge-bubble wl-edge-bubble-3" />

          {/* ================================= */}
          {/* FORM                              */}
          {/* ================================= */}

          <form
            className="wl-form"
            onSubmit={handleSubmit}
          >
            <h3>Apply for the Whitelist</h3>

            <p className="wl-form-subtitle">
              A bigger ocean awaits.
            </p>

            {/* X USERNAME */}

            <div className="wl-field">
              <span className="wl-field-icon">
                <img
                  src="/whitelist/x-icon.png"
                  alt="X"
                  className="wl-icon-img"
                />
              </span>

              <input
                type="text"
                placeholder="X Username"
                value={form.x}
                onChange={(e) =>
                  updateField("x", e.target.value)
                }
                disabled={submitStatus === "submitting"}
              />

              <span className="wl-field-end">
                ♙
              </span>
            </div>

            {/* REPOST LINK */}

            <div className="wl-field">
              <span className="wl-field-icon">
                <img
                  src="/whitelist/repost-icon.png"
                  alt="Repost"
                  className="wl-icon-img"
                />
              </span>

              <input
                type="url"
                placeholder="Bubbins Repost Link"
                value={form.repost}
                onChange={(e) =>
                  updateField("repost", e.target.value)
                }
                disabled={submitStatus === "submitting"}
              />

              <span className="wl-field-end">
                ↗
              </span>
            </div>

            {/* SOLANA WALLET */}

            <div className="wl-field">
              <span className="wl-field-icon">
                <img
                  src="/whitelist/solana-icon.png"
                  alt="Solana"
                  className="wl-icon-img"
                />
              </span>

              <input
                type="text"
                placeholder="Solana Wallet Address"
                value={form.wallet}
                onChange={(e) =>
                  updateField("wallet", e.target.value)
                }
                disabled={submitStatus === "submitting"}
              />

              <button
                type="button"
                className="wl-copy-button"
                onClick={() => {
                  if (form.wallet) {
                    navigator.clipboard.writeText(
                      form.wallet
                    );
                  }
                }}
                aria-label="Copy wallet address"
              >
                ▣
              </button>
            </div>

            {/* EMAIL */}

            <div className="wl-field">
              <span className="wl-field-icon">
                <img
                  src="/whitelist/email-icon.png"
                  alt="Email"
                  className="wl-icon-img"
                />
              </span>

              <input
                type="email"
                placeholder="Email (Optional)"
                value={form.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                disabled={submitStatus === "submitting"}
              />

              <span className="wl-field-end">
                ♙
              </span>
            </div>

            {/* ================================= */}
            {/* CHECKBOXES                        */}
            {/* ================================= */}

            <div className="wl-checks">
              <label>
                <input
                  type="checkbox"
                  checked={form.understand}
                  onChange={(e) =>
                    updateField(
                      "understand",
                      e.target.checked
                    )
                  }
                  disabled={submitStatus === "submitting"}
                />

                <span>
                  I understand this is a whitelist
                  application and not a guarantee.
                </span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={form.terms}
                  onChange={(e) =>
                    updateField(
                      "terms",
                      e.target.checked
                    )
                  }
                  disabled={submitStatus === "submitting"}
                />

                <span>
                  I agree to the Bubbins Terms and Conditions.
                </span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={form.updates}
                  onChange={(e) =>
                    updateField(
                      "updates",
                      e.target.checked
                    )
                  }
                  disabled={submitStatus === "submitting"}
                />

                <span>
                  I agree to receive updates from Bubbins.
                </span>
              </label>
            </div>

            {/* ================================= */}
            {/* SUBMIT BUTTON                     */}
            {/* ================================= */}

            <button
              className={`wl-submit ${
                submitStatus === "success"
                  ? "wl-submit-success"
                  : ""
              }`}
              type="submit"
              disabled={
                submitStatus === "submitting" ||
                submitStatus === "success"
              }
            >
              {submitStatus === "submitting" ? (
                <>Submitting...</>
              ) : submitStatus === "success" ? (
                <>✓ Application Submitted</>
              ) : (
                <>
                  Submit Application
                  <span>→</span>
                </>
              )}
            </button>

            {/* ================================= */}
            {/* SUBMISSION MESSAGE                */}
            {/* ================================= */}

            {submitMessage && (
              <p
                className={`wl-submit-message ${
                  submitStatus === "success"
                    ? "success"
                    : "error"
                }`}
              >
                {submitMessage}
              </p>
            )}

            <p className="wl-form-footer">
              Tide goes to those who show up.
            </p>
          </form>
        </div>
      </section>

      {/* ================================= */}
      {/* FOUR BENEFIT CARDS                */}
      {/* ================================= */}

      <section className="wl-benefits">
        <Benefit
          icon="/whitelist/ticket-icon.png"
          title="Early Access"
          text="Purchase from the first Bubbins fish-pack release before public access opens."
        />

        <Benefit
          icon="/whitelist/chest-icon.png"
          title="Exclusive Rewards"
          text="Receive a special tank decoration created for approved whitelist players."
        />

        <Benefit
          icon="/whitelist/crown-icon.png"
          title="Special Roles"
          text="Show your early supporter status on your Bubbins profile."
        />

        <Benefit
          icon="/whitelist/pearl-icon.png"
          title="Founding Membership"
          text="Explore Bubbins before the public launch."
        />
      </section>

      {/* BOTTOM TEXT */}

      <p className="wl-bottom-text">
        SMALL FISH · BIGGER TOMORROWS
      </p>
    </main>
  );
}

/* ================================= */
/* BENEFIT CARD COMPONENT            */
/* ================================= */

function Benefit({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <article className="wl-benefit-card">
      <img
        src={icon}
        alt={title}
        className="wl-benefit-icon-img"
      />

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}