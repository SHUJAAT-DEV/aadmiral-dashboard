import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Input, Popconfirm, Row, Col, Form } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getServicesPages,
  createSericesPage,
} from "../../redux/ContentManagement/GalvestonCruises/action";

function Services() {
  const dispatch = useDispatch();
  const [isVisible, setIsVissible] = useState(false);
  const [datas] = useState([
    {
      key: '1',
      serviceName: 'Services one one one ',
      description: 'Services one one oneServices one one oneServices one one oneServices one one oneServices one one one'
    },
    {
      key: '2',
      serviceName: 'Services one one one ',
      description: 'Services one one oneServices one one oneServices one one oneServices one one oneServices one one one'
    },
    {
      key: '3',
      serviceName: 'Services one one one ',
      description: 'Services one one oneServices one one oneServices one one oneServices one one oneServices one one one'
    },
    {
      key: '4',
      serviceName: 'Services one one one ',
      description: 'Services one one oneServices one one oneServices one one oneServices one one oneServices one one one'
    },
  ]);

  const {
    loading,
    pageData,
  } = useSelector((state) => state.galveston);

  useEffect(() => {
    dispatch(getServicesPages());
  }, [loading]);


  const handleDelete = (key) => {

  };
  const columns = [
    {
      title: 'Services Name',
      dataIndex: 'pageName',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) =>
        <>
          <NavLink to={`/services/${record._id}`}><EditOutlined style={{ marginRight: 15 }} /></NavLink>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
            <DeleteOutlined style={{ color: "red" }} />
          </Popconfirm>
        </>
    },

  ];


  const onFinish = (data) => {
    dispatch(createSericesPage(data));
    setIsVissible(false);
  }


  const tableData = pageData && pageData.data ? pageData.data : [];

  return (
    <div className="main_align_container">
      <section className="app-content-wrapper">
        <div className="dashboard_content_container">
          <div className="main_start_datat">
            <div className="data_content">
              <div style={{ marginBottom: '2rem', float: 'right' }}>
                <Button icon={<UserAddOutlined />} onClick={() => setIsVissible(true)}> Add Service</Button>
              </div>
              <Table
                columns={columns}
                dataSource={tableData}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </section>
      <Modal
        title="Create New Service Page"
        open={isVisible}
        footer={[
          <Button form="serviceForm" key="submit" htmlType="submit">
            Save
          </Button>
        ]}
      >
        <Form
          name="serviceForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Page Name"
            name="pageName"
            rules={[{ required: true, message: 'Please input service page name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Descriptions"
            name="description"
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Services;