import React from "react"
import { Breadcrumb, Container } from "react-bootstrap"
import Header from "../../component/Header/Header"
import { Link } from "react-router-dom"
import "./Layout.css"
import Footer from "../../component/Footer/Footer"

const Layout = props => {
    return (
        <React.Fragment>
            <Container>
                <Header></Header>
                <Breadcrumb bg="dark">
                    <Breadcrumb.Item as={Link}>BloggerStop</Breadcrumb.Item>
                    <Breadcrumb.Item active>home</Breadcrumb.Item>
                </Breadcrumb>
                {props.children}
                <Footer></Footer>
            </Container>
        </React.Fragment>
    )
}
export default Layout