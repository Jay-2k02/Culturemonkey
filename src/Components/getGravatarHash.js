import md5 from 'md5';

const getGravatarHash = (email) => {
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    console.error('Invalid email format');
    return null;
  }

  // Hash the email using MD5
  const emailHash = md5(email.trim().toLowerCase());

  return emailHash;
};

export default getGravatarHash;
