import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import './Home.css';


function Home() {

    const useStyles = makeStyles({
        root: {
            maxWidth: 242,
        },
        media: {
            height: 258,
            width: 242
        },
    });
    const classes = useStyles();

    return (

        <>

            <Grid container direction='row' className='caixa' justifyContent='center' alignItems='center' >


            <Grid container style={{marginLeft: "32px"}}>
          <Box>
            <Typography style={{color:"#AA836C", fontSize:"25px",marginBottom:"30px", marginTop:"30px",}}variant='h3' className='tituloHome'>Como Funciona</Typography>
          </Box>
        </Grid>

                <Grid container justifyContent='center' alignItems='center'>

                    <Grid container  justifyContent='center' alignItems='center' xs={3} item className='cardHome'>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media} style={{ width: "100px", height: "100px" }}
                                    image="https://imgur.com/ukiLrIy.jpg"
                                    title="Lupa"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: "jaldi", fontSize: "15px", color: "#785846", fontWeight: "bold" }}>
                                        Encontre seus produtos favoritos
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: "jaldi", fontSize: "px", color: "B6917B" }}>
                                        Encontre seu produtos favoritos na loja 1
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid container justifyContent='center' alignItems='center' xs={3} item className='cardHome'>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media} style={{ width: "100px", height: "100px" }}
                                    image="https://imgur.com/zUnjvgn.jpg"
                                    title="Cesta"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: "jaldi", fontSize: "15px", color: "#785846", fontWeight: "bold" }}>
                                        Separamos os produtos para você
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: "jaldi", fontSize: "px", color: "B6917B" }}>
                                        Uma equipe treinada fará a separação da sua compra
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid container justifyContent='center' alignItems='center'xs={3} item className='cardHome'>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media} style={{ width: "100px", height: "100px" }}
                                    image="https://imgur.com/rSCH4jX.jpg"
                                    title="Economize"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: "jaldi", fontSize: "15px", color: "#785846", fontWeight: "bold" }}>
                                        Economize tempo e dinheiro
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: "jaldi", fontSize: "px", color: "B6917B" }}>
                                        Retire sua compra na loja ou escolha receber os produtos em sua casa.
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid container justifyContent='center' alignItems='center' xs={3} item className='cardHome'>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media} style={{ width: "100px", height: "100px" }}
                                    image="https://imgur.com/TksAPBG.jpg"
                                    title="Carteira"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: "jaldi", fontSize: "15px", color: "#785846", fontWeight: "bold" }}>
                                        Pague suas compras com total segurança
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontFamily: "jaldi", fontSize: "px", color: "B6917B" }}>
                                        Clique aqui para verificar as formas de pagamentos
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                </Grid>

            </Grid>
        </>



    )
}





export default Home;