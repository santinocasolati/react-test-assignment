import { joinClassNames } from '../utils/joinClassNames';

import LoginForm from '../components/LoginForm.js';

function Login(props: {userSet:any}) {

    return (
        <div className="white-box">
            <div className={joinClassNames(["login", "white-box-container"])}>
                <div className="login-form-text">
                    <span className="primary-text">Welcome, Stranger!</span>
                    <p className="secondary-text">Please log in to this form if you wish <br /> to pass the exam.</p>
                </div>

                <LoginForm userSet={props.userSet} />
            </div>
        </div>
    );
}

export default Login;