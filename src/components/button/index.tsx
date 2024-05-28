import { IReactProps } from '@/settings/type';
import Regular from './regular';
import { twMerge } from 'tailwind-merge';

type TRegularProps = IReactProps & {
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, className, onClick }: TRegularProps) => {
  return (
    <button className={twMerge(className || '')} onClick={onClick}>
      {children}
    </button>
  );
};

Button.regular = Regular;

export default Button;
