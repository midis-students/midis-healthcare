import React from 'react';

export const PageContext = React.createContext(null);

export const usePage = () => React.useContext(PageContext);
