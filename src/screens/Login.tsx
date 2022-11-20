import { useForm } from 'react-hook-form';
import { useRef } from 'react';

import { login } from '../api/index.js';
import { loginTs } from '../api/indexTs';

import { joinClassNames } from '../utils/joinClassNames';

function Login(props: {userSet:any}) {
    const { register, handleSubmit } = useForm();
    const emailRef: {current:any} = useRef(null);
    const passwordRef: {current:any} = useRef(null);
    const btnRef: {current:any} = useRef(null);
    const formRef: {current:any} = useRef(null);

    const validateEmail = (email:string) => {
        let validated:boolean = false;

        if (email.indexOf("@") != -1) {
            if (email[email.indexOf("@") - 1] != undefined || email[email.indexOf("@") + 1] != undefined) {
                validated = true;
            }
        }

        if (validated == false) {
            emailRef.current.classList.add("error");
            emailRef.current.children[1].innerHTML = "Invalid email";
        } else {
            emailRef.current.classList.remove("error");
            emailRef.current.children[1].innerHTML = "";
        }

        return validated;
    }

    const validatePassword = (password:string) => {
        let validated:boolean = false;

        if (password.length != 0) {
            validated = true;
        }

        if (validated == false) {
            passwordRef.current.classList.add("error");
            passwordRef.current.children[1].innerHTML = "Invalid password";
        } else {
            passwordRef.current.classList.remove("error");
            passwordRef.current.children[1].innerHTML = "";
        }

        return validated;
    }

    const restartForm = () => {
        btnRef.current.classList.remove("pressed");
        formRef.current.classList.remove("validating");
    }

    const sendForm = async (data: {email: string, password:string}) => {
        // const result:object = await login(data);
        const result: {error: string, data: { avatar:string, name: string }} = await loginTs(data);
        
        if (result.error) {
            emailRef.current.classList.add("error");
            passwordRef.current.classList.add("error");
            emailRef.current.children[1].innerHTML = "Invalid credentials";
            restartForm();
        } else {
            props.userSet(result.data);
        }
    }

    const onSubmit = (data: {email: string, password:string}) => {
        const validations:boolean[] = [validateEmail(data.email), validatePassword(data.password)];

        formRef.current.classList.add("validating");

        if (validations[0] && validations[1]) {
            sendForm(data);
        } else {
            restartForm();
        }
    }

    const handleBtnClick = (e: any) => {
        e.target.classList.add("pressed");
    }

    return (
        <div className="white-box">
            <div className={joinClassNames(["login", "white-box-container"])}>
                <div className="login-form-text">
                    <span className="primary-text">Welcome, Stranger!</span>
                    <p className="secondary-text">Please log in to this form if you wish <br /> to pass the exam.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} id="login-form" ref={formRef}>
                    <div className="input-wrapper" ref={emailRef}><input type="text" placeholder="Email" {...register("email")} /> <span className="error-msg"></span></div>
                    <div className="input-wrapper" ref={passwordRef}><input type="password" placeholder="Password" {...register("password")} /> <span className="error-msg"></span></div>
                </form>

                <button type="submit" form="login-form" onClick={handleBtnClick} ref={btnRef}>
                    <div className="text">
                        Login

                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.2183 10.7775C6.92665 11.0577 6.92732 11.5114 7.2198 11.7908C7.51227 12.0703 7.98579 12.0696 8.27743 11.7894L13.7817 6.50597C14.0728 6.2263 14.0728 5.7737 13.7817 5.49403L8.27743 0.210595C7.98579 -0.0696357 7.51227 -0.0702799 7.2198 0.209157C6.92732 0.488594 6.92665 0.942296 7.2183 1.22253L11.4146 5.25H1C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75H11.4146L7.2183 10.7775Z" fill="white" />
                        </svg>
                    </div>

                    <div className="loader">
                        <img src="/i24-loader.svg" alt="Loading" />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Login;