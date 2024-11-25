'use client'
import {
  InputAdornment,
  SxProps,
  TextField,
  TextFieldProps,
} from '@mui/material'
import styled from 'styled-components'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

export const BootstrapInput = (props: TextFieldProps) => {
  return (
    <BootstrapInputStyle
      sx={{ m: 1, borderRadius: 12 }}
      focused
      placeholder="Search for"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon
                sx={{
                  color: 'var(--gray-200)',
                }}
              />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  )
}

export const BootstrapInputStyle = styled(TextField)`
  margin: 1;
  border-radius: 12;
  background-color: var(--gray-100);
  width: 60%;
  label + & {
    margin-top: 3px;
  }
  .MuiOutlinedInput-root.Mui-focused {
    fieldset {
      border: none;
    }
  }
  .MuiInputBase-input {
    position: relative;
    font-size: 16px;
    width: auto;
    padding: 10px 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
`
export const searchStyle: SxProps = {
  margin: 1,
  borderRadius: 12,
  backgroundColor: 'var(--gray-100)',
  width: '70%',
  '& label + &': {
    marginTop: 3,
  },
  '& .MuiOutlinedInput-root.Mui-focused fieldset': {
    border: 'none',
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  },
}
