import { Table } from 'antd';

import { getStorage, setStorage } from 'services/storage';

const DataGrid = ({
  columns = [],
  data = [],
  showHeader = true,
  rowKey = '',
  isLoading = false,
  isSticky = false,
  className = '',
  rowClassName = '',
  pagination = {},
  showSorterTooltip = false,
  details = {},
  page,
  setDetails = () => {},
  ...rest
}) => {
  const onChange = (pagination, sorter, extra) => {
    let modifiedSortingKeys = { ...details };
    switch (extra.action) {
      case 'sort':
        if (sorter.order) {
          if (sorter.order === 'ascend') {
            modifiedSortingKeys['sort_key'] = `${sorter.field} asc`;
          } else if (sorter.order === 'descend') {
            modifiedSortingKeys['sort_key'] = `${sorter.field} desc`;
          }
        } else {
          delete modifiedSortingKeys.sort_key;
        }
        break;
      case 'paginate':
        modifiedSortingKeys['page'] = pagination?.current;
        modifiedSortingKeys['per_page'] = pagination?.pageSize;
        break;
      default:
        break;
    }
    const headerFilterValues = getStorage('headerFilter') || {};

    if ('page' in (headerFilterValues?.[page] || {})) {
      delete headerFilterValues[page].page;
      setStorage('headerFilter', { ...headerFilterValues });
    }

    setDetails({ ...modifiedSortingKeys });
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={rowKey}
      loading={isLoading}
      className={className}
      rowClassName={rowClassName}
      showSorterTooltip={showSorterTooltip}
      sticky={isSticky}
      onChange={onChange}
      pagination={pagination}
      showHeader={showHeader}
      {...rest}
    />
  );
};

export default DataGrid;
