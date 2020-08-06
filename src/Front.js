import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FrontPage extends Component {
    render() {
        
      return (
            <div>
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" id="mainBlock">
                    <div class="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 class="display-4 font-weight-normal">fw 2021</h1>
                        <p class="lead font-weight-normal">unique odeic fashion for the upcoming fw 2021</p>
                        <a class="btn btn-secondary" href="#">Coming soon</a>
                    </div>
                </div>
                <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                        <h2 class="display-5">our mission</h2>
                        <p class="lead">to deleiver quality products to our consumers</p>
                        </div>
                    </div>
                    <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div class="my-3 p-3">
                        <h2 class="display-5">old fashion</h2>
                        <p class="lead">take a look at our past fashion</p>
                        <a class="btn btn-outline-secondary" href="#">view</a>
                        </div>
                    </div>
                    <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                        <h2 class="display-5">our vision</h2>
                        <p class="lead">expand and create multiple departments</p>
                        </div>
                    </div>
                </div>
            </div>
            
      );
    }
  }