import React, { Component } from 'react'
import "./About.css";

export default class Bio extends Component {
  render() {
    return (
        <section className="about" id="about">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h3 className="display-4 text-center pt-4 about--header">About</h3>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem error, dolores totam dolorum officiis explicabo qui fugiat! Possimus enim soluta neque quos praesentium quo accusantium rerum aut quaerat fuga unde repudiandae sit, deleniti nesciunt dicta voluptas officiis modi dolorum, corrupti illum. Qui possimus eum maxime molestias harum? Quae omnis explicabo minima nostrum. Deleniti cupiditate facilis labore id non excepturi error!</p>
                </div>

                <div className="col-md-6 about-photo">
                  <img className="img img-fluid about--img" src="https://source.unsplash.com/random/240x240" alt="Photo of Noah goes here" />
                </div>
              </div>

              
            </div>
            
        </section>
    )
  }
}
