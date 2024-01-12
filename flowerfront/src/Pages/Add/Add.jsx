import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';

const Add = () => {
async function addDataFormik(item) {
  fetch("http://localhost:3000/flower/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(item)
})
}

  return (
    <>
    <Helmet>
        <title>Add Page</title>
      </Helmet>
    <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(25, 'Must be 25 characters or less')
           .required('Required'),
           price: Yup.number()
           .required('Required'),
           img: Yup.string(),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          addDataFormik(values)
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <label htmlFor="img">Image link</label>
         <Field name="img" type="text" />
         <ErrorMessage name="img" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
     </>
  )
}

export default Add