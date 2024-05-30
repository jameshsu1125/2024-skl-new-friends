import { IReactProps } from '@/settings/type';
import { memo } from 'react';

const Page = memo(({ children }: IReactProps) => (
  <div className='relative w-full'>
    <div className='h-[930px] min-w-[750px] pt-28 lg:h-[650px]'>
      <div className='relative h-full w-full'>{children}</div>
    </div>
  </div>
));
export default Page;
