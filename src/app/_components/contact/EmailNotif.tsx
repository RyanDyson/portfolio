"use client";

import { SetStateAction, useEffect, useState } from "react";
import { type Dispatch } from "react";

type Props = {
  isSent?: boolean | null;
  onClose: Dispatch<SetStateAction<boolean | null>>;
};

export function EmailNotif({ isSent, onClose }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isSent !== undefined) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose(null);
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isSent, onClose]);

  if (!visible) return null;

  return isSent == null ? (
    <></>
  ) : (
    <div className="p-4 m-4 fixed bottom-4 right-4 bg-slate-900/70 backdrop-blur-md rounded-md border border-slate-700">
      {isSent ? (
        <p className="text-amber-50">Message sent successfully!</p>
      ) : (
        <p className="text-red-50">
          Failed to send the message, please try again.
        </p>
      )}
    </div>
  );
}
