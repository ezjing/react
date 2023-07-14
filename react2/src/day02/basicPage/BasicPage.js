import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

// return 안의 부모태그는 단 하나만 올 수 있다. 그 안의 자식태그는 개수 무관
function BasicPage(props) {
    return (
        <body>
            <Header title={'My First Bootstrap 5 Page'}/>
            <Nav/>
            <Main/>
            <Footer/>
        </body>
    )
}

export default BasicPage;