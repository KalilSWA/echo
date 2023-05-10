import "./App.css";
import { io, Socket } from "socket.io-client";
import { Impact } from "./factory/impactsGen";
import { Session } from "./factory/session";
import { useState } from "react";
function App(): any {
  const [impact, setImpact] = useState({
    Impacts: "",
    Zscore: "",
    ang_rotation: "",
  });

  // const apiToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImNsdWIiOiJzeXN0ZW10d29tbWEiLCJpYXQiOjE2ODIyNzg4MzYsImV4cCI6MTY4Mjg4MzYzNn0.5noKNdCrx6QbDKjQZH42DclVeLFrQeiFSuFO1s5Yyew";
  const output = {
    timestamp: Date.now(),
    ImpactID: "123123",
    SensorID: "23423423",
    data: {
      data: impact,
    },
  };
  //@ts-ignore
  const socket: Socket = io.connect(
    "http://localhost:6003"

    // , {
    //   namespaces: ["/"],
    //   headers: {
    //     auth: apiToken,
    //     "user-agent": "PROTECHT Receiver App",
    //   },
    // }
  );
  let impactInputs: string[] = Impact.inputs;
  let sessionInput: string[] = Session.sessionInputs;

  const [session, setSession] = useState({
    session_ID: "",
    Duration: "",
    Date_and_time: "",
    sport: "",
  });

  const SendImpact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(impact);
    socket.emit("data", output);
  };

  const handleImpactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImpact({ ...impact, [e.target.name]: e.target.value });
    console.log(impact);
  };

  const handleSessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSession({ ...session, [e.target.name]: e.target.value });
    console.log(session);
  };
  const SetSession = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(session);
  };
  return (
    <div className="App-header">
      <h1>Welcome to Echo</h1>

      <form onSubmit={SetSession}>
        {sessionInput.map((i) => {
          return (
            <div>
              <label>{i}</label>
              <br />
              <input
                type="number"
                placeholder={i}
                name={i}
                value={eval(`session.${i}`)}
                onChange={handleSessionChange}
              />
            </div>
          );
        })}
        <br />
        <button type="submit">CONNECT TO SESSION</button>
      </form>

      <br />
      <form onSubmit={SendImpact}>
        {impactInputs.map((i) => {
          return (
            <div>
              <label>{i}</label>
              <br />
              <input
                type="number"
                placeholder={i}
                name={i}
                value={eval(`session.${i}`)}
                onChange={handleImpactChange}
              />
            </div>
          );
        })}

        <br />

        <button type="submit">SEND IMPACT</button>
      </form>
    </div>
  );
}

export default App;
