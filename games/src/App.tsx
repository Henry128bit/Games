import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;