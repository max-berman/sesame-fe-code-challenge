import React from 'react'
import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<span>
					FE Code Challenge implementation for Sesame by{' '}
					<a
						href='https://www.linkedin.com/in/maxberman/'
						className={styles.link}
					>
						Max Berman
					</a>
				</span>
			</div>
		</header>
	)
}
