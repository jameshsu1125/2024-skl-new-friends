import Page from '@/components/page';
import useMedia, { MediaType } from '@/hooks/useMedia';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useMemo } from 'react';
import { HomeContext, HomeStepType } from '../config';
import { twMerge } from 'tailwind-merge';
import './index.less';
import './char.less';

const Landing = memo(() => {
  const [device] = useMedia();
  const [, setState] = useContext(HomeContext);

  const size = useMemo(() => {
    if (device >= MediaType.MD) return 15;
    return 6;
  }, [device]);

  return (
    <Page>
      <OnloadProvider onload={() => setState((S) => ({ ...S, step: HomeStepType.loading }))}>
        <div className='Landing'>
          <div className='logo'>
            <div className='dialog' />
            <div className='txt' />
          </div>
          <div className='pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden'>
            <div className='cloud-0'>
              <div />
            </div>
            <div className='cloud-1' />
            <div className='cloud-2' />
          </div>
          <div className='pointer-events-none absolute left-0 top-2 h-full w-full overflow-hidden'>
            <div className={twMerge(device >= MediaType.MD ? 'ground' : 'ground-m')}>
              {[...new Array(size).keys()].map((index) => (
                <div className={`c${index}`} key={`c${index}`} />
              ))}
              {/* {size.map((size, index) => (
                <div key={`character${index}`} style={{ width: `${size}%` }}>
                  <div className={`character${index}`} />
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </OnloadProvider>
    </Page>
  );
});
export default Landing;
