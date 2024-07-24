import React from 'react';

interface Notification {
  name: string;
  date: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  lastLogin: string;
  notifications: Notification[];
}

interface ProfileAdminProps {
  user: User;
}

const ProfileAdmin: React.FC<ProfileAdminProps> = ({ user }) => {
  return (
    <div className="profile-admin">
      <div className="user-identity">
        <h2>Identité de l'utilisateur</h2>
        <p>Nom: {user.lastName}</p>
        <p>Prénom: {user.firstName}</p>
        <p>Email: {user.email}</p>
        <p>Dernière connexion: {user.lastLogin}</p>
      </div>
      <div className="notifications">
        <h2>Notifications</h2>
        <table>
          <thead>
            <tr>
              <th>Nom de la notification</th>
              <th>Date de création</th>
            </tr>
          </thead>
          <tbody>
            {user.notifications.map((notif, index) => (
              <tr key={index}>
                <td>{notif.name}</td>
                <td>{notif.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileAdmin;
