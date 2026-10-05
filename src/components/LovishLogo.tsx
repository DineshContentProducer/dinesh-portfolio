export function LovishLogo({ className = "w-11 h-11 text-white" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lovish Brand Logo"
    >
      {/* Left curved wing */}
      <path d="M 43 18 C 21 18 8 32 8 50 C 8 68 21 82 43 82 C 35 73 31 62 31 50 C 31 38 35 27 43 18 Z" />
      {/* Right curved wing */}
      <path d="M 57 18 C 79 18 92 32 92 50 C 92 68 79 82 57 82 C 65 73 69 62 69 50 C 69 38 65 27 57 18 Z" />
    </svg>
  );
}
