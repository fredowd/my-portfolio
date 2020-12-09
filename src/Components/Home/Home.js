import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SkillCard from '../Core/SkillsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
    return (
        <Row>
            <Col className='mt-4' md='4'>
                <Col xs={12} md={12}>
                    <Card className="text-center bg-default">

                        <Image src="/photo.jpg" roundedCircle fluid={true} className='d-flex align-items-center justify-content-center m-auto App__profile_photo' />

                        <Card.Body>
                            <Card.Title>
                                Fredo
                                RAHERIMANJAKANIAINA
                                <Row className='d-flex justify-content-center mt-4'>
                                    <a target='_blank' rel="noreferrer" className='social-link' href='https://web.facebook.com/fredo.raherimanjakaniaina/'>
                                        <Col>
                                            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                                        </Col>
                                    </a>
                                    <a target='_blank' rel="noreferrer" className='social-link' href='https://twitter.com/Raherimanjakan1'>
                                        <Col>
                                            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                                        </Col>
                                    </a>
                                    <a target='_blank' rel="noreferrer" className='social-link' href='http://github.com/fredowd'>
                                        <Col>
                                            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                                        </Col>
                                    </a>
                                    <a target='_blank' rel="noreferrer" className='social-link' href='https://www.linkedin.com/in/fredo-raherimanjakaniaina-77847519b/'>
                                        <Col>
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                                        </Col>
                                    </a>
                                </Row>
                            </Card.Title>
                            <Card.Text className='mt-4'>
                                Jeune développeur passionné et investi. J'investi du temps dans ma veille technologique afin de fournir des prestations optimal dans mon domaine.
                                 <br /><br />
                                J'adore relever des défis, par exemple par les projets personnels que je crées ou aussi des petites défis d'apprentissage que je me lance moi même.
                                    </Card.Text>
                            <Button variant="secondary">Télécharger CV</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Col>
            <Col className='mt-4' md='8'>

                <Container>
                    <h1 className='text-center'>DOMAINES DE COMPETENCES</h1>
                    <h6 className='text-center'>LANGAGES DE PROGRAMMATION - LOGICIELS MAITRISÉS</h6>

                    <SkillCard title={'Backend'}>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'php']} size="6x" />
                                <h3>PHP</h3>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'node']} size="6x" />
                                <h3>Node JS</h3>
                            </Col>
                        </Row>
                    </SkillCard>

                    <SkillCard title={'Frontend'}>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'html5']} size="6x" />
                                <h3>HTML5</h3>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'css3-alt']} size="6x" />
                                <h3>CSS3</h3>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'js']} size="6x" />
                                <h3>JavaScript</h3>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'bootstrap']} size="6x" />
                                <h3>Bootstrap</h3>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'sass']} size="6x" />
                                <h3>Sass Pre-processor</h3>
                            </Col>
                        </Row>
                    </SkillCard>

                    <SkillCard title={'OS'}>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'windows']} size="6x" />
                                <h3>Windows</h3>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'linux']} size="6x" />
                                <h3>Linux</h3>
                            </Col>
                        </Row>
                    </SkillCard>

                    <SkillCard title={'Framework'}>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'laravel']} size="6x" />
                                <h3>Laravel</h3>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'symfony']} size="6x" />
                                <h3>Symfony</h3>
                            </Col>
                        </Row>
                    </SkillCard>

                    <SkillCard title={'CMS'}>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'wordpress']} size="6x" />
                                <h3>WordPress</h3>
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'prestashop']} size="6x" />
                                <h3>Prestashop</h3>
                            </Col>
                        </Row>
                    </SkillCard>

                    <SkillCard title={'Bases de données'}>
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={['fab', 'database']} size="6x" />
                                <h3>MySQL</h3>
                            </Col>
                        </Row>
                    </SkillCard>
                </Container>
            </Col>
        </Row>
    )
}
