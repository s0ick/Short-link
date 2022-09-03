import React, {FC} from 'react';

import {ContentWrapper} from './content.styled';
import {Squeeze} from './squeeze/squeeze';
import {Statistics} from './statistics/statistics';

export const Content: FC = () => {
  return (
    <ContentWrapper>
      <Squeeze/>
      <Statistics/>
    </ContentWrapper>
  );
}
