import {Fragment } from 'react';
// Components 
import MainNavigation from './main-navigation';

function Layout(props:any) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
