import { Form, Select as AntdSelect } from 'antd';
import './index.scss';

const { Item: FormItem } = Form;
const { Option } = AntdSelect;

const Select = ({
  name = '',
  isCustomValues = false,
  showSearch = false,
  noStyle = false,
  onChange = () => {},
  options = [],
  ...rest
}) => {
  let countryLabelList = null;
  let additionalProps = {};
  if (isCustomValues) {
    countryLabelList = options.map((country, index) => {
      return (
        <Option key={index} value={country.short} label={`${country.short} +${country.phoneCode}`}>
          {<span className="country-short-name">{country.short}</span>} {`${country.label} +${country.phoneCode}`}
        </Option>
      );
    });
  } else {
    additionalProps = { ...additionalProps, options: options };
  }

  return (
    <FormItem name={name} noStyle={noStyle} {...rest}>
      <AntdSelect showSearch={showSearch} onChange={onChange} {...additionalProps} {...rest}>
        {countryLabelList}
      </AntdSelect>
    </FormItem>
  );
};

export default Select;
