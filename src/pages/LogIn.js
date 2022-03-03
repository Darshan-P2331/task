import { Card, CardContent, Grid, Link } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import SubmitButton from "../components/SubmitButton";
import TextInput from "../components/TextInput";


const LogIn = () => {
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
          password: Yup.string().required("Required").min(8, "Must be at least 8 characters"),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <Grid item xs={3}>
      <Card variant="outlined">
        <CardContent raised style={{padding: "3rem", maxWidth: "275px"}} sx={{minWidth: 275}}>
          <h1>Log In</h1>
          <form
            onSubmit={formik.handleSubmit}
          >
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
            <SubmitButton>Log In</SubmitButton>
          </form>
          <p>New user? <Link href="/">Sign Up</Link></p>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default LogIn