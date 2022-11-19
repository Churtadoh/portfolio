import React from 'react';
import {Container, Grid, Box} from '@mui/material' 
import {Link} from 'react-router-dom'
import Contact from './Contact';


export default function Footer() {
    
    return ( 
    <footer>
        <Box px={{xs: 3, sm:10}} py={{xs: 2, sm: 2}} bgcolor="text.secondary" color='white'>
            <Container maxWidth = 'lg'>
                <Grid container spacing={10} 
                display={'flex'} flexDirection={{ md: 'row'}} alignItems={'center'}
                justifyContent={'space-around'}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={2} width={{xs:400, sm:250}} py={{xs: 1, sm: 1}} >
                            <Contact/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>            
                        <Box borderBottom={2} width={{xs:400, sm:250}} py={{xs: 1, sm: 1}} >
                            <Contact/>
                        </Box>
                    </Grid>   
                </Grid>
                <Box textAlign= "center" pt={{xs: 2, sm: 2}} pb={{xs: 5, sm: 0}}>
                    CAMILO HURTADO&trade; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>

    </footer>
        
    )
}