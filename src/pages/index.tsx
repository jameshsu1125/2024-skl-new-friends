import LoadingProcess from '@/components/loadingProcess';
import Navigation from '@/components/navigation';
import { PAGE } from '@/settings/config';
import { Context, InitialState, Reducer } from '@/settings/constant';
import '@/settings/global.less';
import { ActionType, TContext } from '@/settings/type';
import { Suspense, lazy, memo, useContext, useMemo, useReducer } from 'react';
import ReactDOM from 'react-dom/client';

const Pages = memo(() => {
  const [context] = useContext(Context);
  const page = context[ActionType.Page];

  const Page = useMemo(() => {
    const [target] = Object.values(PAGE).filter((data) => data === page);
    if (target) {
      const Element = lazy(() => import(`./${target}/index.tsx`));
      return (
        <Suspense fallback=''>
          <Element />
        </Suspense>
      );
    }
    return '';
  }, [page]);

  return Page;
});

const App = () => {
  const [state, setState] = useReducer(Reducer, InitialState);
  const value: TContext = useMemo(() => [state, setState], [state]);
  return (
    <div className='App'>
      <Context.Provider {...{ value }}>
        <Pages />
        <Navigation />
        {state[ActionType.LoadingProcess]?.enabled && <LoadingProcess />}
      </Context.Provider>
    </div>
  );
};

if (document.getElementById('app')?.children.length === 0) {
  ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
}
