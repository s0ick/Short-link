import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Button, Input, InputBlock} from '../../common/styled/ui-components';

import {AuthLink, AuthWrapper} from './auth.styled';


export const Registration: FC = () => {
  return (
    <AuthWrapper>
      <InputBlock>
        <Input pl={105} type={'text'} name={'auth/username'}/>
        <label>{'Username:'}</label>
      </InputBlock>

      <InputBlock>
        <Input pl={100} type={'password'} name={'auth/password'}/>
        <label>{'Password:'}</label>
      </InputBlock>

      <InputBlock>
        <Input pl={165} type={'password'} name={'auth/password'}/>
        <label>{'Repeat password:'}</label>
      </InputBlock>

      <Button>
        {'Sign up'}
      </Button>

      <NavLink to={'/'}>
        <AuthLink>
          {'Already have an account'}
        </AuthLink>
      </NavLink>
    </AuthWrapper>
  );
}
