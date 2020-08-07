import React, { Fragment } from "react";
import Nav from "../../component/nav";
import List from "./list";
import Pagination from "./pagination";

function Index(){
    return <Fragment>
        <Nav />
        <List />
        <Pagination />
    </Fragment>
}

export default Index;