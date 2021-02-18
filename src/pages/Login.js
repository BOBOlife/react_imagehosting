import {Form, Input, Button} from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px 0 rgb(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
`
const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
}

const Component = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const validateUsername = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject('不能出现字母数字下划线以外的字符')
    if (value.length < 4 || value.length > 10) return Promise.reject('用户名长度为4~10个字符')
    return Promise.resolve()
  }
  return (
    <Wrapper>
      <Title>登录</Title>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '输入用户名',
            },
            {
              validator: validateUsername
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '输入密码',
            },
            {
              min: 4,
              message: '最少输入4个字符'
            },
            {
              max: 10,
              message: '最大输入10个字符'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default Component