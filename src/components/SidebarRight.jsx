

import TrendList from "./trends/TrendList";
import { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
import SkeletonLine from "./skeleton/SkeletonLine";

function SidebarRight() {
    const [trends, setTrends] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTrends = async () => {
        try {
            setIsLoading(true);
            const res = await axiosInstance.get("/trends");
            setTrends(res.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTrends();
    }, []);

    const handleRefresh = () => {
        setTrends([]);
        setError(null);
        fetchTrends();
    };

    return (
        <div className="sidebar-right">
            <div className="trends">
                <h1 className="default-title">Trends for you</h1>
                {isLoading ? (
                    <SkeletonLine />
                ) : error ? (
                    <div className="error-message">{error}</div>
                ) : (
                    <>
                        <TrendList trends={trends} />
                    </>
                )}
                <button onClick={handleRefresh} className="refresh-button">
                    Refresh
                </button>
            </div>
        </div>
    );
}

export default SidebarRight;

