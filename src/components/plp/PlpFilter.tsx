import filter from '../../assets/images/filter.svg';
const PlpFilter = () => {
  return (
    <>
      <div className='flex flex-row gap-1'>
        <td>
          <select className='font-medium text-sm text-[#808080] pr-1.5)]'>
            <option>최신 상품순</option>
          </select>
        </td>
        <img src={filter}></img>
      </div>
    </>
  );
};
export default PlpFilter;
