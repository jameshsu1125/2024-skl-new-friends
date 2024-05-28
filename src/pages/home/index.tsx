import { memo, useEffect, useState } from 'react';
import { HomeContext, HomeState, HomeStepType, THomeState } from './config';
import './index.less';
import Landing from './landing';
import OnloadProvider from 'lesca-react-onload';

const Home = memo(() => {
  const [state, setState] = useState<THomeState>(HomeState);

  useEffect(() => {
    if (state.step >= HomeStepType.loaded) {
      // all content loaded
    }
  }, [state.step]);

  return (
    <HomeContext.Provider value={[state, setState]}>
      <div className='Home'>
        <Landing />
        {state.step >= HomeStepType.loading && (
          <OnloadProvider onload={() => setState((S) => ({ ...S, step: HomeStepType.loaded }))}>
            <div className='w-full bg-[#b4d18f] py-20' />
          </OnloadProvider>
        )}
      </div>
    </HomeContext.Provider>
  );
});

export default Home;
