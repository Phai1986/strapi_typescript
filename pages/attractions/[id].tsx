import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {Container,Card,CardActions,CardContent,CardMedia,Button,Typography,Grid} from '@mui/material';
import Link from 'next/link'

type Data = {
    id: string,
    name: string,
    coverimage: string,
    detail: string
}


const Page = () => {
    const router = useRouter()
    const { id } = router.query

    const [data, setData] = useState<Data>({
        id: '',
        name: '',
        coverimage: '',
        detail: ''
    })
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        if (id) {
            fetch(`http://localhost:3000/api/attractions/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data[0])
                    setLoading(false)
                })
        }
    }, [id])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>

    return (
        <Container maxWidth="lg">
            <Card>
                <CardMedia sx={{ height: 345 }}
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
                    <Link href="/attractions">
                        <Button size="small">Learn More</Button>
                    </Link>
                </CardActions>
            </Card>
        </Container>
    )
}

export default Page