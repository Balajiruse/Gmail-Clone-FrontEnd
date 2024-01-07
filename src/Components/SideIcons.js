import { IconButton } from '@mui/material'
import React from 'react';


function SideIcons() {
    return (
        <div className='sideIcons-container'>
            <IconButton>
                <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="calendar" height={'25px'} />
            </IconButton>
            <IconButton>
                <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="keep" height={'25px'} />
            </IconButton>
            <IconButton>
                <img src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="tasks" height={'25px'} />
            </IconButton>
            <IconButton>
                <img src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="contacts" height={'25px'} />
            </IconButton>
            <IconButton>
                <img src="https://fonts.gstatic.com/s/i/googlematerialicons/add/v21/black-24dp/1x/gm_add_black_24dp.png" alt="add" height={'25px'} />
            </IconButton>
        </div>
    )
}

export default SideIcons