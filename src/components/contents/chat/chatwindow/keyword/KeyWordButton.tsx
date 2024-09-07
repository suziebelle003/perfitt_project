interface IKeywordProps {
  text: string;
}

const KeyWordButton = ({ text }: IKeywordProps) => {
  // onClick시 button UI 바뀌는 것 어떻게 구현?
  return (
    <>
      <button
        className='px-4 py-2 text border rounded-full'
        onClick={() => {}}
      >
        {text}
      </button>
    </>
  );
};
export default KeyWordButton;
