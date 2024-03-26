import { useState } from 'react';
//@ts-expect-error
const Sidebar = ({ ChatMembers, onUserSelect }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  //@ts-expect-error

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    onUserSelect(user);
  };

  // Filter ChatMembers based on their roles
  //@ts-expect-error

  const studentUsers = ChatMembers.filter(user => user.role === 'student');
  const mentorUsers = ChatMembers.filter(user => user.role === 'Mentor');
  const headerUsers = ChatMembers.filter(user => user.role === 'Mentor');

  return (
    <div className="sidebar bg-gray-100 h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Chat App</h2>
      <div className="space-y-4">
        {/* Student Section */}
        {studentUsers.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Student</h3>
            {studentUsers.map((user) => (
              <div
                key={user.id}
                className={`p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300 ${
                  selectedUser === user ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleUserSelect(user)}
              >
                <p className="text-lg font-semibold">{user.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* Mentor Section */}
        {mentorUsers.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Mentor</h3>
            {mentorUsers.map((user) => (
              <div
                key={user.id}
                className={`p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300 ${
                  selectedUser === user ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleUserSelect(user)}
              >
                <p className="text-lg font-semibold">{user.name}</p>
              </div>
            ))}
          </div>
        )}

        {/* header Section */}
        {headerUsers.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Mentor</h3>
            {mentorUsers.map((user) => (
              <div
                key={user.id}
                className={`p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300 ${
                  selectedUser === user ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleUserSelect(user)}
              >
                <p className="text-lg font-semibold">{user.name}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Sidebar;
