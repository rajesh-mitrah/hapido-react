import { Switch as AntdSwitch, Form } from 'antd';

const { Item: FormItem } = Form;

const Switch = ({
  name = '',
  checkedChildren = null,
  unCheckedChildren = null,
  checked = false,
  onChange = () => {},
  className = '',
  style = {},
  valuePropName = 'checked',
  ...rest
}) => {
  return (
    <FormItem name={name} style={style} valuePropName={valuePropName} {...rest}>
      <AntdSwitch
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
        onChange={onChange}
        className={className}
        {...rest}
      />
    </FormItem>
  );
};

export default Switch;
