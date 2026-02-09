/**
 * Reusable Loader component using Tailwind CSS.
 *
 * @param {Object} props
 * @param {'spinner'|'dots'|'ring'|'pulse'} [props.variant='spinner'] - Loader style
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Loader size
 * @param {boolean} [props.overlay=true] - Full-page overlay vs inline
 * @param {string} [props.className] - Additional classes for the container
 */

const Loader = ({
  variant = "spinner",
  size = "md",
  overlay = true,
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const dotSizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2.5 h-2.5",
    lg: "w-3.5 h-3.5",
  };

  const Spinner = () => (
    <div
      className={`${sizeClasses[size]} rounded-full border-2 border-gray-200 border-t-gray-600 animate-spin`}
      style={{ animationDuration: "0.7s" }}
      role="status"
      aria-label="Loading"
    />
  );

  const Dots = () => (
    <div className="flex items-center gap-2" role="status" aria-label="Loading">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${dotSizeClasses[size]} bg-gray-600 rounded-full animate-dot-wave`}
          style={{ animationDelay: `${i * 0.16}s` }}
        />
      ))}
    </div>
  );

  const Ring = () => {
    const dim = size === "sm" ? 24 : size === "md" ? 40 : 56;
    const stroke = size === "lg" ? 3 : 2;
    const r = (dim - stroke) / 2;

    return (
      <div
        className={`${sizeClasses[size]} text-gray-600`}
        role="status"
        aria-label="Loading"
      >
        <svg
          className="animate-spin"
          width={dim}
          height={dim}
          viewBox={`0 0 ${dim} ${dim}`}
          style={{ animationDuration: "0.9s" }}
        >
          <circle
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth={stroke}
            fill="none"
            cx={dim / 2}
            cy={dim / 2}
            r={r}
          />
          <circle
            stroke="currentColor"
            strokeWidth={stroke}
            strokeDasharray={`${r * 1.5} ${r * 4.5}`}
            strokeLinecap="round"
            fill="none"
            cx={dim / 2}
            cy={dim / 2}
            r={r}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "center",
            }}
          />
        </svg>
      </div>
    );
  };

  const Pulse = () => (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gray-600 animate-pulse-soft`}
      role="status"
      aria-label="Loading"
    />
  );

  const loaders = {
    spinner: Spinner,
    dots: Dots,
    ring: Ring,
    pulse: Pulse,
  };

  const LoaderIcon = loaders[variant] ?? Spinner;

  if (overlay) {
    return (
      <div
        id="global-loader"
        className={`fixed inset-0 z-9999 flex items-center justify-center bg-white/10 backdrop-blur-sm ${className}`}
        aria-live="polite"
      >
        <LoaderIcon />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center p-4 ${className}`}
      aria-live="polite"
    >
      <LoaderIcon />
    </div>
  );
};

export default Loader;
