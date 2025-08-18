import Headder from "@/components/Headder";
import Head from "next/head";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  registeredAt?: string;
  lastLoginAt?: string;
  lastLogoutAt?: string;
};

const AdminDashboard = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const usersData = localStorage.getItem("users");
    const currentUserData = localStorage.getItem("currentUser");
    setUsers(usersData ? JSON.parse(usersData) : []);
    setCurrentUser(currentUserData ? JSON.parse(currentUserData) : null);
  }, []);

  // For the graph: total users vs. currently logged-in user
  const totalUsers = users.length;
  const loggedInUserCount = currentUser ? 1 : 0;
  const loggedOutUsers = totalUsers - loggedInUserCount;

  // Pie chart data
  const pieData = [
    { name: "Logged In", value: loggedInUserCount },
    { name: "Logged Out", value: loggedOutUsers },
  ];
  const COLORS = ["#7c3aed", "#ddd"];

  return (
    <>
      <Head>
        <title>Admin Dashboard - MyShop</title>
        <meta
          name="description"
          content="Admin Dashboard for managing users and monitoring activity on MyShop."
        />
      </Head>
      <Headder />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-yellow-200 dark:via-pink-400 dark:to-pink-600 animate-gradient-x">
          Admin Dashboard
        </h1>
        <div className="mb-8 flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-pink-200">
              All Users
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2">Email</th>
                    <th className="px-3 py-2">Registered</th>
                    <th className="px-3 py-2">Last Login</th>
                    <th className="px-3 py-2">Last Logout</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr
                      key={u.email}
                      className={
                        currentUser && u.email === currentUser.email
                          ? "bg-blue-100 dark:bg-pink-900"
                          : ""
                      }
                    >
                      <td className="px-3 py-2">
                        {u.firstName} {u.lastName}
                      </td>
                      <td className="px-3 py-2">{u.email}</td>
                      <td className="px-3 py-2">
                        {u.registeredAt
                          ? new Date(u.registeredAt).toLocaleString()
                          : "-"}
                      </td>
                      <td className="px-3 py-2">
                        {u.lastLoginAt
                          ? new Date(u.lastLoginAt).toLocaleString()
                          : "-"}
                      </td>
                      <td className="px-3 py-2">
                        {u.lastLogoutAt
                          ? new Date(u.lastLogoutAt).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 w-full md:w-1/2 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-pink-200">
              Logged-in User
            </h2>
            {currentUser ? (
              <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow">
                <div className="font-bold text-lg">
                  {currentUser.firstName} {currentUser.lastName}
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-200">
                  {currentUser.email}
                </div>
                <div className="text-xs mt-2">
                  Last Login:{" "}
                  {currentUser.lastLoginAt
                    ? new Date(currentUser.lastLoginAt).toLocaleString()
                    : "-"}
                </div>
                <div className="text-xs">
                  Last Logout:{" "}
                  {currentUser.lastLogoutAt
                    ? new Date(currentUser.lastLogoutAt).toLocaleString()
                    : "-"}
                </div>
              </div>
            ) : (
              <div className="text-gray-500">No user currently logged in.</div>
            )}
            <h2 className="text-2xl font-semibold mb-4 mt-6 text-blue-700 dark:text-pink-200">
              User Pie Chart
            </h2>
            <div style={{ width: 260, height: 220 }} className="mb-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({
                      name,
                      percent,
                    }: {
                      name?: string;
                      percent?: number;
                    }) =>
                      `${name}: ${
                        percent !== undefined ? (percent * 100).toFixed(0) : "0"
                      }%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Pie chart: Logged-in user(s) vs. all users
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
