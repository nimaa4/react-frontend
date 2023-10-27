import React from "react";
import "./newsletter.css"
import {Container, Row,Col} from "reactstrap"  
const Newsletter = () => {
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h3>Subscribe now to get useful travelling information.</h3>
                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Get up to date with all the trendy places to visit and create fun memoris!Dont miss out!</p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src="https://freepngimg.com/download/globe/99482-earth-travel-globe-free-transparent-image-hq.png" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}
export default Newsletter;