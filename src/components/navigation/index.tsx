import { memo } from 'react';
import './index.less';

const Navigation = memo(() => (
  <div className='Navigation'>
    <div>
      <button
        className='logo'
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </div>
    <div>
      <div className='social'>
        {/* <button
          className='fb'
          onClick={() => {
            Facebook.share({
              href: URLS.facebook,
              method: 'share',
            });
          }}
        />
        <button
          className='line'
          onClick={() => {
            const text = `${import.meta.env.VITE_TITLE} / ${import.meta.env.VITE_SUBSCRIPTION}`;
            Line.share(URLS.line, text);
          }}
        />
        <button
          className='home'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        /> */}
      </div>
    </div>
  </div>
));
export default Navigation;
