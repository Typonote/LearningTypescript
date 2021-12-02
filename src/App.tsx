import "./_App.scss";
import Member from "./Routes/Member";
import Dictionary from "./Routes/Dictionary";
import Map from "./Component/Common/Map";
import Location from "./Sample/Location";
import Analysis from "./Routes/Analysis";
import ProgressBar from "./Component/Common/ProgressBar/ProgressBar";

function App() {
  return (
    <div className="App__Container">
      <ProgressBar />
      {/* <Member /> */}
      <Dictionary />
      {/* <Map data={Location} /> */}
      {/* <Analysis /> */}
    </div>
  );
}

export default App;
