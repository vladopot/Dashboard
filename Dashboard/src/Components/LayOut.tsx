import React, { useState } from 'react'
import { Outlet } from 'react-router'
import { Button, Layout, Menu, Select } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    StockOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';

const LayOut = () => {
    const [callapsed, setCollapsed] = useState(false);

  return (
    <>
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={callapsed}
                style={{
                    height: '100vh',
                    position: 'sticky',
                    top: 0
                    }}>
                <Menu
                    theme='dark'
                    mode='inline'
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Users'
                        },
                        {
                            key: '2',
                            icon: <StockOutlined />,
                            label: 'Stats',
                        }
                    ]}>
                    
                </Menu>
            </Sider>
            <Layout>
                <Header style={{
                            padding: 0,
                            background: 'white',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                    <Button
                        type='text'
                        icon={callapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!callapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}>
                        
                    </Button>
                    <Select
                        defaultValue={'RUS'}
                        style={{
                            width: 100,
                            marginRight: 16
                        }}
                        options={[
                            { value: 'RUS', label: <span>RUS</span> },
                            { value: 'ENG', label: <span>ENG</span> }
                        ]}/>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: 'white',
                        borderRadius: 5
                    }}>
                    <div className="main">
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    </>
  )
}

export default LayOut