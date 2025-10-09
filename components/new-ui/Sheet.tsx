// /components/ui/Sheet.tsx
/* ────────── bottom drawer (no modal) ────────── */
"use client";
import { ReactNode, useEffect } from "react";

export default function Sheet({
  open,
  onClose,
  title,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  // close on ESC
  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* panel */}
      <div
        className={`absolute inset-x-0 bottom-0 mx-auto w-full max-w-2xl translate-y-full rounded-t-2xl
          bg-[#0E1014] border-t border-white/10 p-4 shadow-2xl transition-transform
          ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        {title && <div className="mb-3 text-white/80">{title}</div>}
        <div>{children}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}
