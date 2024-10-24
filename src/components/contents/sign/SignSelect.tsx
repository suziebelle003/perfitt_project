import Select, { Props } from 'react-select';
import { selectStyles } from '../../../styles/selectStyles';

type TSignSelectProps = {
  fieldChange?: (value: string) => void;
} & Props;

const SignSelect = (props: TSignSelectProps) => {
  const { fieldChange, onChange, value, styles, ...rest } = props;

  const handleSelect = (newValue: unknown) => {
    if (fieldChange) {
      fieldChange((newValue as { value: string }).value || '');
    }
  };

  return (
    <Select
      {...rest}
      value={value ? { value: value, label: value } : null}
      onChange={fieldChange ? handleSelect : onChange}
      styles={styles || selectStyles}
    />
  );
};

export default SignSelect;
