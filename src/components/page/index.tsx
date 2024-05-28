import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import Div100vh from 'react-div-100vh';

const Page = memo(({ children }: IReactProps) => (
  <div className='relative w-full'>
    <Div100vh className='min-h-[1000px] min-w-[750px] pt-28 lg:min-h-[700px]'>
      <div className='relative h-full w-full'>{children}</div>
    </Div100vh>
  </div>
));
export default Page;
