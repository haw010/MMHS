import React from 'react'
import classes from './Apply.module.css'
import { Form, Radio, Input, Select } from 'antd'

const FormItem = ({ label, name }) => {

    let message = '';
    switch(name) {
        case 'name': message='Please fill your name'; break;
        case 'email': message='Please fill the email'; break;
        case 'phoneNumber': message='Please fill the phone number'; break;
        case 'age': message='Please fill the age'; break;
        case 'occupancy': message='Please fill the occupancy'; break;
        case 'company/school': message='Please fill the company or school'; break;
        case 'desiredCourse': message='Please fill the desired course'; break;
        case 'gender': message='Please select the gender'; break;
        default: message = '';break;
    }
    const rules=[
        {
            type: name === 'email' && 'email',
            required: true,
            message: message,
        },
    ]

    const formItems = () => {
        if(name === 'gender') {
            return (
                <Form.Item label="Gender" name='gender' labelCol={{sm: 24}} labelAlign='left' rules={rules}>
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </Radio.Group>
                </Form.Item>
            )
        } else if(name === 'desiredCourse') {
            return (
                <Form.Item label="Desired Course" name='desired course' labelCol={{sm: 24}} labelAlign='left' rules={rules}>
                    <Select size='large' style={{ width: 420 }}>
                        <Select.Option value="course one">Course 1</Select.Option>
                        <Select.Option value="course two">Course 2</Select.Option>
                        <Select.Option value="course three">Course 3</Select.Option>
                    </Select>
                </Form.Item>
            )
        } else {
            return (
                <Form.Item label={label} name={name} labelCol={{sm: 24}} labelAlign='left' rules={rules}>
                    <Input size='large' className={classes.input} style={{ width: '80%' }}/>
                </Form.Item>
            )
        }
    }

    return (
        <>
            {formItems()}
        </>
    )
}

export default FormItem
