import React from 'react';
import { Col, Row } from 'react-bootstrap';
import profile from '../../assets/images/oliviercharles.jpg';
import '../../assets/css/script.css';

export default function About() {
	return (
		<>
			<div id="about">			
				<div className="container" style={{ padding: '20px' }}>
				<br/>
				<br />
					<Row>
						<Col className="text-center">
							<h2 className="heading"><strong>About Me</strong></h2>
						</Col>
					</Row>
					<hr className="line" />
					<div className="row">
						<div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
							<div>
								<img src={profile} className="d-flex profile-img" alt="Olivier Charles" />
							</div>
						</div>

						<div
							className="col-md-9 col-sm-12" style={{ margin: '0 auto', padding: '0 25px'}}	>
							<p style={{ margin: '20px 10px 0 10px', textAlign: 'justify', fontSize: '1.1em', color:'	#282828' }}>
								Passionate full stack web developer from
								Haiti and currently living in NYC ., effective at combining logical thinking and problem solving to develop
								user-friendly applications.
							</p>
							<p
								style={{ margin: '20px 10px 0px 10px', textAlign: 'justify', fontSize: '1.1em', color:'	#282828'}}>
								I am proactive in learning new skills and knowledge with core competency in
								full-stack web development such as JavaScript, HTML, CSS, jQuery, React,
								NodeJS, MongoDB, SQL, and RESTful APIs. Life-long dedication to learning and in
								self development. very organized, ability to work under
								pressure, collaborative communicator. I look forward to bringing my skills and
								passion for software development to build user focused applications.
							</p>
							<p style={{ margin: '20px 10px 0px 10px', textAlign: 'justify', fontSize: '1.1em', color:'	#282828' }}	>
								<strong>Contact Email: oliviercharles956@gmail.com </strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<br />
		</>
	);
}
