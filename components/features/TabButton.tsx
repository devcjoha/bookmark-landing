
type TabButtonProps = {
  isActive: boolean;
  action: () => void;
  children: React.ReactNode;
};
function TabButton({ action, children, isActive }: TabButtonProps) {

  const baseClasses = `
    lg:w-60 w-80 h-15 border-b border-gray-200 
    flex justify-center items-center relative
    lg:first:border-0 tracking-wider
    first:border-t first:border-gray-200
  `;

  const textClasses = isActive 
    ? "font-medium text-foreground" 
    : "text-gray-400 lg:border-transparent"; 

  const activeBorderMobile = isActive 
    ? 'after:content-[""] after:absolute after:bottom-0 after:h-[3px] after:bg-red-400 after:w-1/2 md:after:w-full'
    : '';

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive} 
      className={`${baseClasses} ${textClasses} ${activeBorderMobile} `} 
      onClick={() => {
        action();
      }}
    >
      {children}
    </button>
  );
}
export default TabButton;