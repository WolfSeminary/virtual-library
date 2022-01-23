import React, { useState } from 'react';
import { Button, FormControlLabel, FormGroup } from '@mui/material';
import { Switch } from '@mui/material';

export default () => {
    const [isFree, setIsFree] = React.useState("free")
    const handleChange = (event) => {
        setIsFree(event.target.checked);
    }
    return (
        <>
            <Button style={{ float: 'right' }} variant="outlined">Library Status</Button>
            <FormGroup>
                <FormControlLabel control={<Switch checked={isFree}
                    onChange={handleChange} />} label={isFree ? "free" : "borrowed"} />
            </FormGroup>
        </>
    )
}
