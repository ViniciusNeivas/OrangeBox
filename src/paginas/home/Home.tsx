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

            <Grid container direction='row' justifyContent='center' alignItems='center' xs={12} >


                <Grid container style={{ marginLeft: "32px" }}>
                    <Box>
                        <Typography variant='h3' className='comoFunciona'>
                            Como Funciona
                        </Typography>
                    </Box>
                </Grid>

                <Grid container justifyContent='center' alignItems='center'>

                    <Grid container justifyContent='center' alignItems='center' xs={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media} style={{ width: "100px", height: "100px" }}
                                    image="https://imgur.com/ukiLrIy.jpg"
                                    title="Lupa"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" className="tituloCard">
                                        Encontre seus produtos favoritos
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="subtituloCard">
                                        Encontre seus produtos favoritos na loja 1
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
                                    <Typography gutterBottom variant="h5" component="h2" className="tituloCard">
                                        Separamos os produtos para você
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="subtituloCard">
                                        Uma equipe treinada fará a separação da sua compra
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
                                    image="https://imgur.com/rSCH4jX.jpg"
                                    title="Economize"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" className="tituloCard">
                                        Economize tempo e dinheiro
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="subtituloCard">
                                        Retire sua compra na loja ou escolha receber em casa.
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
                                    <Typography gutterBottom variant="h5" component="h2" className="tituloCard">
                                        Pague suas compras com total segurança
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="subtituloCard">
                                        Clique aqui para verificar as formas de pagamentos
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                </Grid>


                <Grid container direction='row' xs={12} >

                    <Box>

                    <Typography variant="h1" color="initial" className="pergunta">

                        Perguntas?

                    </Typography>


                    </Box>


                </Grid>




            </Grid>
        </>



    )
}





export default Home;