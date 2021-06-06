import React, { Component } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import styles from './UserCard.less';

class UserCord extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toUserDetail = () => {

  };

  render() {

    const { user = {} } = this.props;
    const menu = (
      <Menu className={styles['menu']}>
        <Menu.Item className={styles['item']}><img src={'/images/password-u.svg'} className={styles['img']} width={20} />修改密码</Menu.Item>
        <Menu.Item className={styles['item']}><img src={'/images/logout.svg'} className={styles['img']} width={17} style={{marginLeft:'4px'}}/>退出登录</Menu.Item>
      </Menu>
    );

    return <div>

      <Dropdown overlay={menu} arrow>
        <a onClick={() => this.toUserDetail()}>
          <Avatar size={40} alt={'头像'}>
            {user.userName.substr(0, 1)}
          </Avatar>
          <a className={styles['user-name']}>{user.userName}</a>
        </a>
      </Dropdown>
    </div>;
  }
}

export default UserCord;
