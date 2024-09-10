interface IHeader {
  title?: string;
  leftChild?: React.ReactNode;
  rightChild?: React.ReactNode;
}

const Header = ({ title, leftChild, rightChild }: IHeader) => {
  return (
    <header className='flex justify-between w-full h-[56px] px-2 bg-gradient-to-b from-white to-transparent items-center'>
      <div className=''>{leftChild}</div>
      <div className='flex items-center justify-center font-semibold text-black text-lg tracking-[-0.015em]'>
        {title}
      </div>
      <div className=''>{rightChild}</div>
    </header>
  );
};

export default Header;
