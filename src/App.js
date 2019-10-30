import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';

export default function App() {
    return (    // can only return one element
        <div>
        <Header />
        <MemeGenerator />
        </div>
    )
}
