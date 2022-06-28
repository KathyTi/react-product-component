import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

export interface Props {
    children?: React.ReactNode;
}

function App({children}: Props){

    return (
        <Container className={'App'}>
            {children}
        </Container>
    );
}

export default App;