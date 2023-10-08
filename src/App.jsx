import { useEffect, useState } from "react";
import { ChoiceListbox } from "./Component/ListBox";
import { Card } from "./Component/Card";
import { CustomButton } from "./Component/Button";
import { contaminentGravel, contaminentPaved } from "./utils/contaminent";
import { rccCalc } from "./utils/rccCalculator";

const AIRCRAFTTYPES = [{ description: "DHC-8" }, { description: "HS748" }];
const RUNWAYTYPE = [{ description: "Asphalt" }, { description: "Gravel" }];
const PERCENTAGE = [...Array.from({ length: 11 }, (_, index) => index * 10), ...[25, 75]]
  .sort((a, b) => a - b)
  .map((v) => {
    return { description: v + " %" };
  });

function App() {
  const [runwayType] = useState(RUNWAYTYPE[0]);
  const [contaminentList, setContaminentList] = useState(contaminentPaved);
  const [contaminent1, setContaminent1] = useState(undefined);
  const [contaminent2, setContaminent2] = useState(undefined);
  const [coverage1, setCoverage1] = useState(0);
  const [coverage2, setCoverage2] = useState(0);
  const [showContaminent2, setShowContaminent2] = useState(false);
  const [callDxp, setCallDxp] = useState(false);
  const [rccCode, setRccCode] = useState(6);
  const [maxCrosswind, setMaxCrosswind] = useState(36);
  const [resetListBox, setResetListBox] = useState(false);

  const aircraftTypeHandler = (v) => {
    console.log(v);
  };

  const runwayTypeHandler = (v) => {
    if (v.description === "Asphalt") {
      setContaminentList(contaminentPaved);
    } else {
      setContaminentList(contaminentGravel);
    }
    setResetListBox(true);
    setShowContaminent2(false);
  };

  const contaniment1Handler = (v) => {
    if (v === "Select...") {
      setShowContaminent2(false);
    } else {
      setShowContaminent2(true);
    }
    setContaminent1(v);
  };

  const coverage1Handler = (v) => {
    setCoverage1(Number(v.description.replace("%", "")));
  };

  const contaniment2Handler = (v) => {
    setContaminent2(v);
  };

  const coverage2Handler = (v) => {
    setCoverage2(Number(v.description.replace("%", "")));
  };

  const resetListbox1Handler = () => {
    setResetListBox(false);
  };

  const resetButtonHandler = () => {
    setContaminent1(undefined);
    setContaminent2(undefined);
    setCoverage1(0);
    setCoverage2(0);
    setResetListBox(true);
    setShowContaminent2(false);
    setRccCode(6);
    setMaxCrosswind(6);
    setCallDxp(false);
  };

  useEffect(() => {
    //Debug
    // console.log("Coverage 1: ", coverage1);
    // console.log("Coverage 2: ", coverage2);
    // console.log("Runway type: ", runwayType);
    // console.log("Contaminent 1: ", contaminent1);
    // console.log("Contaminent 2: ", contaminent2);
    let rcc = rccCalc(contaminent1, contaminent2, coverage1, coverage2);
    if (rcc === null) {
      setRccCode(6);
      setMaxCrosswind(36);
    } else {
      setRccCode(rcc.code);
      setMaxCrosswind(rcc.maxCrosswind);
      setCallDxp(rcc.callDxp);
    }
  }, [coverage1, coverage2, runwayType, contaminent1, contaminent2]);

  return (
    <div className="grid h-screen md:place-items-center bg-gray-100 justify-center">
      <div className="container mx-auto pt-10 md:pt-0 bg-gray-100">
        <Card cardTitle={"Calculator"} status={null}>
          <div>
            <div className="flex flex-row justify-between items-center p-2">
              <div>Aircraft type: </div>
              <ChoiceListbox choices={AIRCRAFTTYPES} callback={aircraftTypeHandler} />
            </div>

            <div className="flex flex-row justify-between items-center p-2">
              <div>Runway type: </div>
              <ChoiceListbox choices={RUNWAYTYPE} callback={runwayTypeHandler} />
            </div>

            <div className="flex flex-row justify-between items-center p-2">
              <div>Contaminent 1: </div>
              <div className="flex flex-row gap-4">
                <ChoiceListbox
                  choices={contaminentList}
                  callback={contaniment1Handler}
                  width={"w-40"}
                  dropdownWidth={"w-72"}
                  reset={resetListBox}
                  resetCallback={resetListbox1Handler}
                />
                <ChoiceListbox choices={PERCENTAGE} callback={coverage1Handler} width={"w-28"} reset={resetListBox} resetCallback={resetListbox1Handler} />
              </div>
            </div>

            {showContaminent2 && (
              <div className="flex flex-row justify-between items-center p-2 mb-2">
                <div>Contaminent 2: </div>
                <div className="flex flex-row gap-4">
                  <ChoiceListbox
                    choices={contaminentList}
                    callback={contaniment2Handler}
                    width={"w-40"}
                    dropdownWidth={"w-72"}
                    reset={resetListBox}
                    resetCallback={resetListbox1Handler}
                  />
                  <ChoiceListbox choices={PERCENTAGE} callback={coverage2Handler} width={"w-28"} reset={resetListBox} resetCallback={resetListbox1Handler} />
                </div>
              </div>
            )}

            <div className="p-2">
              <CustomButton title={showContaminent2 ? "Reset Contaminents" : "Reset Contaminent"} onClickCallback={resetButtonHandler} />
            </div>
          </div>
        </Card>

        <Card cardTitle={"Results"} status={null}>
          <div>
            <div className="flex flex-row justify-between p-2">
              <div>RCC code:</div>
              <div>{rccCode}</div>
            </div>
            <div className="flex flex-row justify-between p-2">
              <div>Max crosswind:</div>
              <div>
                {maxCrosswind} {typeof maxCrosswind === "string" ? "" : "kts"}
              </div>
            </div>
            {callDxp && (
              <div className="flex flex-row bg-red-500 rounded-md p-2 text-white justify-center">
                {" "}
                {/* //! Phone number is not set */}
                <a href="tel:+1234567890">Please contact dispatch!</a>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
