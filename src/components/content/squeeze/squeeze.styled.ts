import styled from 'styled-components';

import {ACTION_COLOR, HINT_TEXT_COLOR} from '../../../common/styled/color-constants';
import {ISqueezeLink} from '../../../common/types';

export const SqueezeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SqueezeSubtitle = styled.div`
  font-size: 16px;
  width: 415px;
`;

export const SqueezeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 60px;
`;

export const SqueezeLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const SqueezeLink = styled.div<ISqueezeLink>`
  font-size: 18px;
  margin-bottom: 10px;
  
  svg {
    margin-left: 15px;
  }
  
  a {
    color: ${props => props.isMain ? HINT_TEXT_COLOR : ACTION_COLOR};
  }
  
  :hover {
    cursor: pointer;
  }
`;

