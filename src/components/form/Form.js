import { useFormik } from "formik";
import * as Yup from "yup";

import "./form.sass"

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        errors: {},
        validationSchema: Yup.object({
            name: Yup.string()
                    .min(2, "Минимум 2 символа")
                    .required("Обязательное поле!"),
            email: Yup.string()
                    .email("Неправильный email адрес")
                    .required("Обязательное поле!")
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit} >
            <input
                id="name"
                name="name"
                type="text"
                placeholder="name"
                {...formik.getFieldProps("name")}
            />
            {formik.errors.name && formik.touched.name ? <div style={{color: "red"}} >{formik.errors.name}</div> : null}
            <input
                id="email"
                name="email"
                type="email"
                placeholder="e-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div style={{color: "red"}} >{formik.errors.email}</div> : null}
            <button className="btn" type="submit" onReset={formik.handleReset}>SKICKA</button>
        </form>
    )

}

export default Form;