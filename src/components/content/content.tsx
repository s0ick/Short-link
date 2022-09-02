import React, {FC} from 'react';

import {Squeeze} from './squeeze/squeeze';
import {ContentWrapper} from './content.styled';

export const Content: FC = () => {
  return (
    <ContentWrapper>
      <Squeeze/>
    </ContentWrapper>
  );
}
