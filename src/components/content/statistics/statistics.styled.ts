import styled from 'styled-components';

import {HINT_TEXT_COLOR, TABLE_ROW_BACKGROUND_COLOR, TRANSPARENT} from '../../../common/styled/color-constants';
import {TableColumnProps, TableRowProps} from '../../../common/types';

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
  background-color: ${props => props.bg ? TRANSPARENT : TABLE_ROW_BACKGROUND_COLOR};
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


