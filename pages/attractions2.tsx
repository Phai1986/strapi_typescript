import { InferGetStaticPropsType } from 'next'

type Post = {
    id: string,
    name: string,
    coverimage: string,
    detail: string
}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/attractions/')
    const data: Data[] = await res.json()

    return {
        props: {
            data,
        },
    }
}

function Blog({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <ul>
                {data.map((data) => (
                    <li key={data.id}>
                        {data.name} {data.coverimage} {data.detail}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog