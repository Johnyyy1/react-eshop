export default function Container({ 
  children, 
  fullWidth = false, 
  className = "",
  withGlass = false,
  withPadding = true 
}) {
  return (
    <div className={`
      w-full
      ${withPadding ? 'px-4 sm:px-6 lg:px-8' : ''}
      ${fullWidth ? '' : 'max-w-screen-2xl mx-auto'}
      ${withGlass ? 'glass rounded-2xl border border-white/5' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}