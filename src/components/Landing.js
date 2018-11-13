import React, { Component } from 'react'
import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <section id="landing" className="py-5">
        <div className="primary-overlay text-white">
            <div className="container">
                <div className="row-lg-6 text-center">
                    <h2 className="display-2 mt-5 pt-5">Noah Bartell</h2>
                    <h3 className="display-4">Filmmaker</h3>
                    <p className="lead">Los Angeles, California</p>
                </div>

                <div className="row-lg-6">
                    {/* image goes here */}
                </div>
            </div>
        </div>
      </section>
    )
  }
}
