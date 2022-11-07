import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Popover from "./popover";

export function MainPage() {
  const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const monthArr = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const [monthsStart, setMonthsStart] = useState("01-01-2022");
  var mon = monthArr[new Date(monthsStart).getMonth()];
  var year = new Date(monthsStart).getFullYear();

  const [monthsEnd, setMonthsEnd] = useState("31-12-2022");
  const [currentKey, setCurrentKey] = useState();
  const [central, setCentral] = useState({});

  const dateArr = new Array(
    new Date(year, new Date(monthsStart).getMonth() + 1, 0).getDate()
  ).fill(true);
  const [date, setDate] = useState([]);

  const [popoverEvent, setpopoverEvent] = useState([null, null]);
  const [Inputdata, setInputData] = useState(null);
  const handleBtnClk = (index, e) => {
    setpopoverEvent([e.currentTarget, index]);
  };
  useEffect(() => {
    setCurrentKey(`${mon}${year}`);
    central[currentKey] === undefined
      ? setDate(dateArr)
      : setDate(central[currentKey]);
  }, [monthsStart, currentKey]);
  // useEffect(() => {

  //   console.log(central);
  // }, [monthsStart]);
  return (
    <div className="mainArr">
      <Grid
        container
        className="dateArr"
        sx={{ minHeight: "10vh" }}
        spacing={2}
      >
        <Grid
          item
          xs={8}
          sx={{
            justifyContent: "space-around",
          }}
        >
          <label for="start">
            <h3 style={{ letterSpacing: "32px" }}>DATE </h3>
          </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            style={{ width: "20%", height: "40%" }}
            onChange={(e) => setMonthsStart(e.target.value)}
          />
        </Grid>

        <Grid item xs={4}>
          {" "}
          <div className="daysArr">
            <h2 style={{ letterSpacing: "10px" }}>{currentKey}</h2>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        className="dateArr"
        sx={{ minHeight: "10vh" }}
        spacing={2}
      >
        {weekArr.map((a) => (
          <Grid item xs={1.7}>
            <Button
              variant="outlined"
              className="button"
              sx={{
                backgroundColor: "white",
                fontWeight: "large",
                color: "black",
                width: "100%",
              }}
            >
              <h4> {a}</h4>
            </Button>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        className="dateArr"
        sx={{ minHeight: "60vh" }}
        spacing={2}
      >
        {date.map((a, i) => (
          <Grid item xs={1.7}>
            {a === true ? (
              <Button
                onClick={(e) => handleBtnClk(i, e)}
                variant="outlined"
                className="button"
                sx={{
                  backgroundColor: "white",
                  width: "100%",
                  height: "100%",
                }}
              >
                <h2> {i + 1}</h2>
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                sx={{
                  backgroundColor: "green",
                  width: "100%",
                  height: "100%",
                }}
              >
                <h2>{a}</h2>
              </Button>
            )}
          </Grid>
        ))}{" "}
      </Grid>

      <Popover
        currentKey={currentKey}
        central={central}
        setCentral={setCentral}
        handleClicks={popoverEvent}
        setDate={setDate}
        date={date}
        setInputData={setInputData}
        Inputdata={Inputdata}
      />
    </div>
  );
}
