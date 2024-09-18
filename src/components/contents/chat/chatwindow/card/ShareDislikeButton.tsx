import { exportIcon, thumbsDown } from '../../../../../assets/images/images';

const ShareDislikeButton = () => {
  return (
    <div className='flex px-0.2 gap-3 pb-3'>
      <button>
        <img
          src={exportIcon}
          alt='export-Icon'
        />
      </button>
      <button>
        <img
          src={thumbsDown}
          alt='thumbsDown'
        />
      </button>
    </div>
  );
};

export default ShareDislikeButton;
