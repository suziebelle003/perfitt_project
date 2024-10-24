export type TUserInfo = {
  email: string;
  password: string;
  name: string;
  gender: string;
  year: string | number | undefined;
  month: string | number | undefined;
  day: string | number | undefined;
  size: string;
  new_password: string;
};

export type TGoogleUser = {
  uid: string;
  email: string;
  name: string;
  profile: string;
};
export type TSUInputProps = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  className?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  label?: string;
  helperText?: string;
  isError?: boolean;
};
export type TSelectOption = {
  value: string;
  label: string;
  color: string;
  isFixed?: boolean;
  isDisabled?: boolean;
};
export type OptionType = {
  value: string | number;
  label: string;
};
