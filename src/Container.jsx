export default function Container({ children, fullWidth = false, className = "" }) {
    return (
      <div className={`w-full px-4 sm:px-6 lg:px-8 ${fullWidth ? "" : "max-w-screen-2xl mx-auto"} ${className}`}>
        {children}
      </div>
    );
  }