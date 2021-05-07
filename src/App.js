import Autocomplete from '../src/components/Autocomplete'
import './styles/global.css'
import styles from './App.module.css'
import Header from './components/Header'

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<main className={styles.main}>
				<Autocomplete />
			</main>
		</div>
	)
}

export default App
