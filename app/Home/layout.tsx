import { searchStyle } from '@Atom/Input'
import { ExpandMore, Pinterest } from '@mui/icons-material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import {
  Avatar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import SmsRoundedIcon from '@mui/icons-material/SmsRounded'
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <nav className="inline-flex my-3 p-3 w-full justify-between items-center">
        <Pinterest
          sx={{
            color: 'var(--red-100)',
            fontSize: 'var(--font-size-4xl)',
          }}
        />
        <Button
          variant="contained"
          sx={{
            background: 'var(--black-100)',
            borderRadius: 'var(--border-radius-2xl)',
            textTransform: 'capitalize',
            fontWeight: 'bold',
          }}
        >
          Home
        </Button>
        <Button
          sx={{
            background: 'var(--white-100)',
            color: 'var(--black-100)',
            borderRadius: 'var(--border-radius-2xl)',
            textTransform: 'capitalize',
            fontWeight: 'bold',
          }}
        >
          Create
        </Button>
        <TextField
          sx={searchStyle}
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
        />
        <IconButton>
          <NotificationsRoundedIcon />
        </IconButton>
        <IconButton>
          <SmsRoundedIcon />
        </IconButton>
        <Avatar
          alt="Remy Sharp"
          src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
        />
        <IconButton>
          <ExpandMore />
        </IconButton>
      </nav>
      {children}
    </div>
  )
}
