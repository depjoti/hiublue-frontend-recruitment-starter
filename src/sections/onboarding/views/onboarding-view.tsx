'use client';

import { Theme } from '@mui/material/styles';
import { useState } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  Stack,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  Card,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function OnboardingView() {
  const [planType, setPlanType] = useState('Monthly');
  const [expiryDate, setExpiryDate] = useState<Date | null>(new Date('2023-05-03'));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Card
        sx={{
          p: 3,
          maxWidth: 720,
          boxShadow: (theme: Theme) => theme.customShadows.card,
          borderRadius: (theme: Theme) => `${theme.shape.borderRadius * 2}px`
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Create Offer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Send onboarding offer to new user
        </Typography>

        <Stack spacing={3}>
          {/* Plan Type */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>
              Plan Type
            </Typography>
            <RadioGroup 
              row 
              value={planType}
              onChange={(e) => setPlanType(e.target.value)}
            >
              <FormControlLabel 
                value="Pay As You Go" 
                control={<Radio />} 
                label="Pay As You Go"
              />
              <FormControlLabel 
                value="Monthly" 
                control={<Radio />} 
                label="Monthly"
              />
              <FormControlLabel 
                value="Yearly" 
                control={<Radio />} 
                label="Yearly"
              />
            </RadioGroup>
          </Box>

          {/* Additions */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 2 }}>
              Additions
            </Typography>
            <Stack direction="row" spacing={2}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Refundable"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="On demand"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Negotiable"
              />
            </Stack>
          </Box>

          {/* User */}
          <FormControl>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              User
            </Typography>
            <Select
              value="Jason Momoa"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'divider',
                },
                boxShadow: (theme: Theme) => theme.customShadows.dropdown,
                borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`
              }}
            >
              <MenuItem value="Jason Momoa">Jason Momoa</MenuItem>
            </Select>
          </FormControl>

          {/* Expired */}
          <FormControl>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Expired
            </Typography>
            <DatePicker 
              value={expiryDate}
              onChange={(newValue) => setExpiryDate(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  sx: {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'divider',
                    },
                  }
                }
              }}
            />
          </FormControl>

          {/* Price */}
          <FormControl>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Price
            </Typography>
            <TextField
              placeholder="Price"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`
              }}
            />
          </FormControl>

          {/* Submit Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button 
              variant="contained"
              sx={{ 
                bgcolor: 'grey.900',
                '&:hover': {
                  bgcolor: 'grey.800',
                },
                px: 3,
                boxShadow: (theme: Theme) => theme.customShadows.primary,
                borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`
              }}
            >
              Send Offer
            </Button>
          </Box>
        </Stack>
      </Card>
    </LocalizationProvider>
  );
}