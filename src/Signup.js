import { useState } from "react";
import React from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useFormik } from "formik";
import * as yup from "yup";

var url = "https://spoti05.herokuapp.com/";
const ApiURL = `${url}user/signup`;

export function Signup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const navigate = useNavigate();

  let validationSchema = yup.object().shape({
    UserName: yup.string().required(),
    Password: yup.number().required(),
    ConfirmPassword: yup.number().required(),
  });

  const { handleChange, handleSubmit, errors, handleBlur, touched } = useFormik(
    {
      initialValues: {
        UserName: "",
        Password: "",
        ConfirmPassword: "",
      },
      validationSchema,
      onSubmit: (values) => {
        var data = { name: values.UserName, Password: values.Password };

        console.log(data);
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        };

        fetch(ApiURL, requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data))

          .catch((err) => console.log(err));
      },
    }
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="UserName"
          label="USERNAME"
          InputProps={{
            startAdornment: (
              <IconButton position="start">
                <AccountCircle />
              </IconButton>
            ),
          }}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.UserName && touched.UserName ? (
          <Alert severity="error">{errors.UserName}</Alert>
        ) : (
          ""
        )}

        <TextField
          name="Password"
          label="PASSWORD"
          InputProps={{
            endAdornment: (
              <IconButton
                color="primary"
                onClick={() => setIsVisible(!isVisible)}
                position="end"
              >
                {!isVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
          variant="outlined"
          type={isVisible ? "text" : "password"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Password && touched.Password ? (
          <Alert severity="error">{errors.Password}</Alert>
        ) : (
          ""
        )}

        <TextField
          name="ConfirmPassword"
          label="CONFIRM PASSWORD"
          InputProps={{
            endAdornment: (
              <IconButton
                color="primary"
                onClick={() => setIsVisible2(!isVisible2)}
                position="end"
              >
                {!isVisible2 ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
          variant="outlined"
          type={isVisible2 ? "text" : "password"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.ConfirmPassword && touched.ConfirmPassword ? (
          <Alert severity="error">{errors.ConfirmPassword}</Alert>
        ) : (
          ""
        )}

        <Button type="submit" variant="contained">
          <div>Signup</div>
        </Button>
      </form>
    </div>
  );
}
