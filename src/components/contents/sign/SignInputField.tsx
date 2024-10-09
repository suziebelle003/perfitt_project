import { ReactNode } from 'react';

type TSignInputFieldProps = React.ComponentProps<'label'> & {
  title?: string;
  children: ReactNode;
};

const SignInputField = (props: TSignInputFieldProps) => {
  const { title, children, ...rest } = props;
  return (
    <div className='flex flex-col gap-1'>
      <label
        className='h-[17px] text-[14px] leading-[17px] font-semibold'
        {...rest}
      >
        {title}
      </label>
      {children}
    </div>
  );
};

export default SignInputField;
