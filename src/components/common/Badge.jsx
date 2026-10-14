import React from 'react';

export default function Badge({ children, variant = 'neutral', size = 'sm', className = '' }) {
  const sizeStyles = {
    xs: "px-2.5 py-0.5 text-[10px] font-medium tracking-wide",
    sm: "px-3 py-1 text-xs font-semibold tracking-wide",
    md: "px-4 py-1.5 text-sm font-semibold"
  };

  const variantStyles = {
    green: "bg-emerald-50 text-[#18A766] border border-emerald-200/80",
    emerald: "bg-emerald-500 text-white font-bold",
    navy: "bg-[#0D2C54]/10 text-[#0D2C54] border border-[#0D2C54]/20",
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
    amber: "bg-amber-50 text-amber-700 border border-amber-200",
    purple: "bg-purple-50 text-purple-700 border border-purple-200",
    neutral: "bg-slate-100 text-slate-700 border border-slate-200"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
