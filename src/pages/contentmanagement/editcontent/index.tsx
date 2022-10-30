import React from 'react';
import { Typography, Card, Space } from '@arco-design/web-react';
import {
  Form,
  Input,
  Select,
  Button,
  Upload,
  DatePicker,
  Modal,
} from '@arco-design/web-react';
const TextArea = Input.TextArea;
function Example() {

  const FormItem = Form.Item;
  const formItemLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 17,
    },
  };
  const noLabelLayout = {
    wrapperCol: {
      span: 17,
      offset: 7,
    },
  };



  return (
    <Card style={{ height: '80vh' }}>
      <div style={{ maxWidth: 650 }}>
        <Form
          autoComplete='off'
          {...formItemLayout}
          initialValues={{
            slider: 20,
            'a.b[0].c': ['b'],
          }}
          scrollToFirstError
        >
          <FormItem label='标题' field='name' rules={[{ required: true }]}>

            <Input placeholder='请输入标题' />
          </FormItem>
          <FormItem
            label='关键字'
            required
            rules={[{ type: 'array', minLength: 1 }]}
          >
            <Select
              mode='multiple'
              placeholder='请选择关键字'
              allowCreate
              options={['学校', '社会', '政府', '学生', '新闻']}
            />
          </FormItem>

          <FormItem label='内容' field='name' rules={[{ required: true }]}>

            <TextArea
              placeholder='请输入文章内容'
              style={{ width: 350 }}
            />
          </FormItem>
          <FormItem label='日期' field='date' rules={[{ required: true }]}>
            <DatePicker showTime />
          </FormItem>
          <Form.Item
            label='上传附件'
            field='upload'
            triggerPropName='fileList'
            initialValue={[
              {
                uid: '-1',
                url: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
                name: '20200717',
              },
            ]}
          >
            <Upload
              listType='picture-card'
              multiple
              name='files'
              action='/'
              onPreview={(file) => {
                Modal.info({
                  title: 'Preview',
                  content: (
                    <img
                      src={file.url || URL.createObjectURL(file.originFile)}
                      style={{
                        maxWidth: '100%',
                      }}
                    ></img>
                  ),
                });
              }}
            />
          </Form.Item>
          <FormItem {...noLabelLayout} >
            <div style={{ marginLeft: '230px' }}>
              <Button type='primary'
              >
                保存
              </Button>
              <Button type='primary' style={{ marginLeft: '30px' }}
              >
                发布
              </Button>

            </div>


          </FormItem>
        </Form>
      </div>
    </Card>
  );
}

export default Example;
