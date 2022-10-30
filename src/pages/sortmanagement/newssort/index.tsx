import React from 'react';
import { Typography, Card, Table, Input, Button } from '@arco-design/web-react';
import { useState, useRef } from 'react';
import { IconSearch } from '@arco-design/web-react/icon';
function App() {
  const data = [
    {
      key: '1',
      name: '震惊,一男子竟...',
      salary: '社会',
      address: '2022/08/08',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: '震惊,一男子竟...',
      salary: '社会',
      address: '2022/08/08',
      email: 'jane.doe@example.com',
    },
    {
      key: '3',
      name: '震惊,一男子竟...',
      salary: '社会',
      address: '2022/08/08',
      email: 'jane.doe@example.com',
    },
  ];
  const inputRef = useRef(null);
  const columns = [
    {
      title: '标题',
      dataIndex: 'name',
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className='arco-table-custom-filter'>
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder='Please enter name'
              value={filterKeys[0] || ''}
              onChange={(value) => {
                setFilterKeys(value ? [value] : []);
              }}
              onSearch={() => {
                confirm();
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) => (value ? row.name.indexOf(value) !== -1 : true),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => inputRef.current.focus(), 150);
        }
      },
    },
    {
      title: '关键字',
      dataIndex: 'salary',
    },
    {
      title: '日期',
      dataIndex: 'address',
    },
    {
      title: '摘要',
      dataIndex: 'email',
    },
  ];
  return <Table
    className='table-demo-resizable-column'
    border
    borderCell
    columns={columns}
    data={data}
  />
}

export default App;
