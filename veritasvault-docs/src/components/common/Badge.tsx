import type React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ variant = "default", size = "md", children, className }) => {
  const variantClasses = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    primary: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    secondary: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    danger: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 rounded",
    md: "text-sm px-2.5 py-0.5 rounded",
    lg: "text-base px-3 py-1 rounded-md",
  }

  return (
    <span className={cn("inline-flex items-center font-medium", variantClasses[variant], sizeClasses[size], className)}>
      {children}
    </span>
  )
}

export default Badge
