import "./_App.scss";
import Member from "./Routes/Member";
import Dictionary from "./Routes/Dictionary";
import Map from "./Component/Common/Map";
import Dummy4 from "./Sample/Dummy4";

function App() {
  return (
    <div className="App__Container">
      {/* <Member /> */}
      {/* <Dictionary /> */}
      <Map data={Dummy4} />
    </div>
  );
}

export default App;
