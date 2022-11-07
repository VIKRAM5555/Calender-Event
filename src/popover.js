import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function BasicPopover({
  handleClicks,
  date,
  setDate,
  setInputData,
  Inputdata,
  setCentral,
  central,
  currentKey,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event);
  };
  React.useEffect(() => {
    handleClick(handleClicks[0]);
  }, [handleClicks[0]]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const eventHandlers = (e) => {
    const cpyDate = [...date];
    cpyDate[handleClicks[1]] = Inputdata;
    setDate(cpyDate);
    const centralCpy = { ...central };
    centralCpy[currentKey] = cpyDate;
    setCentral(centralCpy);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
      <Popover
        id={id}
        sx={{ margin: "2px" }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 1, fontSize: "12px" }}>NOTE PAD</Typography>
        <input
          type="text"
          maxlength="8"
          onChange={(e) => setInputData(e.target.value)}
        />
        <Button
          aria-describedby={id}
          variant="contained"
          onClick={eventHandlers}
          sx={{ margin: "5px" }}
        >
          SAVE
        </Button>
      </Popover>
    </div>
  );
}
