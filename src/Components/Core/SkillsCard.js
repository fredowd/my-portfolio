import React from 'react';
import Card from 'react-bootstrap/Card';

export default function SkillsCard({ title, children }) {
    return (
        <Card className="text-center mt-4">
            <Card.Header className='bg-default'><h4>{title}</h4></Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )
}
