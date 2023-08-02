import { withProviders } from './providers';
import './styles/index.scss';
import { Routing } from '../pages/index';

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default withProviders(App);
