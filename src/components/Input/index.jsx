import { Form, Input as AntdInput } from 'antd';

const { Item: FormItem } = Form;

const Input = ({
  name = '',
  onChange = () => {},
  placeholder = '',
  label = '',
  max = 0,
  min = 0,
  type = '',
  className = '',
  rules = [],
  autoFocus = false,
  addonBefore = null,
  ...rest
}) => {
  const renderInputField = type => {
    switch (type) {
      case 'password':
        return <AntdInput.Password className={className} placeholder={placeholder} onChange={onChange} {...rest} />;

      default:
        return (
          <AntdInput
            className={className}
            onChange={onChange}
            autoFocus={autoFocus}
            min={min}
            max={max}
            type={type}
            addonBefore={addonBefore}
            placeholder={placeholder}
            {...rest}
          />
        );
    }
  };
  return (
    <FormItem name={name} label={label} rules={rules} {...rest}>
      {renderInputField(type)}
    </FormItem>
  );
};

export default Input;
