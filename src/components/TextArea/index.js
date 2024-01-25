import { Input, Form } from 'antd';

const { TextArea: AntdTextArea } = Input;
const { Item: FormItem } = Form;

const TextArea = ({ name = '', rows = 4, placeholder = 'Description', maxLength = 50, showCount = false, ...rest }) => {
  return (
    <FormItem name={name} {...rest}>
      <AntdTextArea showCount={showCount} rows={rows} placeholder={placeholder} maxLength={maxLength} {...rest} />
    </FormItem>
  );
};

export default TextArea;
