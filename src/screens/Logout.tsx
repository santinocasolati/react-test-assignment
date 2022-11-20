import { joinClassNames } from '../utils/joinClassNames';

function Logout(props: {data: {avatar: string, name:string}, userSet:any}) {
    const handleClick = () => {
        props.userSet(null);
    }

    return (
        <div className="white-box">
            <div className={joinClassNames(["logout", "white-box-container"])}>
                <div className="user-photo">
                    <img src={props.data.avatar} alt="User" />
                </div>

                <span className="primary-text">That's it, {props.data.name}!</span>

                <button type="button" onClick={handleClick}>
                    <div className="text">
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 1.5H12.5C12.7761 1.5 13 1.72386 13 2V4.25C13 4.66421 13.3358 5 13.75 5C14.1642 5 14.5 4.66421 14.5 4.25V2C14.5 0.895431 13.6046 0 12.5 0H2.5C1.39543 0 0.5 0.89543 0.5 2V16.7639C0.5 17.5215 0.928004 18.214 1.60557 18.5528L5.60557 20.5528C6.93538 21.2177 8.5 20.2507 8.5 18.7639V18H12.5C13.6046 18 14.5 17.1046 14.5 16V13.75C14.5 13.3358 14.1642 13 13.75 13C13.3358 13 13 13.3358 13 13.75V16C13 16.2761 12.7761 16.5 12.5 16.5H8.5V4.23607C8.5 3.47852 8.072 2.786 7.39443 2.44721L5.5 1.5ZM2 2.23607V16.7639C2 16.9533 2.107 17.1264 2.27639 17.2111L6.27639 19.2111C6.60884 19.3774 7 19.1356 7 18.7639V4.23607C7 4.04668 6.893 3.87355 6.72361 3.78885L2.72361 1.78885C2.39116 1.62263 2 1.86438 2 2.23607Z" fill="white" />
                            <path d="M16.5 9C16.5 8.80109 16.421 8.61032 16.2803 8.46967L14.2803 6.46967C13.9874 6.17678 13.5126 6.17678 13.2197 6.46967C12.9268 6.76256 12.9268 7.23744 13.2197 7.53033L13.9393 8.25H11.25C10.8358 8.25 10.5 8.58579 10.5 9C10.5 9.41421 10.8358 9.75 11.25 9.75H13.9393L13.2197 10.4697C12.9268 10.7626 12.9268 11.2374 13.2197 11.5303C13.5126 11.8232 13.9874 11.8232 14.2803 11.5303L16.2803 9.53033C16.2841 9.52656 16.2878 9.52275 16.2915 9.51891C16.4206 9.38418 16.5 9.20136 16.5 9Z" fill="white" />
                        </svg>

                        Logout
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Logout;