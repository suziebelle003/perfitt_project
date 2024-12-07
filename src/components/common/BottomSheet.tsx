import { ReactNode, useEffect } from 'react';
import { motion, PanInfo, useAnimation, useDragControls } from 'framer-motion';

type TBottomSheetProps = {
  children: ReactNode;
  showBar: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const BottomSheet = ({ children, showBar, isOpen, setIsOpen }: TBottomSheetProps) => {
  const controls = useAnimation();
  const dragControls = useDragControls();

  useEffect(() => {
    if (isOpen) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isOpen]);

  const startDrag = (event: React.PointerEvent) => {
    dragControls.start(event, { snapToCursor: false });
  };

  const handleDragEnd = (_event: PointerEvent, { point, velocity }: PanInfo): void => {
    if (isOpen && (velocity.y > 20 || (velocity.y >= 0 && point.y > 45))) {
      controls.start('hidden');
      setIsOpen(false);
    } else if (!isOpen && (velocity.y < -20 || (velocity.y < 0 && point.y < -45))) {
      setIsOpen(true);
      controls.start('visible');
    } else {
      controls.start(isOpen ? 'visible' : 'hidden');
    }
  };

  const handleBackClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    controls.start('hidden');
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-300
          ${isOpen ? 'bg-[#00000055]' : 'opacity-0 pointer-events-none'}`}
        onClick={handleBackClick}
      />
      <motion.div
        animate={controls}
        initial='hidden'
        className='absolute left-0 w-full h-fit max-h-screen flex flex-col z-20 select-none
          rounded-t-3xl bg-white shadow-[0_-1px_4px_0_#00000026]'
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        variants={{
          hidden: { bottom: showBar ? '107px' : 0, y: '100%' },
          visible: { bottom: 0, y: 0 },
        }}
        drag='y'
        dragControls={dragControls}
        dragListener={isOpen ? false : true}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={!isOpen ? 1 : 0.4}
        onDragEnd={handleDragEnd}
      >
        <div
          onPointerDown={startDrag}
          className='w-full h-[25px] py-2 flex justify-center items-center cursor-grab'
        >
          <hr className='border-2 border-[#E4E4E7] rounded-full w-7' />
        </div>
        <div className='flex-1 overflow-auto'>{children}</div>
      </motion.div>
    </>
  );
};

export default BottomSheet;
