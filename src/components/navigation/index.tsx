import { memo } from 'react';
import './index.less';
import { URLS } from '@/settings/config';

const hashes = ['experience', 'purchase', 'mommy', 'plan', 'contact'];

const Navigation = memo(() => (
  <div className='Navigation'>
    <div>
      <div className='logo' />
    </div>
    <div>
      <div className='hash'>
        {hashes.map((name, index) => {
          return (
            <button
              key={`btn${index}`}
              onClick={() => {
                window.location.hash = name;
              }}
            >
              <div className={`btn-${index}`} />
            </button>
          );
        })}
      </div>
      <div className='social'>
        <button
          className='fb'
          onClick={() => {
            window.open(URLS.facebook);
          }}
        />
        <button
          className='line'
          onClick={() => {
            window.open(URLS.line);
          }}
        />
        <button
          className='home'
          onClick={() => {
            window.open(URLS.home);
          }}
        />
      </div>
    </div>
  </div>
));
export default Navigation;
