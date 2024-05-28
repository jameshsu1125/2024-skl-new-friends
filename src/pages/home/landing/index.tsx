import Page from '@/components/page';
import useMedia, { MediaType } from '@/hooks/useMedia';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useMemo } from 'react';
import { HomeContext, HomeStepType } from '../config';
import { twMerge } from 'tailwind-merge';
import './index.less';

const SIZE = {
  lg: [
    7.575057736720554, 8.535114583333334, 6.332052083333334, 5.14028125, 4.797192708333333,
    6.846609375, 5.940854166666667, 9.650286458333333, 9.332875, 7.522619791666667,
    7.1019322916666665, 9.634020833333333, 8.8284375, 7.190234375,
  ],
  md: [
    16.085851851851853, 13.957796296296296, 22.672981481481482, 21.927222222222223,
    17.674092592592594, 16.685703703703705,
  ],
};

const Landing = memo(() => {
  const [device] = useMedia();
  const [, setState] = useContext(HomeContext);

  const size = useMemo(() => {
    if (device >= MediaType.MD) return SIZE.lg;
    return SIZE.md;
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
              {size.map((size, index) => (
                <div key={`character${index}`} style={{ width: `${size}%` }}>
                  <div className={`character${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </OnloadProvider>
    </Page>
  );
});
export default Landing;
