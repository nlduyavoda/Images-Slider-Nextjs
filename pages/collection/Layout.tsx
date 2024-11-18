import { IconButton } from '@Atom/IconButton/IconButton'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import SmsIcon from '@mui/icons-material/Sms'
import {
  Avatar,
  Badge,
  Button,
  InputAdornment,
  styled,
  TextField,
} from '@mui/material'
import { Pinterest } from '../../Components/Icons'

export default function ShopLayout(props) {
  return (
    <div className="h-full w-full flex">
      <div className="flex fixed bg-white top-0 left-0 h-20 p-10 w-full z-10 items-center justify-between">
        <Pinterest fill="var(--icon-brand-primary)" />
        <Button className="bg-black text-white rounded-3xl capitalize">
          Home
        </Button>
        <Button className="bg-red text-white rounded-3xl capitalize">
          Create
        </Button>
        <BootstrapInput
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
        />
        <IconButton>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="delete">
          <SmsIcon />
        </IconButton>

        <Avatar
          alt="Remy Sharp"
          src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
        />
        <IconButton aria-label="delete">
          <ExpandMoreRoundedIcon />
        </IconButton>
      </div>
      <section className="mt-20 p-10">{props.children}</section>
    </div>
  )
}

const BootstrapInput = styled(TextField)(({ theme }) => ({
  backgroundColor: 'var(--gray-100)',
  width: '60%',
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
}))
