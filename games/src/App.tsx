import { BsFillCalendarFill } from 'react-icons/bs';
import Button from './components/Button/button';
import Like from './components/Like/Like';

function App() {
  return (
    <div>
      <BsFillCalendarFill color="blue" size="100"/>
      <Button />
      <Like onClick={() => console.log('like!')}/>
    </div>
  );
}

export default App;