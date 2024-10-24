type TSignInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
  className?: string;
};

const SignInput = ({ className, ...rest }: TSignInputProps) => {
  return (
    <input
      className={`w-full px-4 py-3.5 border border-[#E4E4E7] rounded
        text-[16px] leading-5 font-semibold placeholder-[#A1A1AA] ${className}`}
      {...rest}
    />
  );
};

// SignInput.displayName = 'SignInput';

export default SignInput;
