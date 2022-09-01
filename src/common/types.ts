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
