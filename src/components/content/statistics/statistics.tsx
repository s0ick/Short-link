import React, {FC, useCallback, useEffect, useState} from 'react';
import Select, {MultiValue, SingleValue, StylesConfig} from 'react-select'

import {ISqueezePayload, SelectOption} from '../../../common/types';

import axiosRequest from '../../../api/api';
import {LIMIT_SELECTOR_CONFIG, NotificationTypes, Operations, ORDER_SELECTOR_CONFIG} from '../../../utils/constants';
import {BACKGROUND_COLOR, HINT_TEXT_COLOR, TEXT_COLOR} from '../../../common/styled/color-constants';
import {useNotification} from '../../../common/notifications/notifications-provider';

import {
  StatisticsFilters,
  StatisticsSelector,
  StatisticsWrapper,
  StatisticsLabel,
  StatisticsTable,
  StatisticsTableBody,
  StatisticsTableRow,
  StatisticsTableTitleColumn,
  StatisticsTableColumn,
  StatisticsActions,
  StatisticsButton,
  StatisticsCounter,
  StatisticsPlug
} from './statistics.styled';

export const Statistics: FC = () => {
  const [tableData, setTableData] = useState<Array<ISqueezePayload> | null>(null);
  const [limit, setLimit] = useState<SingleValue<SelectOption>>(LIMIT_SELECTOR_CONFIG[0]);
  const [offset, setOffset] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const [order, setOrder] = useState<MultiValue<SelectOption>>([
    ORDER_SELECTOR_CONFIG[0],
    ORDER_SELECTOR_CONFIG[1]
  ]);

  const notification = useNotification();

  const customStyles: StylesConfig<SelectOption> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: BACKGROUND_COLOR,
      borderColor: HINT_TEXT_COLOR,
      color: TEXT_COLOR
    }),
    singleValue: (styles) => ({ ...styles, color: TEXT_COLOR}),
    placeholder: (styles) => ({ ...styles, color: HINT_TEXT_COLOR}),
    option: (styles) => ({...styles, color: TEXT_COLOR})
  };

  const onChangeLimit = useCallback(
    (value: SingleValue<SelectOption>) => {
      setLimit(value);
    }, []
  );

  const onChangeOrder = useCallback(
    (value: MultiValue<SelectOption>) => {
      setOrder(value);
    }, []
  );

  const onChangeOffset = useCallback(
    (operation: string) => {
      switch (operation) {
        case Operations.INC:
          if (tableData && Number(limit?.value) > tableData.length) {
            break;
          }
          setOffset(prevState => prevState + Number(limit?.value));
          setCounter(prevState => prevState + 1);
          break;
        case Operations.DEC:
          if (counter > 0) {
            setOffset(prevState => prevState - Number(limit?.value));
            setCounter(prevState => prevState - 1);
          }
          break;
        default: break;
      }
    }, [tableData, counter, limit]
  );

  useEffect(() => {
    if (!limit || !order) {
      return function clear() {};
    }

    let orderParams: string = order.map(param => `order=${param.value}&`).join('');

    (async () => {
      await axiosRequest
        .get(`/statistics?${orderParams}offset=${offset}&limit=${limit.value}`)
        .then(response => setTableData(response.data))
        .catch(error => {
          console.log(error);

          notification({
            type: NotificationTypes.ERR,
            title: 'Some error',
            message: 'An error occurred while loading statistics. Try later',
            delay: 20
          });
        });
    })();
  }, [limit, order, offset]);

  return (
    <StatisticsWrapper>

      <StatisticsFilters>
        <StatisticsSelector>
          <StatisticsLabel>{'Number of rows'}</StatisticsLabel>
          <Select
            isMulti={false}
            styles={customStyles}
            onChange={onChangeLimit}
            options={LIMIT_SELECTOR_CONFIG}
            defaultValue={LIMIT_SELECTOR_CONFIG[0]}
          />
        </StatisticsSelector>
        <StatisticsSelector>
          <StatisticsLabel>{'Order by'}</StatisticsLabel>
          <Select
            isMulti
            styles={customStyles}
            onChange={onChangeOrder}
            options={ORDER_SELECTOR_CONFIG}
            defaultValue={[ORDER_SELECTOR_CONFIG[0], ORDER_SELECTOR_CONFIG[1]]}
          />
        </StatisticsSelector>
      </StatisticsFilters>

      {tableData && tableData.length && (
        <StatisticsTable>
          <StatisticsTableBody>
            <StatisticsTableRow bg>
              <StatisticsTableTitleColumn>
                {'Original Link'}
              </StatisticsTableTitleColumn>
              <StatisticsTableTitleColumn>
                {'Short Link'}
              </StatisticsTableTitleColumn>
              <StatisticsTableTitleColumn>
                {'Number of transition'}
              </StatisticsTableTitleColumn>
            </StatisticsTableRow>

            {tableData.map((row, index) =>
              <StatisticsTableRow key={`table-row-${row.id}-${row.short}`} bg={index % 2 === 0}>
                <StatisticsTableColumn isLarge textAlign={'left'}>
                  {row.target}
                </StatisticsTableColumn>
                <StatisticsTableColumn isLarge={false} textAlign={'center'}>
                  {row.short}
                </StatisticsTableColumn>
                <StatisticsTableColumn isLarge={false} textAlign={'center'}>
                  {row.counter}
                </StatisticsTableColumn>
              </StatisticsTableRow>
            )}

          </StatisticsTableBody>
        </StatisticsTable>
      )}

      {tableData && tableData.length && (
        <StatisticsActions>
          <StatisticsButton
            dis={counter === 0}
            onClick={() => onChangeOffset(Operations.DEC)}
          >
            {'Prev'}
          </StatisticsButton>
          <StatisticsCounter>
            {`Page: ${counter}`}
          </StatisticsCounter>
          <StatisticsButton
            dis={tableData.length < Number(limit?.value)}
            onClick={() => onChangeOffset(Operations.INC)}
          >
            {'Next'}
          </StatisticsButton>
        </StatisticsActions>
      )}

      {(!tableData || !tableData.length) &&
        <StatisticsPlug>
          {'This will display a table with statistics on generated links'}
        </StatisticsPlug>
      }
    </StatisticsWrapper>
  );
}
