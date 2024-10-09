type TSignCardBtnProps = {
  image?: string;
  text: string;
} & React.ComponentPropsWithoutRef<'button'>;

const SignCardBtn = (props: TSignCardBtnProps) => {
  const { image, text, className, ...rest } = props;

  return (
    <button
      className={`w-full h-[32px] flex justify-center items-center gap-2
        rounded bg-[#F5F5F5] text-sm ${className}`}
      {...rest}
    >
      {image && (
        <img
          src={image}
          alt={text}
          className='w-6 h-6 rounded-full object-cover'
        />
      )}
      {text}
    </button>
  );
};

export default SignCardBtn;
