import React, { Component } from 'react';
import style from './style/login.module.scss';
import { Form, Input, Icon, Button, Alert } from 'antd';
import { IUser, IUserStore, ILoginState, ILoginProps } from './model/user.type';
import action from './model/user.action';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
let { Item } = Form;



class Login extends Component<ILoginProps, ILoginState> {
  state: ILoginState;
  constructor(props: ILoginProps, state: ILoginState) {
    super(props, state);
    this.state = state;
  }

  handleSubmit(e: any) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login({
          userName: values.userName,
          password: values.password,
          vmaToken: values.vmaToken,
        });
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    if (!_.isEmpty(this.props.userInfo.token)) {
      return (<Redirect push to="/dashboard/analysis" />);
    }
    return (
      <div className={style.login}>
        <div className={style.form}>
          <h1 className={style.title}>WMS</h1>
          {!_.isEmpty(this.props.loginErrMsg) && <Alert className={style.errorAlert}  message={this.props.loginErrMsg} type="error" showIcon />}
          <Form onSubmit={this.handleSubmit}>
            <Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '账号不能为空!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)', fontSize: 16 }} />}
                  placeholder="请输入账号"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '密码不能为空！' }],
              })(
                <Input
                  type="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="密码"
                />
              )}
            </Item>
            <Item>
              {getFieldDecorator('vmaToken', {
                rules: [{ required: true, message: 'VMA TOKEN 不能为空!' }],
              })(
                <Input
                  prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.5)', fontSize: 16 }} />}
                  placeholder="请输入VMA TOKEN"
                />
              )}
            </Item>
          </Form>
          <Item>
            <Button
              type="primary"
              loading={this.props.isLogining}
              htmlType="submit"
              onClick={this.handleSubmit.bind(this)}
              className={style.loginButton}
            >
              Log in
            </Button>
          </Item>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }: { user: IUserStore }) => ({
  isLogining: user.isLogining,
  loginErrMsg: user.loginErrMsg,
  userInfo: user.userInfo,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: bindActionCreators(action.login, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Login));
// export default Login
