import { memo } from 'react';
import './buttons.less';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { twMerge } from 'tailwind-merge';

const Buttons = memo(() => {
  const [device] = useMedia();
  return (
    <div className='Buttons'>
      <div className={twMerge(device >= MediaType.MD ? 'd' : 'm')}>
        {[...new Array(20).keys()].map((index) => (
          <div key={`c${index}`} className={`c-${index}`} />
        ))}
      </div>
    </div>
  );
});
export default Buttons;
