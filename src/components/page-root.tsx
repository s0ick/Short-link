import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';

import {PageRootSubtitle, PageRootTitle, PageRootWrapper} from '../common/styled/ui-components';

import {AuthLogin} from './auth/auth-login';
import {AuthRegistration} from './auth/auth-registration';
import {Content} from './content/content';
import {PagePlug} from './page-plug';

export function PageRoot() {
  const [isAuth, setIsAuth] = useState(false);

  const onChangeAuth = () => {
    setIsAuth(true);
  };

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
          <Route path={'*'} element={<PagePlug/>}/>
          <Route path={'/'} element={<AuthLogin onChangeAuth={onChangeAuth}/>}/>
          <Route path={'/registration'} element={<AuthRegistration/>}/>
        </Routes>
      </PageRootWrapper>
    );
  }

  return (
    <Routes>
      <Route path={'*'} element={<PagePlug/>}/>
      <Route path={'/'} element={<Content/>}/>
    </Routes>
  );
}
