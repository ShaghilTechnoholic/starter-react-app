import React, { useState } from 'react'
import { Divider, Radio, Table } from 'antd';
import searchIcon from '../../assets/search.png'
import searchFilterIcon from '../../assets/Filters lines.png'
const LandLordDashboardChart = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    const columns = [
        {
            title: 'LEASE ID',
            dataIndex: 'leaseId',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'TENANT NAME',
            dataIndex: 'tenantName',
        },
        {
            title: 'PROPERTY ADDRESS',
            dataIndex: 'address',
        },
        {
            title: 'DATE',
            dataIndex: 'date',
        },
    ];
    const data = [
        {
            key: '1',
            leaseId: 24301,
            tenantName: "Olivia Rhye",
            address: '295 Retton CirWilliamson',
            date: '12-11-22 -12-12 - 23',
        },
        {
            key: '2',
            leaseId: 23489,
            tenantName: "Phoenix Baker",
            address: '1500 Marilla St, Dallas',
            date: '10-11-22 - 12-12 - 23',
        },
        {
            key: '3',
            leaseId: 88076,
            tenantName: "Lana Steiner",
            address: '1908 Parrish Avenue',
            date: '12-11-22 -12-12 - 23',
        },
        {
            key: '4',
            leaseId: 23556,
            tenantName: "Drew Cano",
            address: 'Andi Lane',
            date: '12-11-22 -12-12 - 23',
        },
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    return (
        <>

            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="table-search-input position-relative">
                                <input type="text" placeholder='Search' className="form-control search-form-control" />
                                <div className="search-icon">
                                    <img src={searchIcon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"><button className='table-filter-btn'> <img src={searchFilterIcon} alt="" /> More filters</button></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            </div>
        </>
    )
}

export default LandLordDashboardChart
