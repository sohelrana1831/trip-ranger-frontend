import React from "react";
import { useAuth } from "../../components/Context/AuthContext";
import Sidebar from "../../components/Dashboard/Sidebar";

const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <div className="container ">
      <div className="flex">
        <Sidebar />

        <main className="bg-gray-100 w-full mb-16">
          <header className="px-8 py-8">
            <h1>Welcome, {currentUser?.displayName || currentUser?.email}</h1>
          </header>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
