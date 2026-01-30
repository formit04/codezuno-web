"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const locale = useLocale();
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg", bracket: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl", bracket: "text-xl" },
    lg: { icon: "w-14 h-14", text: "text-3xl", bracket: "text-2xl" },
  };

  const s = sizes[size];

  return (
    <Link href={`/${locale}/`} className={`flex items-center gap-2 group ${className}`}>
      {/* Logo Icon - stylized code brackets with Z */}
      <div className={`${s.icon} relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            className="fill-gradient"
            fill="url(#logoGradient)"
          />

          {/* Left bracket */}
          <path
            d="M14 12L10 20L14 28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right bracket */}
          <path
            d="M26 12L30 20L26 28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Z letter */}
          <path
            d="M16 15H24L16 25H24"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex items-baseline">
          <span className={`${s.text} font-bold text-gray-900 group-hover:text-primary-600 transition-colors`}>
            Code
          </span>
          <span className={`${s.text} font-bold gradient-text`}>
            zuno
          </span>
        </div>
      )}
    </Link>
  );
}
