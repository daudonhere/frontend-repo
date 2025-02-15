'use client';

import { Button } from '@mui/material';
import { fetchUserData } from '@/api/userApi';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/actions';

export default function UpdateButton() {
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    try {
      const userData = await fetchUserData();
      dispatch(setUser(userData));
    } catch (error) {
      console.error('Failed to update user data', error);
    }
  };

  return (
    <Button variant="contained" onClick={handleUpdate}>
      Update Data
    </Button>
  );
}
