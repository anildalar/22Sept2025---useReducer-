import React from 'react'
import { useGetMyDataQuery } from '../services/api'

export default function RTK() {
    const { data, error, isLoading } = useGetMyDataQuery(undefined, {
        refetchOnMountOrArgChange: true, // always refetch
    });

    console.log('data >>>>>>', data);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading data</p>;

    return (
        <>
            <div>RTK</div>
            <ol>
                {data?.length > 0 && data.map((cv, idx) => (
                    <li key={idx}>{cv.name}</li>
                ))}
            </ol>
        </>
    )
}
