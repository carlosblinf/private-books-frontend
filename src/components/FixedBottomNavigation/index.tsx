import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate } from 'react-router-dom';

const ruteMap = new Map();
ruteMap.set('/', '/');
ruteMap.set('/search', 'search');
ruteMap.set('/favorite', 'favorite');
ruteMap.set('/profile', 'profile');

export default function FixedBottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  function getRute(): string {
    const path: string = location.pathname;
    if (ruteMap.size && ruteMap.has(path)) return ruteMap.get(path);
    return '/';
  }
  const [value, setValue] = useState<string>(getRute());

  return (
    <Box sx={{ pb: 8, display: { sm: 'block', md: 'none' } }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, pb: 1, px: 2 }} elevation={3}>
        <BottomNavigation
          showLabels
          sx={{ p: 0 }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(newValue);
          }}
        >
          <BottomNavigationAction value="/" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction value="/search" label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction value="/favorite" label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction value="/profile" label="Profile" icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
