import React, {useState} from 'react';
import {Row} from 'reactstrap'
import NavbarComponents from './NavbarComponents'
export default function Reactstrap() {
    const [name] = useState('Here is a row label')
    return (
        <div>
            <NavbarComponents />
            <section>
                <Row>{name}</Row>
            </section>
        </div>
    )
}