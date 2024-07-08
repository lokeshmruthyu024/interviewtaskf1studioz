import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ActiveCart from './ActiveCart';
import ArchiveCart from './ArchiveCart';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '1100px', height: 'auto', top: '20px', boxShadow: '1px 1px 1px 1px grey' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ fontFamily: 'sans-serif', textTransform: 'capitalize', fontSize: '20px', fontWeight: 'bold' }} label="Active Carts" {...a11yProps(0)} />
          <Tab style={{ fontFamily: 'sans-serif', textTransform: 'capitalize', fontSize: '20px', fontWeight: 'bold' }} label="Archived Carts" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <div>
        <CustomTabPanel value={value} index={0}>
          <ActiveCart />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ArchiveCart />
        </CustomTabPanel>
      </div>
    </Box>
  );
}
