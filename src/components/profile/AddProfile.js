import React, { useState } from "react";
import "./AddProfile.css";

function AddProfile() {
  let [username, setUsername] = useState("");
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [filename, setFilename] = useState("");
  let [profilePicture, setProfilePicture] = useState("");
  let [bio, setBio] = useState("");

  const showFormFields = () => {
    console.log(username, firstname, lastname, email, filename, bio);
  };

  return (
    <div className="add-profile-container">
      <h2>Add Profile</h2>
      <form className="add-profile__form" onSubmit={(e) => e.preventDefault()}>
        <div className="add-profile__form__input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue=""
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="add-profile__form__input">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            defaultValue=""
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="add-profile__form__input">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            defaultValue=""
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="add-profile__form__input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="add-profile__form__input">
          <label htmlFor="profile">Profile Picture</label>
          <input
            type="file"
            id="profile"
            name="profile"
            defaultValue=""
            onChange={(e) => {
              if (e.target.files[0]) {
                setFilename(e.target.files[0].name);
                let reader = new FileReader();

                reader.onloadend = () => {
                  setProfilePicture(reader.result);
                };

                reader.readAsDataURL(e.target.files[0]);
              } else {
                setProfilePicture(null);
              }
            }}
          />
        </div>
        <div className="add-profile__form__input">
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            name="bio"
            defaultValue=""
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="add-profile__form__button">
          <button type="submit" onClick={() => showFormFields()}>
            Submit
          </button>
        </div>
      </form>
      <div className="add-profile__form-fields">
        <h3>Preview</h3>
        Username: {username}
        <br />
        Firstname: {firstname}
        <br />
        Lastname: {lastname}
        <br />
        Email: {email}
        <br />
        Profile Picture:{" "}
        {profilePicture && (
          <img
            className="profile-picture"
            src={profilePicture}
            alt="profile"
            width="50"
            height="50"
          />
        )}
        <br />
        Bio: {bio}
      </div>
    </div>
  );
}

export default AddProfile;
