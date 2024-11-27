import api from '../api/posts';
import SHA256 from 'crypto-js/sha256'; // Import crypto-js for SHA256 hashing

const checkGravatarExists = async (email, apikey, setGravatarExists, setGravatarData) => {
  // Hash the email using SHA256
  const emailHash = SHA256(email.trim().toLowerCase()).toString();
  const gravatarUrl = `/profiles/${emailHash}`;

  try {
    // Make a GET request to the Gravatar API with the Bearer token for authentication
    const response = await api.get(gravatarUrl, {
      headers: {
        'Authorization': `Bearer ${apikey}`,
      }
    });

    // If status is 200, Gravatar profile exists
    if (response.status === 200) {
      console.log('Gravatar exists:', response.data);
      setGravatarData({
        avatar_url: response.data.avatar_url,
        display_name: response.data.display_name,
        job_title: response.data.job_title,
        company: response.data.company,
        location: response.data.location,
        description: response.data.description,
        profile_url: response.data.profile_url,
      });
      setGravatarExists(true);
      return(response.data);
    } else {
      console.log('Gravatar not found');
      setGravatarExists(false);
      return null;
    }
  } catch (error) {
    // If an error occurs, log the error and return false
    console.error('Error checking Gravatar:', error);
    return null;
  }
};

export default checkGravatarExists;
