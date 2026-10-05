export function LovishAvatar({ className = "w-14 h-14 rounded-xl" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-tr from-[#1a0800] via-[#3a1403] to-[#d95d00] shrink-0 shadow-inner flex items-center justify-center ${className}`}
    >
      {/* Warm studio backdrop glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#f97316_0%,transparent_60%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#ff8a00_0%,transparent_50%)] opacity-60" />

      {/* Styled vector portrait matching Lovish in sunglasses and golden backlight */}
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full object-cover relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Skin and rim light gradients */}
          <linearGradient id="faceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb07c" />
            <stop offset="60%" stopColor="#d9825b" />
            <stop offset="100%" stopColor="#874122" />
          </linearGradient>

          <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8533" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffab66" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c170d" />
            <stop offset="50%" stopColor="#180e09" />
            <stop offset="100%" stopColor="#0a0503" />
          </linearGradient>
        </defs>

        {/* Shoulders & Dark Crewneck T-shirt */}
        <path
          d="M 15 120 C 15 96 36 86 60 86 C 84 86 105 96 105 120 Z"
          fill="#111111"
        />
        {/* T-shirt collar line */}
        <path
          d="M 46 88 C 54 94 66 94 74 88"
          stroke="#262626"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Neck */}
        <path
          d="M 48 68 L 48 90 C 56 94 64 94 72 90 L 72 68 Z"
          fill="url(#faceGrad)"
        />
        {/* Neck shadow under jaw */}
        <path
          d="M 48 68 C 55 76 65 76 72 68 L 72 73 C 65 80 55 80 48 73 Z"
          fill="#6b2f15"
          opacity="0.6"
        />

        {/* Head / Face Base */}
        <path
          d="M 38 46 C 38 30 50 25 60 25 C 70 25 82 30 82 46 C 82 65 72 75 60 75 C 48 75 38 65 38 46 Z"
          fill="url(#faceGrad)"
        />

        {/* Ears */}
        <ellipse cx="37" cy="48" rx="4" ry="7" fill="#c7734e" />
        <ellipse cx="83" cy="48" rx="4" ry="7" fill="#ff9955" />

        {/* Hair - Textured top and sides */}
        <path
          d="M 36 38 C 36 22 46 16 60 16 C 74 16 84 22 84 38 C 84 41 82 43 80 40 C 78 30 73 24 60 24 C 47 24 42 30 40 40 C 38 43 36 41 36 38 Z"
          fill="url(#hairGrad)"
        />
        <path
          d="M 39 30 C 44 21 54 18 64 19 C 72 20 80 24 81 29 C 75 24 66 22 57 23 C 49 24 43 27 39 30 Z"
          fill="#e66f22"
          opacity="0.4"
        />

        {/* Beard & Mustache Stubble */}
        <path
          d="M 44 54 C 44 68 51 74 60 74 C 69 74 76 68 76 54 C 74 58 70 60 67 61 C 65 67 55 67 53 61 C 50 60 46 58 44 54 Z"
          fill="#1c0f08"
          opacity="0.9"
        />
        {/* Subtle lips */}
        <path d="M 54 64 Q 60 66 66 64" stroke="#873c1d" strokeWidth="2" strokeLinecap="round" />

        {/* Sleek Dark Sunglasses */}
        <g>
          {/* Bridge */}
          <rect x="56" y="44" width="8" height="3" rx="1.5" fill="#0d0d0d" />
          {/* Left Lens Frame & Dark Tint */}
          <rect x="40" y="40" width="17" height="12" rx="4" fill="#0a0a0a" />
          <rect x="41" y="41" width="15" height="10" rx="3" fill="#141414" />
          {/* Left lens glare */}
          <path d="M 43 43 L 50 43 L 45 49 L 43 49 Z" fill="#ffffff" opacity="0.25" />

          {/* Right Lens Frame & Dark Tint */}
          <rect x="63" y="40" width="17" height="12" rx="4" fill="#0a0a0a" />
          <rect x="64" y="41" width="15" height="10" rx="3" fill="#141414" />
          {/* Right lens sunset rim reflection */}
          <path d="M 66 43 L 74 43 L 70 49 L 66 49 Z" fill="#ff9f43" opacity="0.35" />
        </g>

        {/* Warm Golden/Orange Rim light on edge */}
        <path
          d="M 81 32 C 84 42 84 56 77 66 C 75 64 74 62 76 56 C 79 48 78 38 75 32 Z"
          fill="#ff9e3b"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}
