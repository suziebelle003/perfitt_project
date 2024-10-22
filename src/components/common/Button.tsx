const Button = (props: React.ComponentPropsWithoutRef<'button'>) => {
  const { className, children, ...rest } = props;

  return (
    <button
      className={`w-full p-4 rounded bg-black text-base text-white font-semibold ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
