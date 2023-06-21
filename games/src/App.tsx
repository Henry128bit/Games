import { BsFillCalendarFill } from 'react-icons/bs';
import Like from './components/Like/Like';

function App() {
  return (
    <div>
      <BsFillCalendarFill color="blue" size="100"/>
      <Like onClick={() => console.log('like!')}/>
    </div>
  );
}

export default App;