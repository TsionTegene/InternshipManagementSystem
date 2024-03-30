import React from 'react';

interface User {
  id: string;
  username: string;
  image: string;
}

interface SidebarProps {
  users: User[];
}

const Sidebar: React.FC = () => {
  // Fake data for testing
  const fakeUsers: User[] = [
    {
      id: '1',
      username: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '2',
      username: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: '3',
      username: 'Alice Johnson',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
  ];

  // Use fake users if users prop is not provided
  const userList = fakeUsers;

  return (
    <div className="sidebar bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <ul className="space-y-4">
        {userList.map(user => (
          <li key={user.id} className="flex items-center p-2 rounded-lg bg-white shadow-md">
            <img src={user.image} alt={user.username} className="w-10 h-10 rounded-full mr-3" />
            <span className="text-gray-800">{user.username}</span>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default Sidebar;
