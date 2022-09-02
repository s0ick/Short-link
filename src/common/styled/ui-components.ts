import styled from 'styled-components';

import {IInputProps, NotificationsStylesProps} from '../types';

import {
  ACTION_COLOR,
  ACTION_HOVER_COLOR,
  BACKGROUND_COLOR,
  ERROR,
  HINT_TEXT_COLOR,
  SUCCESS,
  TEXT_COLOR
} from './color-constants';
import {slideLeft, slideRight} from './animations';

export const PageRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding-top: 50px;
  
  color: ${TEXT_COLOR};
`;

export const PageRootTitle = styled.div`
  font-size: 48px;
  font-weight: 600;
  
  margin-bottom: 20px;
`;

export const PageRootSubtitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  
  max-width: 530px;
  margin-bottom: 40px;
`;

export const InputBlock = styled.div`
  position: relative;
  
  margin-top: 25px;
  
  display: flex;
  align-items: center;
  flex-direction: row;
  
  width: 100%;
  
  label {
    font-size: 20px;
    position: absolute;
    top: 10px;
    transition: color .35s, top .35s;
    color: ${HINT_TEXT_COLOR};
  }
`;

export const Input = styled.input<IInputProps>`
  display: block;
  
  background-color: transparent;
  
  font-size: 20px;
  outline: none;
  border: none;
  color: ${HINT_TEXT_COLOR};
  border-bottom: 2px solid ${HINT_TEXT_COLOR};
  
  padding: 10px;
  padding-left: ${props => `${props.pl}px`};
  margin-bottom: 10px;
  
  width: 100%;
  
  transition: border-bottom .35s, padding-left .35s;
  
  :focus {
    border-bottom: 2px solid ${ACTION_COLOR};
    padding-left: 10px;
  }
  
  :focus + label {
    top: -20px;
    color: ${ACTION_COLOR};
  }
`;

export const Button = styled.div`
  padding: 12px 18px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  min-width: 210px;
  
  font-size: 18px;
  letter-spacing: 2px;

  border-radius: 40px;
  border: none;
  text-transform: uppercase;
  
  background-color: ${ACTION_COLOR};
  color: ${TEXT_COLOR};
  transition: background-color .35s;
  
  :hover {
    cursor: pointer;
    background-color: ${ACTION_HOVER_COLOR};
  }
`;

export const NotificationsWrapper = styled.div`
  width: 300px;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 9999;
`;

export const NotificationItem = styled.div<NotificationsStylesProps>`
  overflow: hidden;
  margin-bottom: 20px;
  width: 300px;
  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  animation: ${props => (props.exit ? slideRight : slideLeft)} .4s;
  animation-fill-mode: forwards;
  
  background-color: ${TEXT_COLOR};
  color: ${BACKGROUND_COLOR};
  
  transition: background-color .2s ease-in;
  
  h3 {
    padding: 0;
    padding-left: 15px;
    padding-top: 10px;
    margin: 0;
    
    font-size: 16px;
  }
  
  p {
    margin: 0;
    padding: 10px;
    padding-left: 15px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  
  div {
    background-color: ${props => (props.isSuccess ? SUCCESS : ERROR)};
    height: 5px;
  }
`;

