import * as React from 'react'
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function CircularIndeterminate(props: CircularProgressProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress {...props} />
    </Box>
  )
}
