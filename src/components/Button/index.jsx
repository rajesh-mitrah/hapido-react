import { Button as AntdButton, Form, Tooltip } from 'antd';

const { Item: FormItem } = Form;

const Button = ({
  onClick = () => {},
  type = 'primary',
  children,
  className = '',
  htmlType = 'button',
  loading = false,
  title = '',
  placement = 'top',
  block = false,
  ...rest
}) => {
  return (
    <FormItem {...rest}>
      <Tooltip title={title} placement={placement}>
        <AntdButton
          onClick={onClick}
          className={className}
          type={type}
          htmlType={htmlType}
          loading={loading}
          block={block}
          {...rest}
        >
          {children}
        </AntdButton>
      </Tooltip>
    </FormItem>
  );
};

export default Button;
