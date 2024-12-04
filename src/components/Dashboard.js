import React, { useState, useId } from "react";
import { Button, message, Steps, theme, Skeleton } from "antd";
import { LinkOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import AddURL from "./AddURL";
import DisplayResult from "./DisplayResult";
import useGetReq from "../hooks/useGetReq";
import { URLValidation } from "../util/validations";

const Dashboard = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [url, setUrl] = useState("");
  const [URLSdata, setURLSData] = useState("");
  const id = useId();
  const [data, loading, error] = useGetReq(url);

  const onAddURL = () => {
    const data = [];
    data.push({
      id: id,
      textURL: url,
    });
    setUrl("");
    setURLSData(data);
  };

  const onChangeURL = (e) => {
    setUrl(e.target.value);
  };

  const next = () => {
    let match = URLValidation(url);
    if (!match && !loading) {
      message.error("Please enter a valid URL");
      return;
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setUrl("");
    setCurrent(current - 1);
  };
  console.log(url);
  const steps = [
    {
      title: "URL",
      content: (
        <AddURL
          url={url}
          onChangeURL={onChangeURL}
          URLSdata={URLSdata}
          onAddURL={onAddURL}
        />
      ),
      icon: <LinkOutlined />,
    },
    {
      title: "Finish",
      content: <DisplayResult result={data} />,
      icon: <CheckCircleTwoTone />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));

  const contentStyle = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorder}`,
    marginTop: 16,
    padding: "2rem",
  };

  return (
    <>
      <Steps current={current} items={items} />
      <Skeleton loading={loading} active>
        <div style={contentStyle}>{steps[current].content}</div>
      </Skeleton>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} disabled={!url}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              message.success("Processing complete!");
              prev();
            }}
          >
            Done
          </Button>
        )}
      </div>
    </>
  );
};
export default Dashboard;