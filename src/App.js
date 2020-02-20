import React from 'react';
import logo from './logo.svg';
import {Clock} from "./concepts/HelloWorldToStateAndLifeCycle";
import {Toggle} from "./concepts/HelloWorldToStateAndLifeCycle";
import {LoginControl} from "./concepts/HandelingEvents";
import {Mailbox} from "./concepts/HandelingEvents";
import {Page} from "./concepts/ConditionalRendering";
import {Blog} from "./concepts/Lists";
import {Reservation} from "./concepts/Forms";
import {FlavorForm} from "./concepts/Forms";
import {NameForm} from "./concepts/Forms";
import {Calculator} from "./concepts/LiftingStateUp";
import {WelcomeDialog} from "./concepts/CompositionVSInheritance";
import {SignUpDialog} from "./concepts/CompositionVSInheritance";
import './App.css';

function App() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        ];
    return (
        <div>
            <Clock/>
            <hr/>
            <Toggle/>
            <hr/>
            <LoginControl/>
            <hr/>
            <Mailbox unreadMessages={messages}/>
            <hr/>
            <Page/>
            <hr/>
            <Blog posts={posts} />
            <hr/>
            <NameForm/>
            <hr/>
            <FlavorForm/>
            <hr/>
            <Reservation/>
            <hr/>
            <Calculator/>
            <hr/>
            <WelcomeDialog/>
            <hr/>
            <SignUpDialog/>
        </div>
    );
}

export default App;
