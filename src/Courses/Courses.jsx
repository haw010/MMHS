import { Col, Row } from "antd";
import React from "react";
import { CardComponent } from "../Exporter/Exporter";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

export const Courses = () => {
  return (
    <div>
      <Row wrap justify>
        {arr.map((item) => (
          <Col
            lg={6}
            md={12}
            sm={12}
            xs={24}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {" "}
            <CardComponent title={`Course ${item}`} />{" "}
          </Col>
        ))}
      </Row>
    </div>
  );
};
