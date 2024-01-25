import { useState } from 'react';
import { Popover } from 'antd';

import Input from 'components/Input';
import ProgressBar from 'components/ProgressBar';

import { PASSWORD_SUGGESTION_DESCRIPTION } from 'constants/signup';

import { passwordValidator } from 'utils/passwordValidation';
import './index.scss';

const Password = ({ name = '', label = '', type = '', onChange = () => {}, ...rest }) => {
  const [passwordStatus, setPasswordStatus] = useState({});
  const handlePassword = e => {
    const passwordStrength = passwordValidator(e.target.value);
    setPasswordStatus(passwordStrength);
    onChange(e);
  };

  const { value, percent, color, progressType } = passwordStatus;

  const renderProgressBar = (
    <div className="password-description">
      <ProgressBar percent={percent} strokeColor={color} showInfo={false} />
      <div className="text-center">{!value ? 'Enter a password' : progressType}</div>
      <div>
        {PASSWORD_SUGGESTION_DESCRIPTION.map((description, index) => {
          const { label, regex } = description;
          let isSatisfied = false;
          if (value) {
            isSatisfied = regex.test(value);
          }

          return (
            <ul key={index}>
              <li style={{ color: `${isSatisfied ? '#047a14' : '#de200b'}` }}>{label}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );

  return (
    <Popover placement="bottom" trigger="focus" content={() => renderProgressBar} className="password">
      <Input name={name} label={label} type={type} onChange={handlePassword} {...rest} />
    </Popover>
  );
};

export default Password;
