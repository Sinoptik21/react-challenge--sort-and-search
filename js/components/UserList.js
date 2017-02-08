import React from 'react';
import UserData from './UserData';
// Необходимо импортировать и написанный нами ранее компонент UserData

export default ({ data, update }) => {
  // Если данных нет, то отобразим параграф
  if (!data) { return (<p>Загрузка...</p>); }

  const users = data.map((user, index) => {
    return (<UserData user={user} index={index} update={update} />);
  });

  return (
    <table className="user-list table table-striped">
      <thead>
        <tr>
          <th>Изображение</th>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        {users}
      </tbody>
    </table>
  );
};
