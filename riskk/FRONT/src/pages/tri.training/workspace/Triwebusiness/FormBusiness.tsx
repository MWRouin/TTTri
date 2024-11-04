// FormBusiness.jsx

import React, { useState } from 'react';

// Define an interface for the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  location: string;
  companyName: string;
  companySize: string;
  numberOfLearners: string;
  jobTitle: string;
  responsibilityLevel: string;
}

const FormBusiness: React.FC = () => {
  // Initialize state with the defined interface
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    companyName: '',
    companySize: '',
    numberOfLearners: '',
    jobTitle: '',
    responsibilityLevel: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required.' });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        newErrors[key] = 'This field is required.';
      }
    });
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ flex: 1, paddingLeft: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="First Name"
              required
              style={{ width: '100%', padding: '10px', border: errors.firstName ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
            />
            {errors.firstName && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.firstName}</span>}
          </div>
          <div style={{ flex: 1 }}>
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Last Name"
              required
              style={{ width: '100%', padding: '10px', border: errors.lastName ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
            />
            {errors.lastName && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.lastName}</span>}
          </div>
        </div>

        <div>
          <label>Work Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Work Email"
            required
            style={{ width: '100%', padding: '10px', border: errors.email ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.email}</span>}
        </div>

        <div>
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Phone Number"
            required
            style={{ width: '100%', padding: '10px', border: errors.phoneNumber ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.phoneNumber && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.phoneNumber}</span>}
        </div>

        <div>
          <label>Location *</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            style={{ width: '100%', padding: '10px', border: errors.location ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          >
            <option value="">Select Location</option>
            <option value="Tunisia">Tunisia</option>
            <option value="France">France</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.location && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.location}</span>}
        </div>

        <div>
          <label>Company Name *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Company Name"
            required
            style={{ width: '100%', padding: '10px', border: errors.companyName ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.companyName && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.companyName}</span>}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label>Company Size *</label>
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              style={{ width: '100%', padding: '10px', border: errors.companySize ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
            >
              <option value="">Select...</option>
              <option value="subcontractor">I am a subcontractor / self-employed</option>
              <option value="1-99">1 to 99</option>
              <option value="100-199">100 to 199</option>
              <option value="200-999">200 to 999</option>
              <option value="1000+">More than 1000</option>
            </select>
            {errors.companySize && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.companySize}</span>}
          </div>
          <div style={{ flex: 1 }}>
            <label>Number of Learners *</label>
            <input
              type="text"
              name="numberOfLearners"
              value={formData.numberOfLearners}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Number of Learners"
              required
              style={{ width: '100%', padding: '10px', border: errors.numberOfLearners ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
            />
            {errors.numberOfLearners && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.numberOfLearners}</span>}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label>Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Job Title"
              required
              style={{ width: '100%', padding: '10px', border: errors.jobTitle ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
            />
            {errors.jobTitle && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.jobTitle}</span>}
          </div>
          <div style={{ flex: 1 }}>
            <label>Responsibility Level *</label>
            <select
              name="responsibilityLevel"
              value={formData.responsibilityLevel}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              style={{ width: '100%', padding: '10px', border: errors.responsibilityLevel ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
            >
              <option value="">Select...</option>
              <option value="manager">Manager</option>
              <option value="vice-president">Vice-president</option>
              <option value="director-senior">Director/Senior</option>
              <option value="individual-contributor">Individual contributor</option>
            </select>
            {errors.responsibilityLevel && <span style={{ color: 'red', fontSize: '0.9rem' }}>{errors.responsibilityLevel}</span>}
          </div>
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#c70000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormBusiness;
