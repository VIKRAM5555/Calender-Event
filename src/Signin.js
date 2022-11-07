import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Alert from "@mui/material/Alert";
import * as yup from "yup";

export function Signin() {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  let validationSchema = yup.object().shape({
    UserName: yup.string().required(),
    Password: yup.number().required(),
  });

  const { handleSubmit, handleChange, errors, handleBlur, touched } = useFormik(
    {
      initialValues: {
        UserName: "",
        Password: "",
      },
      validationSchema,
      onSubmit: (value) => {
        console.log(value);
      },
    }
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="input-with-icon-textfield"
          label="USERNAME"
          name="UserName"
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
          id="input-with-icon-textfield"
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

        <Button
          type="submit"
          variant="contained"
          onClick={() => navigate("/mainpage")}
        >
          <div>Signin</div>
        </Button>
      </form>
    </div>
  );
}
