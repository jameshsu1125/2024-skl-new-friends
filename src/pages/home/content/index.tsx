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
        </div>
      </div>
    </div>
  );
});
export default Content;
