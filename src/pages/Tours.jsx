import React from "react";
import FeaturedTourList from "./FeaturedTourList";
import {Container,Row} from "reactstrap";
import SearchBar from "./Searchbar";
import "./home.css";
const Tours = () => { 
    return (
    <section>
        <div className="backg">
                <h1 className="text-center p-5">Explore</h1>
        </div>
        <Container>
        <Row>
            <SearchBar/>
            <h2 className="p-3">Our featured tours</h2>
            <FeaturedTourList/>
        </Row>
        </Container>
</section>
);
};
export default Tours;