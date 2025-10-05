/* ──────────────────────────────────────────────────────────────────────────
   Accounts Page — add SelectedAccountCard + AccountPickerSheet
────────────────────────────────────────────────────────────────────────── */
"use client";

import { useGetMyAccountsQuery } from "@/redux/features/account/accountApi";
import { setSelectedAccountId } from "@/redux/features/account/accountUISlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AccountsPage() {
  const { data, isLoading } = useGetMyAccountsQuery();
  const [openPicker, setOpenPicker] = useState(false);
  const [openWizard, setOpenWizard] = useState(false);
  const dispatch = useDispatch();
  const selectedId = useSelector(
    (s: RootState) => s.accountUI.selectedAccountId
  );

  // প্রথম লোডে কিছুই সিলেক্ট না থাকলে একটি একাউন্ট সিলেক্ট করিয়ে দেই
  useEffect(() => {
    const items = data?.items ?? [];
    if (!selectedId && items.length) {
      const firstReal =
        items.find((a) => a.status === "active" && a.mode === "real") ||
        items[0];
      dispatch(setSelectedAccountId(firstReal._id));
    }
  }, [data, selectedId, dispatch]);

  return (
    <div className="min-h-screen bg-[#0b0e11] text-white">
      <h2>Admin Dashboard (under construction) - Accounts page</h2>
    </div>
  );
}
