
import Avatar from '@mui/material/Avatar';

function Username() {
  return (
    <div className="username-container">
        <Avatar
            alt="Kapish"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, bgcolor: 'blue'}}
        />
        <p>Kapish</p>
    </div>
  )
}

export default Username
