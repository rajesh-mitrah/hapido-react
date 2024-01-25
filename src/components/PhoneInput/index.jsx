import Select from 'components/Select';
import Input from 'components/Input';
import countryCodeList from 'constants/countryCodeList';
import { phoneNumberValidation } from 'utils/phoneNumberValidation';

const PhoneInputField = ({ phoneName = '', countryName = '', label = '', optionLabelProp = '', ...rest }) => {
  const handleKeyPress = e => {
    if (e.target.id.endsWith(`_${phoneName}`) && !/^[0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  };
  const filteredCountryList = (input, option) => {
    try {
      const [, , countryName] = option?.children;
      return countryName?.toLowerCase().includes(input?.toLowerCase());
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Input
      name={phoneName}
      label={label}
      addonBefore={
        <Select
          name={countryName}
          showSearch
          isCustomValues={true}
          options={countryCodeList}
          filterOption={(input, option) => filteredCountryList(input, option)}
          noStyle
          popupClassName="w-auto"
          optionLabelProp={optionLabelProp}
        />
      }
      onKeyPress={handleKeyPress}
      rules={[
        { required: true, message: 'Please enter Phone Number' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            const countryCode = getFieldValue(countryName);
            const { isValidPhoneNumber, isValidPhoneNumberWithCountry } = phoneNumberValidation(countryCode, value);
            if (value?.length && (!isValidPhoneNumberWithCountry || !isValidPhoneNumber)) {
              return Promise.reject('Please check the phone number!');
            }
            return Promise.resolve();
          }
        })
      ]}
      {...rest}
    />
  );
};

export default PhoneInputField;
