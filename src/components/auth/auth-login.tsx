import React, {FC, useCallback, useState} from 'react';
import {NavLink} from 'react-router-dom';

import {LoginProps} from '../../common/types';
import {useNotification} from '../../common/notifications/notifications-provider';
import {Button, Input, InputBlock} from '../../common/styled/ui-components';

import {NotificationTypes, SL_ACCESS_TOKEN} from '../../utils/constants';
import axiosRequest from '../../api/api';

import {AuthLink, AuthWrapper} from './auth.styled';

export const AuthLogin: FC<LoginProps> = ({onChangeAuth}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
        default: break;
      }
    }, []
  );

  const onSignIn = useCallback(
    () => {
      if (!username.trim() || !password.trim()) {
        notification({
          type: NotificationTypes.ERR,
          title: 'Validation error',
          message: 'All fields are required and must not be empty',
          delay: 20
        });
      }

      const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);

      axiosRequest
        .post('/login', params)
        .then(response => {
          const token = response.data['access_token'];
          localStorage.setItem(SL_ACCESS_TOKEN, token);
          onChangeAuth();

          notification({
            type: NotificationTypes.SUC,
            message: 'Login successful',
            delay: 12
          });
        })
        .catch((error) => {
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

      <Button onClick={onSignIn}>
        {'Sign in'}
      </Button>

      <NavLink to={'/registration'}>
        <AuthLink>
          {'Don\'t have an account?'}
        </AuthLink>
      </NavLink>
    </AuthWrapper>
  );
}
