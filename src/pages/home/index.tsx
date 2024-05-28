import { Context } from '@/settings/constant';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import { HomeContext, HomeState, HomeStepType, THomeState } from './config';
import Content from './content';
import './index.less';
import Landing from './landing';
import { ActionType } from '@/settings/type';

const Home = memo(() => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<THomeState>(HomeState);

  useEffect(() => {
    if (state.step >= HomeStepType.loaded) {
      // all content loaded
      setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
    }
  }, [state.step]);

  return (
    <HomeContext.Provider value={[state, setState]}>
      <div className='Home'>
        <Landing />
        {state.step >= HomeStepType.loading && (
          <OnloadProvider onload={() => setState((S) => ({ ...S, step: HomeStepType.loaded }))}>
            <div className='w-full'>
              <Content />
            </div>
          </OnloadProvider>
        )}
      </div>
    </HomeContext.Provider>
  );
});

export default Home;
