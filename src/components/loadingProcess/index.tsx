import { Context } from '@/settings/constant';
import { ActionType, IReactProps } from '@/settings/type';
import { memo, useContext, useEffect } from 'react';
import ReactLoading from 'react-loading';

const Background = () => <div className='absolute top-0 h-full w-full bg-quinary opacity-90' />;

const Text = ({ children }: IReactProps) => (
  <span className='relative text-textColor'>{children}</span>
);

const LoadingProcess = memo(() => {
  const [context] = useContext(Context);
  const data = context[ActionType.LoadingProcess];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='fixed top-0 z-50 flex h-full w-full flex-col items-center justify-center space-y-3'>
      <Background />
      <ReactLoading className='relative' type={data?.type} />
      {data?.body && <Text>{data.body}</Text>}
    </div>
  );
});
export default LoadingProcess;
