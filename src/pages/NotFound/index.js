import { Result } from 'antd';
import { Link } from 'react-router-dom';

import { COMPANY_PATH } from 'constants/route';
import Button from 'components/Button';

const NotFound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Link Link to={COMPANY_PATH}>
        <Button type="primary">Back to Dashboard</Button>
      </Link>
    }
  />
);

export default NotFound;
