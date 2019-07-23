import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../axiosAuth';

const SignupForm = () => {
    return (
        <Form>
            <Field type="username" name="username" placeholder="username" />
            <Field type="password" name="password" placeholder="password" />
            {/* <Field type="password" name="cpassword" placeholder="confirm password" /> */}
            <button type="submit">Submit</button>
        </Form>
    );
};

export default withFormik({
    mapPropsToValues(username, password, cpassword) {
        return {
            username: username || "",
            password: password || "",
            cpassword: cpassword || "",
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().min(6).required(),
        password: Yup.string().min(6).required()
    }),
    handleSubmit(values, formikBag) {
        // password !== cpassword && return "passwords must match";
        axiosWithAuth()
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                formikBag.props.history.push('/data')
            })
            .catch(err => {
                console.log(err)
            })

    }
})(SignupForm);
