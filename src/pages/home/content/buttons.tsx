import { memo } from 'react';
import './buttons.less';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { twMerge } from 'tailwind-merge';
import { URLS } from '@/settings/config';

const Buttons = memo(() => {
  const [device] = useMedia();
  return (
    <div className='Buttons'>
      <div className={twMerge(device >= MediaType.MD ? 'd' : 'm')}>
        {[URLS.detail, false, URLS.articles, false, URLS.plan, false, URLS.contact].map(
          (u, index) => (
            <div
              key={`c${index}`}
              className={`c-${index}`}
              onClick={() => {
                if (typeof u === 'string') window.open(u);
              }}
            />
          ),
        )}
      </div>
    </div>
  );
});
export default Buttons;
