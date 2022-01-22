import { Row, Col, Typography, Form, Button, Upload, message } from "antd";
import React, { useState } from "react";
import classes from "../Apply/Apply.module.css";
import FormItem1 from "../Apply/FormItem1";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";


const config = {
  headers: { "content-type": "multipart/form-data" },
};

export const EditAddCourse = () => {
  const [inputs, setInputs] = useState();

  const onFinish = (values) => {
    setInputs(values);
    console.log(inputs);
    let formData = new FormData();
    formData.append("upload_preset","bph7yyze")
    formData.append("cloud_name","dmrv0lujq")
    formData.append("api_key","788359128755684")
    formData.append("file",inputs.courseImageUpload.fileList[0])

    axios.post(`https://api.cloudinary.com/v1_1/dmrv0lujq/upload`,formData, config ).then(res=> console.log(res))
    axios({
      method: "post",
      url: "http://localhost:5000/upload",
      data: { inputs: inputs },
    });
  };

  return (
    <>
      <Form
        colon={false}
        onFinish={onFinish}
        requiredMark={false}
        style={{
          width: "70%",
          margin: "auto",
        }}
        encType="multipart/form-data"
      >
        <Typography.Text
          className={classes.editCourseTitle}
          style={{ margin: "0 10px" }}
        >
          Add Course
        </Typography.Text>
        <FormItem1 name="courseImageUpload" />
        <Row>
          <Col md={12} sm={24} xs={24}>
            <div style={{ margin: "0 10px" }}>
              <FormItem1 label="Course Name" name="courseName" />
              <FormItem1 label="Teacher" name="teacher" />
              <Row gutter={[10, 0]}>
                <Col xl={12} xxl={12} lg={12} md={12} sm={24}>
                  <FormItem1 label="Student Limit" name="studentLimit" />
                </Col>
                <Col xl={12} xxl={12} lg={12} md={12} sm={24}>
                  <FormItem1 label="Course Fee" name="fee" />
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={12} sm={24} xs={24}>
            <div style={{ margin: "0 10px" }}>
              <Row gutter={[10, 0]}>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <FormItem1 label="Starting Date" name="startingDate" />
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <FormItem1 label="Ending Date" name="endingDate" />
                </Col>
              </Row>
              <FormItem1 label="Details" name="details" />
            </div>
          </Col>
          <Col md={24} sm={24} xs={24} xl={24} xxl={24}></Col>
        </Row>
        <Row gutter={[0, 20]} style={{ marginTop: 20 }}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div style={{ margin: "0 10px" }}>
              <Button
                size="large"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "#0275D8",
                }}
                htmlType="submit"
              >
                Apply
              </Button>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div style={{ margin: "0 10px" }}>
              <Button
                size="large"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "#c4c4c4",
                }}
                htmlType="reset"
              >
                Cancel
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};
