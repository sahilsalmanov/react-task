import React from 'react'

function ListApp(props) {

  return ( <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td><button onClick={props.delete}>Delete</button></td>
              <td><button>Edit</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <button onClick={props.clear}>Clear All</button>
    </>
  );
}

export default ListApp