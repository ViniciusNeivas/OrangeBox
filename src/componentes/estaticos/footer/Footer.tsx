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

                                <Typography variant="h5" align="center" gutterBottom >

                                    <p className='titulosFooter textDecoration'>Quem somos</p> 

                                    <Typography variant="h6" align="center" gutterBottom>

                                       <p className="conteudoFooter">O violeta</p> 

                                    </Typography>

                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                    <Grid alignItems="center" item xs={4}>

                        <Box className='box1'>

                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">

                                <Typography variant="h5" align="center" gutterBottom className='titulosFooter'>

                                <p className='titulosFooter textDecoration'>Institucional</p> 

                                    <Typography variant="h6" align="center" gutterBottom>

                                        <p className="conteudoFooter">Como comprar</p> 
                                        <p className="conteudoFooter">Entregas</p> 
                                        <p className="conteudoFooter">Política de privacidade</p> 
                                        <p className="conteudoFooter">Lojas</p>
                                        <p className="conteudoFooter">Resposabilidade social</p>
                                        <p className="conteudoFooter">Cashback</p>
                                        <p className="conteudoFooter">Fornecedor</p>
                                        <p className="conteudoFooter">Violeta e você</p>
                                        <p className="conteudoFooter">Trabalhe conosco</p>
                                        <p className="conteudoFooter">Tabloide de ofertas</p>
                                        <p className="conteudoFooter">Fale Conosco</p>
                                        <p className="conteudoFooter">Área do colaborador</p>



                                    </Typography>


                                </Typography>



                            </Box>

                        </Box>

                    </Grid>

                    <Grid alignItems="center" item xs={4}>
                        <Box className='box1'>

                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">

                                <Typography variant="h5" align="center" gutterBottom className='titulosFooter'>

                                <p className='titulosFooter textDecoration'>Formas de pagamento</p> 

                                    <Typography variant="h6" align="center" gutterBottom >

                                        <p className="conteudoFooter">Formas de pagamento site</p> 
                                        <p className="conteudoFooter">Formas de pagamento loja física</p> 
                                    
                                    </Typography>

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