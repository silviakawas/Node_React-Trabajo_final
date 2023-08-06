import {BrowserRouter} from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Menu from './components/menu/Menu';
import Router from './router/Router';
import Footer from './components/footer/Footer';

const App = () => {

	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Menu/>
				<Router/>
				<Footer/>
			</BrowserRouter>
			
		</>
	);
};

export default App;
