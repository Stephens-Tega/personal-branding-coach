"use client";

export default function Spinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className={`inline-flex items-center justify-center ${sizeClasses[size]}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full animate-spin opacity-70`}
      />
    </div>
  );
}
