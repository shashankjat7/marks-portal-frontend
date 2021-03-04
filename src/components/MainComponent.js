import React,{Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from "./HeaderComponent";
import LeaderBoard from "./LeaderBoardComponent";
import EnterMarks from "./EnterMarksComponent";
import HomeComponent from "./HomeComponent";
class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={ HomeComponent } />
                    <Route path="/enter" component={ EnterMarks } />
                    <Route path ='/leaderboard' component={ LeaderBoard }/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        );
    }
}
export default Main;
