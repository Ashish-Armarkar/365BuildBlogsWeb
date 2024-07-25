import { useState, useEffect } from 'react';

const Fetcher = ( { 
    initialData = null, 
    url,
    renderSuccess = () => null 
} ) => {
    const [ data, setData ] = useState( initialData );
    const [ isLoading, setLoading ] = useState( true );
    const [ isError, setError ] = useState( false );
    const [ counter, add ] = useState( 0 );

    useEffect( () => {
        setLoading( true );
        console.log( { url, counter } );
        fetch( url ).then( res => res.json() ).then( data => {
            setData( data );
            setLoading( false );
        } ).catch( error => {
            console.warn( error );
            setError( true );
        } )
    }, [ url, counter ] );

    const refetch = () => add( counter => ++counter );

    if( isLoading )return <>Api Loading...</>
    if( isError )return <>Error...</>

    return renderSuccess( data, refetch );
}

export const UsersFetcher = ( { renderSuccess } ) => ( 
    <Fetcher 
        initialData={[]}
        url={'https://jsonplaceholder.typicode.com/users'}
        renderSuccess={ renderSuccess }
    />
);

export const PostsFetcher = ( { renderSuccess } ) => ( 
    <Fetcher 
        initialData={[]}
        url={'https://jsonplaceholder.typicode.com/posts'}
        renderSuccess={ renderSuccess }
    />
);

export default Fetcher;