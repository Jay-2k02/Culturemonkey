import React, { useContext } from "react";
import "../styles/Userform.css"; // Include CSS for styling
import DataContext from "../context/DataContext";

const UserForm = ({ onSubmit }) => {
  // State to handle form data
  const { formData, setFormData, handleSubmit } = useContext(DataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <h2>Fill Your Profile Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Username *</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Location (City, Country)</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Website or Social Profile URL</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Bio / Short Description</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
