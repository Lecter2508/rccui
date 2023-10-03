import { useState } from "react";
import { ChoiceListbox } from "./Component/ListBox";
import { Card } from "./Component/Card";

const AIRCRAFTTYPES = ["DHC-8", "HS748"];
const RUNWAYTYPE = ["Asphalt", "Gravel"];
const CONTAMINENT1 = ["Select...", ...Array.from({ length: 11 }, (_, index) => `Choice ${index}`)];
const CONTAMINENT2 = ["Select...", ...Array.from({ length: 11 }, (_, index) => `Choice ${index}`)];
const PERCENTAGE = Array.from({ length: 11 }, (_, index) => `${index * 10} %`);

function App() {
  const [showAlert] = useState(false); //TODO set to false by default
  //TODO Set all the callbacks from ChoiceListBox components and state to update the interface
  const [showContaminent2, setShowContaminent2] = useState(false);

  const contaniment1Handler = (v) => {
    console.log(v);
    if (v === "Select...") {
      setShowContaminent2(false);
    } else {
      setShowContaminent2(true);
    }
    //TODO insert rest of the logic
  };

  return (
    <div className="grid h-screen md:place-items-center bg-gray-100 justify-center">
      <div className="container mx-auto pt-10 md:pt-0 bg-gray-100">
        <Card cardTitle={"Calculator"} status={null}>
          <div>
            <div className="flex flex-row justify-between items-center p-2">
              <div>Aircraft type: </div>
              <ChoiceListbox choices={AIRCRAFTTYPES} />
            </div>

            <div className="flex flex-row justify-between items-center p-2">
              <div>Runway type: </div>
              <ChoiceListbox choices={RUNWAYTYPE} />
            </div>

            <div className="flex flex-row justify-between items-center p-2">
              <div>Contaminent 1: </div>
              <div className="flex flex-row gap-4">
                <ChoiceListbox choices={CONTAMINENT1} callback={contaniment1Handler} width={"w-40"} />
                <ChoiceListbox choices={PERCENTAGE} width={"w-28"} />
              </div>
            </div>

            {showContaminent2 && (
              <div className="flex flex-row justify-between items-center p-2 mb-2">
                <div>Contaminent 2: </div>
                <div className="flex flex-row gap-4">
                  <ChoiceListbox choices={CONTAMINENT2} width={"w-40"} />
                  <ChoiceListbox choices={PERCENTAGE} width={"w-28"} />
                </div>
              </div>
            )}
          </div>
        </Card>

        <Card cardTitle={"Results"}>
          <div>
            <div className="flex flex-row justify-between p-2">
              <div>RCC code:</div>
              <div>0</div>
            </div>
            <div className="flex flex-row justify-between p-2">
              <div>Max crosswind:</div>
              <div>0 kts</div>
            </div>
            {showAlert && <div className="flex flex-row bg-red-500 rounded-md p-2 text-white">Please contact dispatch</div>}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
