import React, {FC, useCallback, useState} from 'react';

import {ACTION_COLOR, HINT_TEXT_COLOR} from '../../../common/styled/color-constants';
import {Input, InputBlock, Button} from '../../../common/styled/ui-components';
import {NotificationTypes, URL_REG_EX} from '../../../utils/constants';
import axiosRequest from '../../../api/api';

import {useNotification} from '../../../common/notifications/notifications-provider';
import {copyToClipboard} from '../../../utils/utils';
import {CopyIcon} from '../../../common/icons';

import {ISqueezePayload} from '../../../common/types';

import {
  SqueezeBlock,
  SqueezeWrapper,
  SqueezeSubtitle,
  SqueezeLinks,
  SqueezeLink
} from './squeeze.styled';

export const Squeeze: FC = () => {
  const [fullURL, setFullURL] = useState<string>('');
  const [payload, setPayload] = useState<ISqueezePayload | null>(null);
  const notification = useNotification();

  const handleChange = useCallback(
    (event: React.FormEvent<EventTarget>) => {
      const target = event.target as HTMLInputElement;
      setFullURL(target.value);
    }, []
  );

  const generateShortURL = useCallback(
    () => {
      setPayload(null);

      if (!URL_REG_EX.test(fullURL)) {
        notification({
          type: NotificationTypes.ERR,
          message: 'Entered incorrect URL',
          delay: 15
        });
      }

      const encodeURL = encodeURI(fullURL);

      (async () => {
        await axiosRequest
          .post(`/squeeze?link=${encodeURL}`)
          .then(response => {
            setFullURL('');
            setPayload(response.data);

            notification({
              type: NotificationTypes.SUC,
              title: 'Generation completed',
              message: 'A short version of your link has been created',
              delay: 25
            });
          })
          .catch(error => {
            console.log(error);

            notification({
              type: NotificationTypes.ERR,
              title: 'Some error',
              message: 'Something went wrong. Try later',
              delay: 25
            });
          });
      })();

    }, [fullURL]
  );

  const copyUrl = useCallback(
    (href: string) => {

      const onSuccess = () => {
        notification({
          type: NotificationTypes.SUC,
          message: 'Successfully copied to clipboard',
          delay: 20
        });
      };

      const onFail = () => {
        notification({
          type: NotificationTypes.ERR,
          message: 'Copy to clipboard failed',
          delay: 20
        });
      }

      copyToClipboard(href, onSuccess, onFail);
    }, [notification]
  )

  return (
    <SqueezeWrapper>
      <SqueezeBlock>
        <SqueezeSubtitle>
          {'Here you need to put a link to get it\'s abbreviated version'}
        </SqueezeSubtitle>

        <InputBlock>
          <Input
            pl={50}
            type={'text'}
            name={'squeeze/link'}
            value={fullURL}
            onInput={handleChange}
          />
          <label>{'Link:'}</label>
        </InputBlock>

        <Button onClick={generateShortURL}>
          {'Generate'}
        </Button>
      </SqueezeBlock>

      {payload && (
        <SqueezeBlock>
          <SqueezeSubtitle>
            {'Result'}
          </SqueezeSubtitle>

          <SqueezeLinks>
            <SqueezeLink isMain>
              <a href={payload.target}>
                {`Original link: ${payload.target}`}
              </a>

              <span title={'Copy'} onClick={() => copyUrl(payload.target)}>
                  <CopyIcon size={20} color={HINT_TEXT_COLOR}/>
                </span>
            </SqueezeLink>

            <SqueezeLink isMain={false}>
              <a href={`http://79.143.31.216/s/${payload.short}`}>
                {`Short link: http://79.143.31.216/s/${payload.short}`}
              </a>

              <span title={'Copy'} onClick={() => copyUrl(`http://79.143.31.216/s/${payload.short}`)}>
                  <CopyIcon size={20} color={ACTION_COLOR}/>
                </span>
            </SqueezeLink>
          </SqueezeLinks>

        </SqueezeBlock>
      )}
    </SqueezeWrapper>
  );
}
