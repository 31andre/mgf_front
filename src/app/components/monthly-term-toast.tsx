"use client";

import { useEffect, useState } from "react";

interface MonthlyTermToastProps {
  term: string;
  duration?: number; // en ms
}

export function MonthlyTermToast({ term, duration = 50000 }: MonthlyTermToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 bg-primary/90 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
      <span className="font-semibold"></span> Thème du mois : {term}
    </div>
  );
}
