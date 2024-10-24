import { ReactNode } from 'react';
import SignErrorMessage from './SignErrorMessage';

type TSignInputFieldProps = React.ComponentProps<'label'> & {
  title?: string;
  children: ReactNode;
  errorMessage?: string;
};

const SignInputField = (props: TSignInputFieldProps) => {
  const { title, children, errorMessage, ...rest } = props;
  return (
    <div className='flex flex-col gap-1'>
      <label
        className='h-[17px] text-[14px] leading-[17px] font-semibold'
        {...rest}
      >
        {title}
      </label>
      {children}
      {errorMessage && <SignErrorMessage message={errorMessage} />}
    </div>
  );
};

export default SignInputField;
