import { useParams, Link } from "react-router-dom";

export default function WelcomeComponent() {
    const {username} = useParams();
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>Click <Link to="/todos">here</Link> to manage your todos.</div>
        </div>
    )
}
