import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "@/api/index";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "@/context";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [, dispatch] = useStateValue();
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post("/auth/login", values);
      dispatch({ type: "LOGIN", payload: response.data.token });
      messageApi.success("Welcome back!");
      navigate("/");
    } catch (error) {
      messageApi.error("Incorrect username or password!");
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      {contextHolder}
      <div className="w-[400px] bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-center text-4xl font-semibold text-gray-800 mb-8">Sign In</h3>
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please enter your username!" },
            ]}
          >
            <Input size="large" placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
            ]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full text-lg"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;