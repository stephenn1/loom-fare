"use client";
import React from "react";

export default function SendEmail() {
  return (
    <div>
      <button
        onClick={async () => {
          await fetch("/api/email", { method: "POST" });
        }}
      >
        Send Email
      </button>
    </div>
  );
}
