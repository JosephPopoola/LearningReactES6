import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from  './components/App';
import HomePage from  './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TaskPage from './components/tasks/TaskPage';
import TaskEditPage from './components/tasks/TaskEditPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage} />
        <Route path="tasks" component={TaskPage} />
        <Route path="task/:id" component={TaskEditPage} />
    </Route>
);