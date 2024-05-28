import { memo, useEffect } from 'react';
import './index.less';

const Navigation = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Navigation'>
      <div>
        <div className='logo' />
      </div>
      <div>
        <div className='hash'>
          {[...new Array(5).keys()].map((index) => {
            return (
              <button key={`btn${index}`}>
                <div className={`btn-${index}`} />
              </button>
            );
          })}
        </div>
        <div className='social'>
          <button className='fb' />
          <button className='line' />
          <button className='home' />
        </div>
      </div>
    </div>
  );
});
export default Navigation;
