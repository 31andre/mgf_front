"use client";

import { useEffect, useState } from "react";

interface MonthlyTermToastProps {
  term: string;
  duration?: number; // en ms
}

export function MonthlyTermToast({ term, duration = 10000 }: MonthlyTermToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
   <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-primary/90 text-white px-8 py-3 rounded-lg shadow-lg z-50 text-center animate-bounce
  w-[90vw] md:w-auto">
  <span className="font-bold">{term}</span>
</div>



  );
}
