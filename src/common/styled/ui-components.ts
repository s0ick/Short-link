import styled from 'styled-components';

import {IInputProps} from '../types';

import {ACTION_COLOR, ACTION_HOVER_COLOR, TEXT_COLOR} from './color-constants';

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
  }
`;

export const Input = styled.input<IInputProps>`
  display: block;
  
  background-color: transparent;
  
  font-size: 20px;
  outline: none;
  border: none;
  border-bottom: 2px solid ${TEXT_COLOR};
  
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

