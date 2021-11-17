import "./_App.scss";
import Member from "./Routes/Member";
import Dictionary from "./Routes/Dictionary";
import Map from "./Component/Common/Map";
import Location from "./Sample/Location";

function App() {
  return (
    <div className="App__Container">
      {/* <Member /> */}
      <Dictionary />
      {/* <Map data={Location} /> */}
    </div>
  );
}

export default App;
