import React from 'react';
import {NavLink} from 'react-router-dom';

import {PageRootSubtitle, PageRootTitle, PageRootWrapper, Button} from '../common/styled/ui-components';

export const PlugPage = () => {
  return (
    <PageRootWrapper>
      <PageRootTitle>{'Page Not Found'}</PageRootTitle>
      <PageRootSubtitle>{'Try to return to the start page'}</PageRootSubtitle>
      <NavLink to={'/'}>
        <Button>
          {'Home'}
        </Button>
      </NavLink>
    </PageRootWrapper>
  );
};
