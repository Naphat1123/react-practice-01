import React from "react";

function MyProfile({ data }) {
  return (
    <div>
      <p>
        My name is {data.fName} {data.lName}
      </p>
    </div>
  );
}

export default MyProfile;
