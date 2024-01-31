import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Grid, Avatar, Typography, TextField, Button } from '@mui/material';
import Loading from '../Loader/Loader';

const Profile = () => {
  const { user, isAuthenticated,isLoading } = useAuth0();
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
if(isLoading){
  return <Loading />
}
  return (
    <Container sx={{ marginLeft:'-100px',marginTop: '10%', boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)' ,marginBottom: '10%', border: '2px solid #FDA5A4', paddingBottom: '50px' }}>
      {isAuthenticated && (
        <Grid container spacing={3} sx={{ boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', textAlign: 'center', marginTop: '50px', paddingTop: '20px', marginLeft: '0.25%', marginRight: '8%', marginBottom: '2%', borderRadius: '20px', backgroundColor: '#F5F0F0', maxWidth: '100%' }}>
          {isSmallScreen ? (
            <Grid item xs={12} md={4}>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Avatar src={selectedImage || user.picture} alt={user.name} style={{ width: '65%', height: 'auto', borderRadius: '50%', margin: 'auto' }} />
                <TextField type="file" accept="image/*" variant="outlined" sx={{ marginTop: 3 }} onChange={handleImageChange} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">{user.nickname}</Typography>
                <Typography>{user.email}</Typography>
              </Grid>
            </Grid>
          ) : (
            <>
              <Grid item md={4} textAlign="center">
                <Avatar src={selectedImage || user.picture} alt={user.name} sx={{ width: 200, height: 200, margin: 'auto', borderRadius: '50%' }} />
                <TextField 
                type="file" 
                accept="image/*" 
                variant="outlined" 
                sx={{ marginTop: 3}} onChange={handleImageChange} /> 
                <Button variant="contained" sx={{ fontSize:10, marginTop:1, backgroundColor:'#72bcd4' }}>Update Avatar</Button>

              </Grid>
              <Grid item md={8}>
                <Typography sx={{marginTop:'20%'}} variant="h4">{user.name}</Typography>
                <Typography>{user.email}</Typography>
              </Grid>
            </>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default Profile;