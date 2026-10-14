import React from 'react';

/**
 * TemuSewa.ID Official Brand Logo Component
 * Menggunakan aset resmi presisi tinggi yang diekstrak langsung dari panduan brand TemuSewa:
 * - Symbol: Handshake location-pin dua figur tersenyum
 * - Wordmark: "Temu" (Navy) + "Sewa" (Green)
 * - Tagline: "Temukan kebutuhan rentalmu."
 * - Dark variant: Kartu navy gelap resmi
 */
export default function Logo({ variant = 'full', className = '', size = 'md' }) {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  };

  const currentHeight = heightClasses[size] || heightClasses.md;

  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/brand/logo-dark.png"
          alt="TemuSewa.ID - Temukan kebutuhan rentalmu."
          className={`${currentHeight} w-auto object-contain drop-shadow-md rounded-2xl hover:brightness-105 transition-all`}
          loading="eager"
        />
      </div>
    );
  }

  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/brand/logo-symbol.png"
          alt="TemuSewa Simbol"
          className={`${currentHeight} w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform`}
          loading="eager"
        />
      </div>
    );
  }

  if (variant === 'wordmark') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/brand/logo-wordmark.png"
          alt="TemuSewa.ID"
          className={`${currentHeight} w-auto object-contain drop-shadow-sm`}
          loading="eager"
        />
      </div>
    );
  }

  // Default: 'full' (Symbol + Wordmark + Tagline)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/brand/logo-full.png"
        alt="TemuSewa.ID - Temukan kebutuhan rentalmu."
        className={`${currentHeight} w-auto object-contain drop-shadow-sm hover:opacity-95 transition-opacity`}
        loading="eager"
      />
    </div>
  );
}
