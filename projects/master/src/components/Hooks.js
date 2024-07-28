import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap'
import NavbarComponents from './NavbarComponents'
export default function Hooks() {
    const [name, setName] = useState('Mary')
    const [surname, setSurname] = useState('Joyful')
    const [width, setWidth] = useState(window.innerWidth);
    const width2 = useWindowWidth();
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleSurnameChange = (event) => {
        setSurname(event.target.value)
    }
    const handleResize = () => {
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        document.title=name + ' ' + surname
    })
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // stops memory leak
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    })
    return (
        <div>
            <NavbarComponents />
            <section>
                <Row label="Name">{name} {surname} {width}</Row>
            </section>
            <section>
                <Row>
                    <input
                        value={name}
                        onChange={handleNameChange}
                    />
                </Row>
                <Row>
                    <input
                        value={surname}
                        onChange={handleSurnameChange}
                    />
                </Row>
                <Row>
                    Width: {width}
                </Row>
                <Row>
                    Width2: {width2}
                </Row>
            </section>
        </div>
    )
}
// custom hook
const useWindowWidth = () => {
    const [width2, setWidth2] = useState(window.innerWidth);
    const handleResize2 = () => {
        setWidth2(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize2);
        // stops memory leak
        return () => {
            window.removeEventListener('resize',handleResize2)
        }
    })
    return width2;
}