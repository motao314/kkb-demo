import React, { Fragment } from 'react';
import "./index.css";
import Nav from "./nav";
import List from './list';
import { Switch, Route } from 'react-router-dom';
import View404 from './view404';
import Pagination from "./pagination"
const types = ["all","good","share","ask"]
function App() {
  return (<div className="wrap">
        <Nav />
        <Switch>
            <Route 
                path={["/","/:type","/:type/:page"]} 
                exact
                render={(props)=>{
                    let {params} = props.match;
                    let {type="all",page=1} = params;
                    if(types.includes(type)&&page>=1){
                      return <Fragment>
                            <List />
                            <Pagination />
                      </Fragment>
                    }
                    return <View404 />
                }}
            />
            <Route component={View404} />
        </Switch>
  </div>);
}

export default App;
