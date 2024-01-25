import { useState, useMemo, useCallback } from 'react';

import DataGrid from 'components/DataGrid';
import Title from 'components/Title';
import { getTableColumns } from 'constants/company';
import PageHeader from 'components/PageHeader';

const companiesData = [
  { id: 1, companyName: 'Company A', size: 'Small', type: 'Type 1', industry: 'Industry 1', status: '' },
  { id: 2, companyName: 'Company B', size: 'Medium', type: 'Type 2', industry: 'Industry 2', status: 'Accepted' }
];

const CompanyList = () => {
  const [companies, setCompanies] = useState(companiesData);

  const handleSendRequest = useCallback(
    record => {
      const updatedCompanies = companies.map(c => (c.id === record.id ? { ...c, status: 'Pending' } : c));
      setCompanies(updatedCompanies);
    },
    [companies]
  );

  const tableColumns = useMemo(() => getTableColumns(handleSendRequest), [handleSendRequest]);

  return (
    <div>
      <PageHeader
        leftLayout={<Title>Company Details</Title>}
        /* rightLayout={
        <HeaderFilter
          page='company
          className={{ select: 'employees-select', multiSelect: 'employees-multi-select' }}
        />
      } */
      />

      <DataGrid columns={tableColumns} data={companies} />
    </div>
  );
};

export default CompanyList;
