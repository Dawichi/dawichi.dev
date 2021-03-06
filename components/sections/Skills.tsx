import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ProgressBar from 'react-bootstrap/ProgressBar'

import styles from '../../styles/skills.module.scss'

interface skillProps {
	color: string;
	percentage: number;
	label: string;
} 
const Skill = ({ color, percentage, label }: skillProps) => (
	<Col xs={12} lg={6} className={styles.progressBars}>
		<div>
			{ label } <span>{ percentage }%</span>
			<ProgressBar variant={color} now={percentage} />
		</div>
	</Col>
)


export default function Skills() {

	return (
		<Container className={styles.container} fluid>
			{/* Generated by https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections */}
			<svg viewBox="0 0 500 150" preserveAspectRatio="none">
				<path d="M0.00,49.98 C180.86,149.50 327.03,0.50 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
			</svg>

			<Container className={styles.whoiam} fluid>
				<div>
					<h3 id="skillset">Web development <br/> <i className="bi bi-code-slash"></i></h3> 
				</div>
			</Container>
			
			<svg viewBox="0 0 500 150" preserveAspectRatio="none" className={styles.invertedSvg}>
				<path d="M0.00,49.98 C180.86,149.50 327.03,0.50 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
			</svg>

			<Container className={styles.whaticando} fluid>
				<Row>
					<Col xs={12} lg={3} className={styles.label}>
						<h4><i className="bi bi-kanban"></i> What I can do?</h4>
					</Col>

					<Col xs={12} lg={8} className={styles.progressBars}>
						<Row>
							<Skill color="danger" 	percentage={95} label="HTML / CSS / JS / TS" />
							<Skill color="primary" 	percentage={95} label="React / React Native" />
							<Skill color="dark" 	percentage={85} label="NEXT.js / Gatsby / GraphQL" />
							<Skill color="success" 	percentage={80} label="MongoDB / Mongoose" />
							<Skill color="primary" 	percentage={75} label="Node / Express" />
							<Skill color="danger" 	percentage={70} label="Jira / Trello / Slack" />
							<Skill color="success" 	percentage={60} label="Wordpress / Prestashop / Strapi" />
							<Skill color="warning" 	percentage={55} label="MariaDB / MySQL" />
							<Skill color="warning" 	percentage={50} label="Python / Flask / Django" />
							<Skill color="dark" 	percentage={40} label="Linux services / Docker" />
						</Row>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}