import React from 'react'

const Timeline = () => {
  return (
    <div>
      <section className="who-we">
		<div className="container">
			<h2 className="title who-we__title">
				<span>w</span>
				<span>•</span>
				<span>h</span>
				<span>•</span>
				<span>o</span>
				<span>&nbsp;&nbsp;&nbsp;</span>
				<span>w</span>
				<span>•</span>
				<span>e</span>
				<span>&nbsp;&nbsp;&nbsp;</span>
				<span>a</span>
				<span>•</span>
				<span>r</span>
				<span>•</span>
				<span>e</span>
			</h2>
			<p className="who-we__big-text"><span>We provide a full range of services in the field of cryptocurrency mining:
					Hosting and supplies, maintenance and service, consulting, software development and engineering for
					mining systems and data center infrastructure.</span></p>

			<div className="who-we__inner">
				<div className="who-we__numbers">
					<div className="who-we__num">I</div>
					<div className="who-we__line"></div>
					<div className="who-we__num">II</div>
					<div className="who-we__line"></div>
					<div className="who-we__num">III</div>
				</div>

				<ul className="who-we__list">
					<li className="who-we__item">
						<div className="who-we__item-num">I</div>
						<p><span>Always in Plus</span> pioneers transformative solutions, infusing blockchain with
							artificial intelligence to revolutionize integration, optimize operations, and propel our
							clients to the forefront of digital innovation.
						</p>
					</li>
					<li className="who-we__item">
						<div className="who-we__item-num">II</div>
						<p><span>Always in Plus</span> prioritizes client profitability, ensuring seamless,
							continuous mining operations through cutting-edge technology, maximizing uptime and
							fostering
							sustained financial growth for our partners.
						</p>
					</li>
					<li className="who-we__item">
						<div className="who-we__item-num">III</div>
						<p><span>Always in Plus</span> innovates with 24/7 surveillance, utilizing sensors and
							cameras to ensure operational security while upholding stringent confidentiality standards,
							safeguarding client interests and investments.
						</p>
					</li>
				</ul>

			</div>

		</div>
	</section>

    </div>
  )
}

export default Timeline
