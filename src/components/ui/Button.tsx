import React from 'react';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary:
    'bg-gradient-to-r from-[#FF6B35] to-[#E91E63] text-white hover:opacity-90 shadow-md hover:shadow-lg border-transparent focus:ring-[#FF6B35]',
    secondary:
    'bg-[#4A90E2] text-white hover:bg-[#357ABD] shadow-sm focus:ring-[#4A90E2]',
    outline:
    'border-2 border-gray-200 bg-white text-gray-700 hover:border-[#FF6B35] hover:text-[#FF6B35] focus:ring-gray-200',
    ghost:
    'bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:ring-gray-200',
    danger: 'bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}>
      
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>);

}