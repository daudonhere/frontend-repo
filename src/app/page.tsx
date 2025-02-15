'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Box, Typography } from '@mui/material';

export default function HomePage() {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Welcome, {user?.email || 'Guest'}!</Typography>
    </Box>
  );
}