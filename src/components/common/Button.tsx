interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
  }
  
  const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    onClick,
    disabled = false,
    className = '',
    type = 'button'
  }: ButtonProps) => {
    const baseStyles = 'rounded-lg font-medium transition-colors duration-200';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
    };
  
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
      >
        {children}
      </button>
    );
  };
  
  export default Button;