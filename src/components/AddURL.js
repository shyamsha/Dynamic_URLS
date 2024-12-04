import React from "react";
import { Input, Button, Flex, Tooltip, List, Space } from "antd";
import { PlusSquareTwoTone, LinkOutlined } from "@ant-design/icons";

function AddURL({ url, onChangeURL, URLSdata, onAddURL }) {
  return (
    <>
      <Flex gap="small" vertical>
        <Flex justify="center" gap="small">
          <Input
            placeholder="Enter URL"
            value={url}
            onChange={onChangeURL}
            style={{ width: "50%" }}
          />
          <Tooltip title="Add URL">
            <Button
              type="primary"
              icon={<PlusSquareTwoTone />}
              onClick={onAddURL}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <List
        itemLayout="vertical"
        size="small"
        dataSource={URLSdata}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Space>
              <LinkOutlined />
              {item.textURL}
            </Space>
          </List.Item>
        )}
      />
    </>
  );
}

export default AddURL;
