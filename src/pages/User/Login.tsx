import React, { Component } from 'react';
import style from './style/login.module.scss';
import { Form, Input, Icon, Button } from 'antd';
import { connect } from '../../assets/js/redux.patch';
import { FormComponentProps } from 'antd/lib/form';
import { UserInterface } from './model/user.type';
import action from './model/user.action';
import { bindActionCreators, Dispatch } from 'redux';
let { Item } = Form;
export interface UserInfoStateInterface {
  userInfo:UserInterface;
  isLogining:boolean;
}
interface LoginPropsInterface extends UserInfoStateInterface, FormComponentProps{
}
class Login extends Component<LoginPropsInterface, UserInfoStateInterface> {
  constructor(props: LoginPropsInterface, state:UserInfoStateInterface) {
    super(props,state);
  }

  handleSubmit(){

  }
  render() {
    debugger
    const { getFieldDecorator } = this.props.form
    return (
      <div className={style.login}>
        <div className={style.form}>
        <h1>WA</h1>
          <Form onSubmit={this.handleSubmit}>
            <Item>
            {getFieldDecorator('user.userName', {
              rules: [{ required: true, message: '账号不能为空!' }]
            })(
              <Input
                prefix={
                  <Icon
                    type="user"
                    style={{ color: 'rgba(0,0,0,.5)', fontSize: 16 }}
                  />
                }
                placeholder="请输入账号"
              />
            )}
            </Item>
            <Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
              />
            </Item>
          </Form>
          <Button type="primary" htmlType="submit" className={style.loginButton}>
            Log in
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }: { [key: string]: UserInfoStateInterface }) => ({
    isLogining:user.isLogining,
    userInfo: user,
  })
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // login: bindActionCreators(action.login, dispatch)
  }
  
};

export default connect(mapStateToProps,mapDispatchToProps)(Form.create<LoginPropsInterface>({})(Login))
// export default Login