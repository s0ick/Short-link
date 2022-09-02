import styled from 'styled-components';

import {ACTION_COLOR, TEXT_COLOR} from '../../common/styled/color-constants';

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 450px;
`;

export const AuthLink = styled.div`
  font-size: 16px;
  color: ${TEXT_COLOR};
  
  margin-top: 30px;
  transition: color .35s;
  
  :hover {
    color: ${ACTION_COLOR};
  }
`;
