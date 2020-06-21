import React from 'react';

function Fetch_teacher_data(props)
{
    return(
    <div>
<table>
       <tr>
         <th>
           Teacher Name
         </th>
         <th>
           Course
         </th>
         <th>
           Subject
         </th>
       </tr>
       <tr>
           <td>{props.TName}</td>
           <td>{props.Course}</td>
           <td>{props.Subject}</td>
       </tr>
     </table>
    </div>
    );
}
export default Fetch_teacher_data;