import React from 'react';
import "./Projects.css";

import { 
        Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle, 
        Button 
    } from 'reactstrap';

const Projects = () => (
    <section className="projects" id="projects">
        <div className="container projects--container">
            <div className="row">
                <div className="col">
                    <h3 className="display-4 text-center p-4 projects--header">Projects</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 projects--cards text-center">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button className="projects--button" outline color="primary">Link</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4 projects--cards text-center">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button className="projects--button" outline color="primary">Link</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4 projects--cards text-center">
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button className="projects--button" outline color="primary">Link</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    </section>
)

export default Projects;