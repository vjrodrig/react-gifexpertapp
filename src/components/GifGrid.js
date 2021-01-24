import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category} ) => {
 

    const { data: images ,loading } = useFetchGifs( category );
   
    return (  
        <>
            <h3 className='animate__animated animate__fadeIn'> { category } </h3>  

            { loading && <p className='animate__animated animate__flash'>Loading..</p>}

            <div className='card-grid'>

                    {
                        images.map( img => (                // cuando se usa el () en un map en vez de {}, se esta entregando un return implicito por lo q no se necesita poner return
                            <GifGridItem 
                            key = {img.id}
                            // img = {img}
                            { ...img }
                            />
                        ))
                    }
            
            </div>
        </> 
    )
}
