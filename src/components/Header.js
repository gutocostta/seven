import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default function Header() {
    return (
        <header className="header-content">
            <Grid fluid>
                <Row>
                    <Col xs={8} md={9}>
                        <h1>Seven App</h1>
                    </Col>
                </Row>
            </Grid>
        </header>
    );
}