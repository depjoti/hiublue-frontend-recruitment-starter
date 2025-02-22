// src/sections/dashboard/components/offer-list.tsx
import { useState } from 'react';
import { 
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Stack,
  Button,
  Tabs,
  Tab,
  InputAdornment,
  Pagination
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { MoreVert as MoreVertIcon, Edit as EditIcon, ChevronLeft, ChevronRight,Search as SearchIcon  } from '@mui/icons-material';

type StatusType = 'Accepted' | 'Rejected' | 'Pending';

interface OfferData {
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  type: string;
  status: StatusType;
}

export default function OfferList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterType, setFilterType] = useState('All');
  const [tabValue, setTabValue] = useState(0);

  const data: OfferData[] = [
    {
      name: 'Jayvon Simon',
      email: 'nannie.abernathy70@yahoo.com',
      phone: '365-374-4961',
      company: 'Lueilwitz and Sons',
      jobTitle: 'CEO',
      type: 'Monthly',
      status: 'Accepted'
    },
    // ... other data
  ];

  const getStatusChip = (status: StatusType) => {
    const styles = {
      Accepted: { color: '#229A16', bgcolor: '#E9FCD4' },
      Rejected: { color: '#B71D18', bgcolor: '#FFE7D9' },
      Pending: { color: '#B78103', bgcolor: '#FFF7CD' }
    };

    return (
      <Box
        sx={{
          px: 1,
          py: 0.5,
          borderRadius: 1,
          ...styles[status],
          display: 'inline-block',
          fontSize: '0.75rem',
          fontWeight: 700,
        }}
      >
        {status}
      </Box>
    );
  };

  return (
    <Card sx={{ 
        p: 2,
        boxShadow: (theme: Theme) => theme.customShadows.card,
        borderRadius: (theme: Theme) => `${theme.shape.borderRadius * 2}px`
      }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Offer List</Typography>

      <Stack spacing={2}>
       
{/* Tabs */}
<Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={tabValue} 
          onChange={(_, newValue) => setTabValue(newValue)}
          TabIndicatorProps={{
            sx: {
              height: 2,
              bgcolor: 'primary.main'
            }
          }}
          sx={{
            '& .MuiTab-root': {
              minWidth: 'auto',
              minHeight: 'auto',
              padding: '8px 12px',
              mr: 3,
              textTransform: 'none',
              fontWeight: 'normal',
              color: 'text.secondary',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            },
          }}
        >
          <Tab 
            label="All" 
            disableRipple
          />
          <Tab 
            label="Accepted" 
            disableRipple
          />
        </Tabs>
      </Box>

      {/* Search and Filter */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          placeholder="Search..."
          fullWidth
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'text.disabled', fontSize: 20 }} />
              </InputAdornment>
            ),
          }}
          sx={{
            maxWidth: '500px',
            bgcolor: 'background.paper',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'divider',
              },
              '&:hover fieldset': {
                borderColor: 'divider',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
        
        <Select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          size="small"
          displayEmpty
          sx={{
            width: 200,
            bgcolor: 'background.paper',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'divider',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'divider',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'primary.main',
            },
          }}
        >
          <MenuItem value="All">
            <Typography variant="body2">All</Typography>
          </MenuItem>
          <MenuItem value="Monthly">
            <Typography variant="body2">Monthly</Typography>
          </MenuItem>
          <MenuItem value="Yearly">
            <Typography variant="body2">Yearly</Typography>
          </MenuItem>
        </Select>
      </Box>

        <TableContainer sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'text.secondary' }}>Name</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>Phone number</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>Company</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>Job Title</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>Type</TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.email} hover>
                  <TableCell>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {row.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {row.email}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.jobTitle}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{getStatusChip(row.status)}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton size="small">
                        <EditIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                      </IconButton>
                      <IconButton size="small">
                        <MoreVertIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

       {/* Pagination */}
       <Box
  sx={{
    py: 2,
    px: 3,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    bgcolor: 'background.paper',
    borderTop: '1px solid',
    borderColor: 'divider',
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <Typography variant="body2" color="text.secondary">
      Rows per page:
    </Typography>

    <Select
      value={rowsPerPage}
      size="small"
      sx={{
        height: 32,
        minWidth: 64,
        '& .MuiSelect-select': {
          py: 0.75,
          px: 1,
        }
      }}
    >
      <MenuItem value={5}>5</MenuItem>
    </Select>

    <Typography variant="body2" color="text.secondary">
      6-10 of 11
    </Typography>

    <Pagination 
      count={3}
      variant="soft"
      shape="rounded"
      size="small"
      showFirstButton={false}
      showLastButton={false}
      sx={{
        '& .MuiPaginationItem-root': {
          border: 'none',
          borderRadius: 1,
          margin: 0,
          minWidth: 32,
          height: 32,
        },
        '& .MuiPaginationItem-previousNext': {
          margin: '0 4px',
        }
      }}
    />
  </Box>
</Box>
      </Stack>
    </Card>
  );
}