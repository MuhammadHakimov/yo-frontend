import React from "react";

function UserLogoDiv({user, class: className}) {
  return (
    <div className={className}>
      {user.name?.charAt(0).toUpperCase() || "U"}
    </div>
  );
}

export default UserLogoDiv;