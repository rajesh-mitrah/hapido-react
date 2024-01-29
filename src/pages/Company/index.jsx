import { useMemo, useCallback } from 'react';

import DataGrid from 'components/DataGrid';
import Title from 'components/Title';
import { getTableColumns } from 'constants/company';
import PageHeader from 'components/PageHeader';
import { useGetCompanyList, useSendRequest } from 'services/query/company';
import { useGetUserByID } from 'services/query/profile';

// const companiesData = [
//   { id: 1, companyName: 'Company A', size: 'Small', type: 'Type 1', industry: 'Industry 1', status: '' },
//   { id: 2, companyName: 'Company B', size: 'Medium', type: 'Type 2', industry: 'Industry 2', status: 'Accepted' }
// ];

const CompanyList = () => {
  const requestMutation = useSendRequest();
  const loggedinUserId = localStorage.getItem('loggedinUserId');

  const companyList = useGetCompanyList();

  const userProfileData = useGetUserByID(loggedinUserId);

  const handleSendRequest = useCallback(
    record => {
      requestMutation.mutate({
        company_id: userProfileData?.data?.company_id,
        request_company_id: record?.company_id,
        status: 'send_request'
      });
    },
    [userProfileData]
  );

  const tableColumns = useMemo(() => getTableColumns(handleSendRequest), [handleSendRequest]);

  return (
    <div>
      <PageHeader leftLayout={<Title>Company Details</Title>} />
      <DataGrid columns={tableColumns} data={companyList?.data?.data || []} />
    </div>
  );
};

export default CompanyList;
