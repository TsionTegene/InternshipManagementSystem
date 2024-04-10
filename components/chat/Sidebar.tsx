import React from 'react';
import Image from 'next/image';
interface User {
  id: string;
  username: string;
  image: string;
}

interface SidebarProps {
  users: User[];
}

const Sidebar: React.FC<SidebarProps> = () => {
  // Use fake users if users prop is not provided
  const userList =  [
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

  return (
    <div className="sidebar bg-gray-200 dark:bg-slate-600 p-4 flex flex-col h-full">
        <div className={`ml-3 py-4`}>
                                <Image
                                    src={"/images/logo.png"}
                                    width={150}
                                    height={150}
                                    className="size-13" alt={""} />
      </div>
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <ul className="flex-1 space-y-4 overflow-y-auto">
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
