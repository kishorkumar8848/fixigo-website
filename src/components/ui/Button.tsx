"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "glass" | "glow" | "eco";
  size?: "sm" | "md" | "lg" | "icon";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  external?: boolean;
}

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  href,
  icon,
  iconPosition = "right",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none overflow-hidden rounded-full";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-md shadow-slate-950/10 dark:shadow-slate-50/5",
    secondary:
      "border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-slate-50 shadow-sm",
    ghost:
      "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/60 dark:hover:text-slate-100",
    glass:
      "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 shadow-lg dark:border-slate-800/40 dark:bg-slate-900/30 dark:hover:bg-slate-900/50",
    glow:
      "bg-gradient-to-r from-[#1D58F6] to-blue-500 text-white shadow-lg shadow-blue-500/20 hover:from-[#1444c9] hover:to-blue-600 hover:shadow-blue-500/30",
    eco:
      "bg-gradient-to-r from-sky-500 to-[#1D58F6] text-white shadow-lg shadow-blue-500/20 hover:from-sky-600 hover:to-[#1444c9] hover:shadow-blue-500/30",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    icon: "h-10 w-10 p-0 rounded-lg",
  };

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </span>
  );

  const innerClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={innerClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <MotionLink
        href={href}
        className={innerClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={innerClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
