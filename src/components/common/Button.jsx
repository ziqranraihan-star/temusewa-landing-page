import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-xl";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
    xl: "px-8 py-4 text-lg gap-3"
  };

  const variantStyles = {
    primary: "bg-[#18A766] text-white hover:bg-[#138A53] shadow-md hover:shadow-lg hover:shadow-emerald-500/20 glow-green",
    secondary: "border-2 border-[#0D2C54] text-[#0D2C54] hover:bg-[#0D2C54] hover:text-white bg-white/80 backdrop-blur-sm",
    white: "bg-white text-[#0D2C54] hover:bg-slate-100 shadow-md",
    outlineWhite: "border-2 border-white text-white hover:bg-white hover:text-[#0D2C54]",
    ghost: "text-[#18A766] hover:bg-emerald-50 hover:text-[#138A53] bg-transparent",
    navy: "bg-[#0D2C54] text-white hover:bg-[#081E3A] shadow-md hover:shadow-navy-500/20"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span>{children}</span>
      {withArrow && <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />}
    </button>
  );
}
