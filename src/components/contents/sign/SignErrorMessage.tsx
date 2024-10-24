type TSignErrorMessageProps = {
  message?: string;
  className?: string;
};

const SignErrorMessage = ({ message, className }: TSignErrorMessageProps) => {
  return <div className={`text-[13px] leading-4 text-[#EF4444] ${className}`}>{message}</div>;
};

export default SignErrorMessage;
