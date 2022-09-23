import { InferGetServerSidePropsType } from 'next'
import { Container, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import Link from 'next/link'

type Data = {
    id: string,
    name: string,
    coverimage: string,
    detail: string
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/attractions/')
    const data: Data[] = await res.json()

    return {
        props: {
            data,
        },
    }
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    {data.map((data) => (
                        <Grid xs={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={data.coverimage}
                                    alt={data.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.detail}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link href={`/attractions/` + data.id}>
                                        <Button size="small">Learn More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <style>
                {`
                    body {
                        padding: 150px 0;
                    }
                `}
            </style>
        </>
    )
}

export default Page