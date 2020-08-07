import React from 'react';
import "./index.css";
import { Switch, Route } from 'react-router-dom';
import Index from "./view/index/index";
import Details from "./view/details/index";
import View404 from "./view/404/index"; 
const types = ["all","good","share","ask"];
function App() {
  return (<div className="wrap">
        <Switch>
          <Route 
                path="/details/:id" 
                exact
                component={Details}
            />
            <Route 
                path={["/","/:type","/:type/:page"]} 
                exact
                render={(props)=>{
                    let {params} = props.match;
                    let {type="all",page=1} = params;
                    if(types.includes(type)&&page>=1){
                      return <Index />
                    }
                    return <View404 />
                }}
            />
            <Route component={View404} />
        </Switch>
  </div>);
}

export default App;
