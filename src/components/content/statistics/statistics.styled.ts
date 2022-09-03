import styled from 'styled-components';

import {ActionButton, TableColumnProps, TableRowProps} from '../../../common/types';

import {
  BACKGROUND_COLOR,
  HINT_TEXT_COLOR,
  SECONDARY_BACKGROUND_COLOR,
  TEXT_COLOR,
  TRANSPARENT
} from '../../../common/styled/color-constants';

export const StatisticsWrapper = styled.div`
  margin-top: 50px;
`;

export const StatisticsFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StatisticsSelector = styled.div`
  min-width: 250px;
  margin-right: 25px;
  
  display: flex;
  flex-direction: column;
`;

export const StatisticsLabel = styled.div`
  font-size: 16px;
  color: ${HINT_TEXT_COLOR};
  margin-bottom: 10px;
`;

export const StatisticsTable = styled.table`
  margin-top: 50px;
  width: 100%;
`;

export const StatisticsTableBody = styled.tbody``;

export const StatisticsTableRow = styled.tr<TableRowProps>`
  height: 35px;
  background-color: ${props => props.bg ? TRANSPARENT : SECONDARY_BACKGROUND_COLOR};
`;

export const StatisticsTableTitleColumn = styled.th`
  color: ${HINT_TEXT_COLOR};
  border-bottom: 1px solid ${HINT_TEXT_COLOR};
`;

export const StatisticsTableColumn = styled.td<TableColumnProps>`
  min-width: ${props => props.isLarge ? '1200px' : '120px'};
  text-align: ${props => props.textAlign};
  padding-left: ${props => props.textAlign === 'left' ? '20px' : '0'};
`;

export const StatisticsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const StatisticsButton = styled.div<ActionButton>`
  width: 120px;
  height: 35px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${props => props.dis ? BACKGROUND_COLOR : SECONDARY_BACKGROUND_COLOR};
  border: 1px solid ${props => props.dis ? HINT_TEXT_COLOR : BACKGROUND_COLOR};
  color: ${props => props.dis ? HINT_TEXT_COLOR : TEXT_COLOR};
  
  border-radius: 8px;
  
  transition: background-color .35s, border .35s, color .35s;
  
  :hover {
    cursor: ${props => props.dis ? 'not-allowed' : 'pointer'};
  }
`;

export const StatisticsCounter = styled.div`
  margin-left: 30px;
  margin-right: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 35px;
`;

export const StatisticsPlug = styled.div`
  text-align: center;
  font-size: 24px;
  color: ${HINT_TEXT_COLOR};
  margin-top: 50px;
`;


