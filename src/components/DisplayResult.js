import React from "react";
import { Table } from "antd";

const DisplayResult = ({ result }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        dataSource={result}
        pagination={false}
        bordered
        scroll={{
          y: 2 * 5,
        }}
      />
    </>
  );
};

export default DisplayResult;
