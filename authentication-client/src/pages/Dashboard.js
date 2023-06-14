import { usePageContext } from "../PageContext";

const Dashboard = ({ data, isLoading }) => {
    if (isLoading) {
        return;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Welocme: {data.name}</h3>
        </div>
    );
}

export default Dashboard;