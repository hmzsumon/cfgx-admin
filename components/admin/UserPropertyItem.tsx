/* ────────── imports ────────── */
"use client";
import React from "react";

/* ────────── component ────────── */
export default function UserPropertyItem({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-2 border-b border-white/5 py-2 last:border-none">
      <div className="col-span-1 text-xs text-white/50">{label}</div>
      <div className="col-span-2 text-sm text-white/90 break-all">
        {value ?? "-"}
      </div>
    </div>
  );
}
