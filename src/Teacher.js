import React from 'react';
function Fetch_teacher_data(props)
{
  return(
    <div>
      <h1>Teacher Name</h1>
      <h2>{props.TName}</h2>
      <h1>Course</h1>
      <h2>{props.Course}</h2>
      <h1>Subject</h1>
      <h2>{props.Subject}</h2>
    </div>
    );
}
export default Fetch_teacher_data;