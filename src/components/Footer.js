import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className="footer special-color border-bottom">
        		<div className="container">
        			<div className="row justify-content-center page-links">
          				<a className="column social-media align-self-center" rel="noopener" target="_blank" href="https://www.instagram.com/gamedev2019/"><i className="fa fa-10x fa-instagram fa-md" aria-hidden="true"></i></a>
          				<a className="column social-media" rel="noopener" target="_blank" href="https://www.facebook.com/UniCsGameDev"><i className="fa fa-facebook fa-md" aria-hidden="true"></i></a>
          				<a className="column social-media" rel="noopener" target="_blank" href="https://gitlab.cs.man.ac.uk/unics-game-development"><i className="fa fa-gitlab fa-md" aria-hidden="true"></i></a>
        			</div>
        			<div className="row justify-content-center">
          				<small className="text-muted">UniCS GameDev © 2020</small>
        			</div>
      			</div>
    		</footer>
		);
	}
}

export default Footer;
