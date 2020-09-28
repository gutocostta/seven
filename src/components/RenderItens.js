import React from "react";
import { Row, Col } from "react-flexbox-grid";
import avatar from "../assets/images/avatar.png";


export default function RenderItens({ key, index, content }) {
  return (
    <div >
        <Row className="card" key={key}>
            <Col xs={2} md={1}><p>{index + 1}</p></Col>
            <Col xs={2} md={3}><img src={avatar} /></Col>
            <Col xs={6} md={6}><p>Name: <span>{content.name}</span></p></Col>
            <Col xs={2} md={2}><p>Age: <span>{content.age}</span></p></Col>
        </Row>
    </div>
  );
}
