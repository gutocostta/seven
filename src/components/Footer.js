import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default function Footer() {
  return (
    <footer className="footer-content">
        <Grid fluid>
            <Row>
                <Col md={6} sm={7}>
                    <p>Teste - Desenvolvedor Frontend</p>
                </Col>
                <Col md={1} sm={2}>
                </Col>
                <Col md={5} sm={3}>
                    <p className="text-right">Gustavo Costa</p>
                </Col>
            </Row>
        </Grid>
    </footer>
  );
}