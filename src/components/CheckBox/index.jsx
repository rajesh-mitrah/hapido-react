import { Checkbox as AntdCheckBox, Form } from 'antd';

const { Item: FormItem } = Form;
const CheckBox = ({ name = '', onChange = () => {}, label = '', rules = [], ...rest }) => {
  return (
    <FormItem name={name} valuePropName="checked" rules={rules} {...rest}>
      <AntdCheckBox onChange={onChange} {...rest}>
        {label}
      </AntdCheckBox>
    </FormItem>
  );
};

export default CheckBox;
