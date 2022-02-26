import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import UserPost from './pages/UserPost';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="" >
                <Header />
                <div className = "container">
                    <Route exact path="/">
                        <Home />
                    </Route>
                <Route exact path="message/:messageID">
                    <singleMessage />
                </Route>
                </div>
                <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;