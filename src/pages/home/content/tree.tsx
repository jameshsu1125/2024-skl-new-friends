import useMedia, { MediaType } from '@/hooks/useMedia';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import './tree.less';

const Tree = memo(() => {
  const [device] = useMedia();
  return (
    <div className='Tree'>
      <div className={twMerge(device >= MediaType.MD ? 'd' : 'm')}>
        {[...new Array(10).keys()].map((index) => (
          <div key={`tree${index}`} className={`tree-${index}`} />
        ))}
      </div>
    </div>
  );
});
export default Tree;
