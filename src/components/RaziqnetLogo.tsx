import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

export const RaziqnetLogo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  const textDark = variant === 'dark' ? '#FFFFFF' : '#0F172A';
  const textCyan = '#2EA8FF';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${heights[size]} ${className}`}>
      <svg
        viewBox="0 0 280 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="Raziqnet Logo"
      >
        {/* Main Brand Text: Raziq in Dark Slate / White, Net in Cyan Blue */}
        <text
          x="10"
          y="48"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="800"
          fontSize="46"
          letterSpacing="-0.5px"
          fill={textDark}
        >
          Raziq
        </text>
        <text
          x="142"
          y="48"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="800"
          fontSize="46"
          letterSpacing="-0.5px"
          fill={textCyan}
        >
          Net
        </text>

        {/* Dynamic Swoosh Accent Underline mirroring the official brand logo */}
        <path
          d="M 12 58 C 45 74, 95 56, 150 56 C 205 56, 245 70, 270 60 C 235 62, 185 68, 135 60 C 85 52, 45 68, 12 58 Z"
          fill="url(#cyanSwooshGrad)"
        />
        <path
          d="M 35 68 C 80 78, 140 68, 260 70 C 210 74, 150 78, 80 74 C 55 72, 42 70, 35 68 Z"
          fill={variant === 'dark' ? '#38BDF8' : '#0F172A'}
          opacity="0.85"
        />

        {/* WiFi Signal Arc Icon above Net */}
        <path
          d="M 238 12 A 16 16 0 0 1 262 12"
          stroke={textCyan}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 243 18 A 10 10 0 0 1 257 18"
          stroke={textCyan}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="250" cy="24" r="2.5" fill={textCyan} />

        {/* Gradients */}
        <defs>
          <linearGradient id="cyanSwooshGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#2EA8FF" />
            <stop offset="100%" stopColor="#0072FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
