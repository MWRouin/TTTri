import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import tribusinessImage from '/assets/images/tribusiness.jpg'; 
import FormBusiness from './FormBusiness';

const Triwebusiness: React.FC = () => {
  const navigate = useNavigate();

  const handleClickcatalog = () => {
    navigate('/Catalogues');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img src={tribusinessImage} alt="Triwebusiness" style={{ width: '150px', height: 'auto', marginRight: '20px' }} />
          <h1 style={{ fontSize: '2.5rem', color: '#222', marginBottom: '0' }}>Get Your Demo</h1>
        </div>
        <div style={{ marginBottom: '50px' }}></div>
        <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
          Tell us your needs, and we will launch a personalized plan to generate results.
        </p>
        <h2 style={{ fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.6', marginTop: '0' }}>
          With TRI_TRAINING as your learning partner, you can:
        </h2>
        <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '15px' }}>✔ Train your entire workforce with over 27,000 courses in 16 languages.</li>
          <li style={{ marginBottom: '15px' }}>✔ Prepare employees for more than 200 industry-recognized certification exams.</li>
          <li style={{ marginBottom: '15px' }}>✔ Develop highly skilled technical teams using secure hands-on environments.</li>
          <li style={{ marginBottom: '15px' }}>✔ Identify emerging skills gaps.</li>
        </ul>

        <button
          type="submit"
          style={{ padding: '10px 20px', backgroundColor: '#c70000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          onClick={handleClickcatalog}
        >
          Show Catalogs
        </button>
      </div>

      <FormBusiness />
    </div>
  );
};

export default Triwebusiness;
