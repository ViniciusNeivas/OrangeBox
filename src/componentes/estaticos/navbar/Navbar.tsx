import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import './Navbar.css'

function Navbar() {

    return (

        <>

            <AppBar position="static" className='navbarColor' >
                <Toolbar variant="dense" className='margem'>

                    <Box display="flex" justifyContent= "space-between" alignContent= "center" >
                        
                        <Box mx={1} style={{ cursor: "pointer" }} className = "titulos">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>


                        <Box mx={1} style={{ cursor: "pointer" }} className = "titulos">
                            <Typography variant="h6" color="inherit">
                                Promoções
                            </Typography>
                        </Box>
                        
                        <Box mx={1} style={{ cursor: "pointer" }} className = "titulos">
                            <Typography variant="h6" color="inherit">
                                Fale conosco
                            </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }}className = "titulos">
                            <Typography variant="h6" color="inherit">
                                Política de privacidade
                            </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }}className = "titulos">
                            <Typography variant="h6" color="inherit">
                                Trabalhe conosco
                            </Typography>
                        </Box>

                        <Box mx={1} style={{ cursor: "pointer" }}className = "titulos">
                            <Typography variant="h6" color="inherit">
                                Violeta e você
                            </Typography>
                        </Box>



                    </Box>

                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;