import React, { useState } from "react";
import background from '../dummyImages/dummyLongBackground.jpg';
import classes from './Apply.module.css';
import { Row, Col, Typography, Form, Button } from 'antd';
import FormItem from './FormItem';

const leftBackground = { 
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '800px',
}

export const Apply = () => {

  const [ inputs, setInputs ] = useState();

  const onFinish = values => {
    setInputs(values)
    console.log(values)
  }

  return (
    <>
      <Row>
        <Col md={8}>
          <div style={leftBackground}></div>
        </Col>
        <Col md={16} className={classes.rightPanel}>
        <Typography.Text className={classes.title}>Apply for Course</Typography.Text>
        <div className={classes.wrapper}>
          <Form colon={false} onFinish={onFinish} requiredMark={false}>
            <Row justify='space-between'>
              <Col md={12} sm={24}>
                <FormItem label="Name" name='name'/>
                <FormItem label="Phone Number" name='phoneNumber'/>
                <FormItem label="Occupancy" name='occupancy' />
                <FormItem label="Gender" name='gender' />
              </Col>
              <Col md={12} sm={24}>
                <FormItem label="Age" name='age' />
                <FormItem label="E-mail" name='email' />
                <FormItem label="Company/School Name" name='company/school' />
                <FormItem label="Desired Course" name='desiredCourse' />
              </Col>
              <Button type="primary" size='large' style={{width: '35%', borderRadius: '10px'}} htmlType="submit">Apply</Button>
            </Row>
          </Form>
        </div>
        </Col>
      </Row>
    </>
  )
}
