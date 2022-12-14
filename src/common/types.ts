export interface IInputProps {
  pl: number
}

export interface ProviderProps {
  children: any
}

export interface ActionProps {
  type: string,
  payload?: any,
  id?: string
}

export interface NoteProps {
  type: string,
  message: string,
  id: string,
  title?: string,
  delay?: number
}

export interface NotificationProviderProps {
  type: string,
  message: string,
  title?: string,
  delay?: number
}

export interface NotificationProps {
  dispatch: (props: any) => any,
  type: string,
  message: string,
  id: string,
  title?: string,
  delay?: number
}

export interface NotificationsStylesProps {
  isSuccess: boolean,
  exit: boolean
}

export interface LoginProps {
  onChangeAuth: () => void;
}

export interface ISqueezePayload {
  id: number,
  counter: number,
  short: string,
  target: string
}

export interface ISqueezeLink {
  isMain: boolean
}

export interface IconProps {
  size?: number,
  color?: string
}

export interface SelectOption {
  label: string,
  value: string
}

export interface TableRowProps {
  bg: boolean
}

export interface TableColumnProps {
  textAlign: string,
  isLarge: boolean
}

export interface ActionButton {
  dis: boolean
}
