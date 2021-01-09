import { Form, Field } from 'react-final-form';
import styles from "./LoginForm.module.css";

export const LoginForm = (props) => (
    <Form
        onSubmit={(values) => props.logIn(values.Email,values.password,values.RememberMe)}
        initialValues={
            {
                Email: " " ,
                password: "",
                RememberMe : false
            }
        }
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className={styles.formContent}>
                <div className={styles.formItem}>
                    <label>Email</label>
                    <Field name="Email" component="input" type="email" placeholder="email" />
                </div>
                <div className={styles.formItem}>
                    <label>Password</label>
                    <Field name="password" component="input" type="password" placeholder="Password" />
                </div>
                <div className={styles.formCheckbox}>
                    <label> Remember me</label>
                        <Field
                            name="rememberMe"
                            component="input"
                            type="checkbox"
                            value="true"
                        />{" "}
                </div>
                <button type="submit" className={styles.loginBtn}>Login</button>
            </form>
        )}
    />
)
