export type TSUInputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> & {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
  title?: string;
  className: string;
};
export type TUserInfo = {
  email: string;
  password: string;
  name: string;
  gender: string;
  year: string;
  month: string;
  day: string;
  usersize: string;
  sizetype: string;
};
export type TUserHandlers = {
  userInfoSearch: {
    gender: string;
    year: string;
    month: string;
    day: string;
    usersize: string;
  };
  handleSelectChange: (id: string, value: string) => void;
  handleChange: (id: string, value: string) => void;
  selectOpen: string;
  setSelectOpen: React.Dispatch<React.SetStateAction<string>>;
};
export type SUIdetailsProps = {
  userInfo: TUserInfo;
  userHandlers: TUserHandlers;
};
