import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { FormStyles, FormField, FieldGroup } from "../../ContentForms";

// const sgMail = require("@sendgrid/mail");

const ContactForm = () => {
  const sendEmail = vals => {
    console.log(vals);
    //TODO: Switch to MailGun
    emailjs
      .send(
        "gmail",
        "ays_portfolio_contact",
        vals,
        "user_8WpRLz9hq2WNWuftAgtAr"
      )
      .then(
        response => {
          console.log("SUCCESS!", response.status, response.text);
        },
        err => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <>
      <FormStyles />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required")
        })}
        onSubmit={vals => sendEmail(vals)}
      >
        <Form>
          <FieldGroup columns="2">
            <FormField
              fieldMainType="input"
              name="firstName"
              type="text"
              label="First Name"
              required
            />
            <FormField
              fieldMainType="input"
              name="lastName"
              type="text"
              label="Last Name"
              required
            />
          </FieldGroup>

          <FieldGroup columns="2">
            <FormField
              fieldMainType="input"
              name="email"
              type="text"
              label="Email"
              required
            />
            <FormField
              fieldMainType="input"
              name="phone"
              type="text"
              label="Phone"
            />
          </FieldGroup>

          <FormField
            fieldMainType="textarea"
            name="message"
            type="textarea"
            label="Message"
            required
          />

          <button type="submit" value="Send">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
