import { memo, useEffect } from 'react';
import './index.less';
import Tree from './tree';
import Character from './character';
import Buttons from './buttons';

const Content = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Content'>
      <div className='image'>
        <div>
          <Tree />
          <Character />
          <Buttons />
          <div className='absolute left-0 top-0 h-full w-full'>
            <div id='experience' />
            <div id='purchase' />
            <div id='mommy' />
            <div id='plan' />
            <div id='contact' />
          </div>
        </div>
      </div>
    </div>
  );
});
export default Content;
