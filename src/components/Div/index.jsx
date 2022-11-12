import React from 'react';
import style from './style.module.scss';
import { classNames } from '@/lib/tools';


export default React.forwardRef(({ children, className, as }, ref) => {
   const As = as || 'div';
   return (
     <As ref={ref} className={classNames(style.div, className)}>
       {children}
     </As>
   );
});
