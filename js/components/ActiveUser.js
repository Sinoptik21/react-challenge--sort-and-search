import React from 'react';

export default ({ data, active }) => {
  if (!data || !data[active]) { return <h3>Ничего не найдено :(</h3>; }

  const user = data[active];

  return (
    <div className="thumbnail">
      <img src={`images/${user.image}.svg`} />

      <div className="thumbnail-caption">
        <h3>{user.name}</h3>
        <table className="user-info table table-responsive">
          <tbody>
            <tr>
              <td>Возраст:</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td>Любимое животное:</td>
              <td>{user.image}</td>
            </tr>
            <tr>
              <td>Телефон:</td>
              <td>+7 {user.phone}</td>
            </tr>
          </tbody>
        </table>

        <p><b>Любимая фраза:</b> {user.phrase}</p>
      </div>
    </div>
  );
};
