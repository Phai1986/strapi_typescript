import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import {Data} from '../models/attractions'

type Props = {
    data: Data,
};

export default function demo(strapi: Props) {
    const { data } = strapi.data

    return (
        <div>
            <ul>
                {data.map((item, i) => (
                    <li key={i}>
                        <p>{item.id} : {item.attributes.name}</p>
                        <p><img src={process.env.WWW + item.attributes.coverimage.data.attributes.url} /></p>
                        <p>{item.attributes.detail}</p>    
                        <p>{item.attributes.longitude} , {item.attributes.latitude}</p>                    
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {

    const res = await fetch('http://localhost:1337/api/travels?populate=%2A')
    const result = await res.json()
    const data: Data = result

    return {
        props: {
            data,
        }
    }
}