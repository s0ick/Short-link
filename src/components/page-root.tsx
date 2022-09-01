import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import {PageRootSubtitle, PageRootTitle, PageRootWrapper} from '../common/styled/ui-components';

import {Login} from './auth/login';
import {Registration} from './auth/registration';
import {Content} from './content/content';
import {PlugPage} from './plug-page';

export function PageRoot() {
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    return (
      <PageRootWrapper>
        <PageRootTitle>
          {'Short link'}
        </PageRootTitle>
        <PageRootSubtitle>
          {'Service for creating short links. This can be useful for sending to SMS or Twitter where the message size is limited.'}
        </PageRootSubtitle>

        <Routes>
          <Route path={'*'} element={<PlugPage/>}/>
          <Route path={'/'} element={<Login/>}/>
          <Route path={'/registration'} element={<Registration/>}/>
        </Routes>
      </PageRootWrapper>
    );
  }

  return (
    <Routes>
      <Route path={'*'} element={<PlugPage/>}/>
      <Route path={'/'} element={<Content/>}/>
    </Routes>
  );
}
