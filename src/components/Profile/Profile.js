import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from '../Loader/Loader';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        // Store user data in Firebase
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {isAuthenticated && (
        <div className="mt-7 shadow-lg rounded-lg pb-5 mb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left p-4">
            <div className="md:col-span-1 text-center">
              <img
                src={user.picture}
                alt={user.name}
                className="rounded-full mx-auto"
              />
            </div>
            <div className="md:col-span-2">
              <h4 className="text-4xl mt-5">{user.name}</h4>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </>

  );
};

export default Profile;
