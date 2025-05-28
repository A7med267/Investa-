import { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Avatar,
  Box,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  width: '100%',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius * 2,
}));

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Nada Nashat',
    email: 'nada@example.com',
    image: 'https://i.postimg.cc/XqbYd0D6/nadanashat.jpg',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle profile update logic here
    console.log('Profile updated:', profileData);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setIsEditingPassword(false);
    // Handle password change logic here
    console.log('Password changed');
  };

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      // Update image preview (e.g., set state or update profileData.image)
      setProfileData(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  }
};


  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#001F3F', fontWeight: 600 }}>
        Profile
      </Typography>

      {/* Profile Information Section */}
      <StyledPaper>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ color: '#001F3F', fontWeight: 600 }}>
            Profile Information
          </Typography>
          {!isEditing ? (
            <Button
              startIcon={<EditIcon />}
              onClick={() => setIsEditing(true)}
              sx={{ color: '#001F3F' }}
            >
              Edit Profile
            </Button>
          ) : (
            <Box>
              <Button
                startIcon={<SaveIcon />}
                onClick={handleProfileSubmit}
                sx={{ mr: 2, color: '#001F3F' }}
              >
                Save
              </Button>
              <Button
                startIcon={<CancelIcon />}
                onClick={() => setIsEditing(false)}
                sx={{ color: 'error.main' }}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Box sx={{ position: 'relative' }}>
                <Avatar
                    sx={{ 
                    width: 150, 
                    height: 150,
                    border: '4px solid #001F3F',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                    src={profileData.image}
                />
                {isEditing && (
                    <label
                    htmlFor="avatar-upload"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        backgroundColor: '#001F3F',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        padding: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    >
                    <EditIcon sx={{ color: 'white' }} />
                    <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    </label>
                )}
                </Box>

          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={profileData.name}
              onChange={handleProfileChange}
              disabled={!isEditing}
              InputProps={{
                sx: { fontSize: '1.1rem' }
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={profileData.email}
              onChange={handleProfileChange}
              disabled={!isEditing}
              InputProps={{
                sx: { fontSize: '1.1rem' }
              }}
            />
          </Grid>
        </Grid>
      </StyledPaper>

      {/* Change Password Section */}
      <StyledPaper>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ color: '#001F3F', fontWeight: 600 }}>
            Change Password
          </Typography>
          {!isEditingPassword ? (
            <Button
              startIcon={<EditIcon />}
              onClick={() => setIsEditingPassword(true)}
              sx={{ color: '#001F3F' }}
            >
              Change Password
            </Button>
          ) : (
            <Box>
              <Button
                startIcon={<SaveIcon />}
                onClick={handlePasswordSubmit}
                sx={{ mr: 2, color: '#001F3F' }}
              >
                Save
              </Button>
              <Button
                startIcon={<CancelIcon />}
                onClick={() => setIsEditingPassword(false)}
                sx={{ color: 'error.main' }}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Current Password"
              name="currentPassword"
              type="password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              disabled={!isEditingPassword}
              InputProps={{
                sx: { fontSize: '1.1rem' }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="New Password"
              name="newPassword"
              type="password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              disabled={!isEditingPassword}
              InputProps={{
                sx: { fontSize: '1.1rem' }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              disabled={!isEditingPassword}
              InputProps={{
                sx: { fontSize: '1.1rem' }
              }}
            />
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default Profile; 