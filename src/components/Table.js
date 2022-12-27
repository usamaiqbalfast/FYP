import React from 'react'

export default function Table() {
  return (
      <div>
          <table class="table" align-right>
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Status</th>
      <th scope="col">Comments</th>
      <th scope="col">Resubmit</th>
      <th scope="col">Rate Reviewer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">tell me some name of a book</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
