import useMedia, { MediaType } from '@/hooks/useMedia';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import './character.less';

const Character = memo(() => {
  const [device] = useMedia();
  return (
    <div className='Character'>
      <div className={twMerge(device >= MediaType.MD ? 'd' : 'm')}>
        {[...new Array(20).keys()].map((index) => (
          <div key={`c${index}`} className={`c-${index}`} />
        ))}
      </div>
    </div>
  );
});
export default Character;
