import { Card, CardContent, Grid, Link } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import SubmitButton from "../components/SubmitButton";
import TextInput from "../components/TextInput";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required").min(8, "Must be at least 8 characters"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardContent raised style={{padding: "3rem", maxWidth: "275px"}} sx={{minWidth: 275}}>
          <h1>Sign Up</h1>
          <form
            onSubmit={formik.handleSubmit}
          >
            <TextInput
              type="text"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              err={formik.touched.name && formik.errors.name}
              helper={formik.errors.name}
            />
            <TextInput
              type="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              err={formik.touched.email && formik.errors.email}
              helper={formik.errors.email}
            />
            <TextInput
              type="password"
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
              helperText={formik.errors.password}
            />
            <TextInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              err={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              helper={formik.errors.confirmPassword}
            />
            <SubmitButton>Sign Up</SubmitButton>
          </form>
          <p>Already have an account? <Link href="/login">Log In</Link></p>
          
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SignUp;
