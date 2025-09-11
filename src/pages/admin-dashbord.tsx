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
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translations/translations";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  registeredAt?: string;
  lastLoginAt?: string;
  lastLogoutAt?: string;
};

type Language = keyof typeof translations;

const AdminDashboard = () => {
  const { language } = useLanguage();
  const t = translations[language as Language].adminDashboard;

  const [users, setUsers] = React.useState<User[]>([]);
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const usersData = localStorage.getItem("users");
    const currentUserData = localStorage.getItem("currentUser");
    setUsers(usersData ? JSON.parse(usersData) : []);
    setCurrentUser(currentUserData ? JSON.parse(currentUserData) : null);
  }, []);

  const totalUsers = users.length;
  const loggedInUserCount = currentUser ? 1 : 0;
  const loggedOutUsers = totalUsers - loggedInUserCount;

  const pieData = [
    { name: t.loggedInUser, value: loggedInUserCount },
    { name: t.allUsers, value: loggedOutUsers },
  ];
  const COLORS = ["#7c3aed", "#ddd"];

  return (
    <>
      <Head>
        <title>{t.title} - MyShop</title>
        <meta name="description" content={t.metaDescription} />
      </Head>
      <Headder />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 transition-colors duration-500">
        <h1 className="text-4xl font-bold mb-10 text-center text-blue-800 dark:text-yellow-300">
          {t.header}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1: Total Users */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-extrabold text-blue-600 dark:text-pink-400">
              {totalUsers}
            </div>
            <div className="text-xl font-semibold mt-2 text-gray-700 dark:text-gray-200">
              {t.allUsers}
            </div>
          </div>

          {/* Card 2: Logged In Users */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-extrabold text-green-600 dark:text-green-400">
              {loggedInUserCount}
            </div>
            <div className="text-xl font-semibold mt-2 text-gray-700 dark:text-gray-200">
              {t.loggedInUser}
            </div>
          </div>

          {/* Card 3: User Pie Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-blue-700 dark:text-pink-200">
              {t.userPieChart}
            </h2>
            <div className="w-full h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                 <Pie
  data={pieData}
  cx="50%"
  cy="50%"
  labelLine={false}
  label={({ name, percent }: { name?: string; percent?: number }) =>
    `${name}: ${percent !== undefined ? (percent * 100).toFixed(0) : "0"}%`
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
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
              {t.pieChartDescription}
            </p>
          </div>
        </div>

        {/* Current User Info Section (if logged in) */}
        {currentUser && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-pink-200">
              {t.loggedInUser}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="font-bold text-gray-800 dark:text-gray-100">
                  {t.tableHeaders.name}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {currentUser.firstName} {currentUser.lastName}
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="font-bold text-gray-800 dark:text-gray-100">
                  {t.tableHeaders.email}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {currentUser.email}
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="font-bold text-gray-800 dark:text-gray-100">
                  {t.tableHeaders.lastLogin}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {currentUser.lastLoginAt
                    ? new Date(currentUser.lastLoginAt).toLocaleString()
                    : "-"}
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="font-bold text-gray-800 dark:text-gray-100">
                  {t.tableHeaders.lastLogout}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {currentUser.lastLogoutAt
                    ? new Date(currentUser.lastLogoutAt).toLocaleString()
                    : "-"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Users Table Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mt-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-pink-200">
            {t.allUsers}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                  <th className="px-4 py-3 font-medium rounded-tl-lg">
                    {t.tableHeaders.name}
                  </th>
                  <th className="px-4 py-3 font-medium">
                    {t.tableHeaders.email}
                  </th>
                  <th className="px-4 py-3 font-medium">
                    {t.tableHeaders.registered}
                  </th>
                  <th className="px-4 py-3 font-medium">
                    {t.tableHeaders.lastLogin}
                  </th>
                  <th className="px-4 py-3 font-medium rounded-tr-lg">
                    {t.tableHeaders.lastLogout}
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, i) => (
                  <tr
                    key={u.email}
                    className={`border-b dark:border-gray-700 ${
                      currentUser && u.email === currentUser.email
                        ? "bg-blue-50 dark:bg-gray-700 font-semibold"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-100">
                      {u.firstName} {u.lastName}
                    </td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-100">
                      {u.email}
                    </td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-100">
                      {u.registeredAt
                        ? new Date(u.registeredAt).toLocaleString()
                        : "-"}
                    </td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-100">
                      {u.lastLoginAt
                        ? new Date(u.lastLoginAt).toLocaleString()
                        : "-"}
                    </td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-100">
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
      </div>
    </>
  );
};

export default AdminDashboard;