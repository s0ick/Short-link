import React, {FC, useCallback, useState} from 'react';
import {Navigate, NavLink} from 'react-router-dom';

import {useNotification} from '../../common/notifications/notifications-provider';
import {Button, Input, InputBlock} from '../../common/styled/ui-components';
import {NotificationTypes} from '../../utils/constants';
import axiosRequest from '../../api/api';

import {AuthLink, AuthWrapper} from './auth.styled';

export const AuthRegistration: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const notification = useNotification();

  const onChangeInputs = useCallback(
    (event: React.FormEvent<EventTarget>) => {
      const target = event.target as HTMLInputElement;

      switch (target.name) {
        case 'auth/username':
          setUsername(target.value);
          break;
        case 'auth/password':
          setPassword(target.value);
          break;
        case 'auth/repeat-password':
          setRepeatPassword(target.value);
          break;
        default: break;
      }
    }, []
  );

  const onSighUp = useCallback(
    () => {
      if (password !== repeatPassword) {
        notification({
          type: NotificationTypes.ERR,
          title: 'Validation error',
          message: 'Passwords do not match',
          delay: 20
        });
      }

      if (!username.trim() || !password.trim()) {
        notification({
          type: NotificationTypes.ERR,
          title: 'Validation error',
          message: 'All fields are required and must not be empty',
          delay: 20
        });
      }

      axiosRequest
        .post(`/register?username=${username}&password=${password}`)
        .then(response => {
          notification({
            type: NotificationTypes.SUC,
            title: `Welcome, ${response.data.username}!`,
            message: 'Registration completed successfully',
            delay: 20
          });
          setSuccess(true);
        })
        .catch((error: any) => {
          console.log(error);

          notification({
            type: NotificationTypes.ERR,
            title: 'Some error',
            message: 'Something went wrong. Try later',
            delay: 20
          });
        });
    }, [notification]
  );

  return (
    <>
      {success && <Navigate to={'/'}/>}

      <AuthWrapper>
        <InputBlock>
          <Input
            pl={105}
            type={'text'}
            name={'auth/username'}
            value={username}
            onInput={onChangeInputs}
          />
          <label>{'Username:'}</label>
        </InputBlock>

        <InputBlock>
          <Input
            pl={100}
            type={'password'}
            name={'auth/password'}
            value={password}
            onInput={onChangeInputs}
          />
          <label>{'Password:'}</label>
        </InputBlock>

        <InputBlock>
          <Input
            pl={165}
            type={'password'}
            name={'auth/repeat-password'}
            value={repeatPassword}
            onInput={onChangeInputs}
          />
          <label>{'Repeat password:'}</label>
        </InputBlock>

        <Button onClick={onSighUp}>
          {'Sign up'}
        </Button>

        <NavLink to={'/'}>
          <AuthLink>
            {'Already have an account'}
          </AuthLink>
        </NavLink>
      </AuthWrapper>
    </>
  );
}
