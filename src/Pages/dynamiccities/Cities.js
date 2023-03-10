import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Input, Popconfirm, Form } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  createSericesPage,
  getCitiesPages,
} from "../../redux/ContentManagement/GalvestonCruises/action";

function Services() {
  const dispatch = useDispatch();
  const [isVisible, setIsVissible] = useState(false);
  const {
    loading,
    pageCityData,
  } = useSelector((state) => state.galveston);

  useEffect(() => {
    dispatch(getCitiesPages());
  }, [loading]);

  const handleDelete = (key) => {
  };
  const columns = [
    {
      title: 'City Name',
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
          <NavLink to={`/cities/${record._id}`}><EditOutlined style={{ marginRight: 15 }} /></NavLink>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
            <DeleteOutlined style={{ color: "red" }} />
          </Popconfirm>
        </>
    },

  ];


  const onFinish = (data) => {
    dispatch(createSericesPage({ ...data, type: 1 }));
    setIsVissible(false);
  }
  const tableData = pageCityData && pageCityData.data ? pageCityData.data : [];
  return (
    <div className="main_align_container">
      <section className="app-content-wrapper">
        <div className="dashboard_content_container">
          <div className="main_start_datat">
            <div className="data_content">
              <div style={{ marginBottom: '2rem', float: 'right' }}>
                <Button icon={<UserAddOutlined />} onClick={() => setIsVissible(true)}> Add City</Button>
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
        title="Create New City Page"
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