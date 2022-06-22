import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import './Footer.css';

function Footer() {

    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid container alignItems="center" item xs={12} direction="row">

                    <Grid alignItems="center" item xs={4}>

                        <Box className='box1'>

                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">

                                <Typography variant="h5" align="center" gutterBottom className='textosRedes'>

                                    Quem somos

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid alignItems="center" item xs={4}>

                        <Box className='box1'>

                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">

                                <Typography variant="h5" align="center" gutterBottom className='textosRedes'>

                                    Institucional

                                    <Typography variant="h6" align="center" gutterBottom className='textosRedes'>

                                    O violeta

                                    </Typography>

                                </Typography>

                                

                            </Box>

                        </Box>

                    </Grid>

                    <Grid alignItems="center" item xs={4}>
                        <Box className='box1'>

                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">

                                <Typography variant="h5" align="center" gutterBottom className='textosRedes'>

                                    Formas de pagamento

                                </Typography>

                            </Box>

                        </Box>
                    </Grid>


                </Grid>
            </Grid>


        </>
    );
}
export default Footer;