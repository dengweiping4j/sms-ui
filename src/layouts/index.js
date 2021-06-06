import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import UserCord from '../components/UserCard/UserCard';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles['logo']}>
            <img src={'/images/logo.svg'} width={30} />
            <span>后台管理系统</span>
          </div>

          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <SubMenu key='sub1' title='系统管理'>
              <Menu.Item key='1' icon={<UserOutlined />}>
                用户管理
              </Menu.Item>
              <Menu.Item key='2' icon={<UsergroupAddOutlined />}>
                角色管理
              </Menu.Item>
              <Menu.Item key='3' icon={<MenuOutlined />}>
                菜单管理
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className={styles['site-layout']}>
          <Header className={styles['site-layout-header']} style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              style: {
                width: '50px',
                padding: '0 24px',
                fontSize: '18px',
                lineHeight: '64px',
                cursor: 'pointer',
                transition: 'color 0.3s',
              },
              onClick: this.toggle,
            })}
            <div className={styles['site-layout-header-right']}>
              <UserCord user={{ userName: '超级管理员' }} />
            </div>
          </Header>
          <Content
            className={styles['site-layout-background']}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>

          <Footer style={{ textAlign: 'center' }}>管理系统 ©2021 Created by DengWeiping</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
