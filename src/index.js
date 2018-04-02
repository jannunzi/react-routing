import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class PageUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.updatePage =
            this.updatePage.bind(this);
        this.state = {id: ''}
    }

    componentDidMount() {
        this.updatePage
        (this.props.match.params.id);
    }
    componentWillReceiveProps(newProps){
        this.updatePage
        (newProps.match.params.id);
    }

    updatePage(id) {
        this.setState({id: id});
    }

    render() {
        return (
            <h2>PageUpdate
                {this.state.id}
            </h2>
        )
    }
}

const PageParam = ({match}) => {
    return (<h2>Page Param {match.params.id}</h2>)
};

const Page1 = () => {
    return (<h2>Page 1</h2>)
};

const Page2 = () => {
    return (<h2>Page 2</h2>)
};

const HelloWorld = () => {
    return(<h2>Hello World!</h2>);
};

class App extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Link to="/hello">Hello</Link> |
                    <Link to="/page1">Page1</Link> |
                    <Link to="/page2">Page2</Link> |
                    <Link to="/page/1">PageParam 1</Link> |
                    <Link to="/page/2">PageParam 2</Link> |
                    <Link to="/pageUpdate/345">
                        PageUpdate 345</Link> |
                    <Link to="/pageUpdate/456">
                        PageUpdate 456</Link> |
                    <Route path="/hello" component={HelloWorld}/>
                    <Route path="/page1" component={Page1}/>
                    <Route path="/page2" component={Page2}/>
                    <Route path="/page/:id" component={PageParam}/>
                    <Route path='/pageUpdate/:id'
                           component={PageUpdate}/>

                </div>
            </Router>
        );
    }}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
