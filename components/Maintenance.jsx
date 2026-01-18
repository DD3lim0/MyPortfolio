import Image from 'next/image'
import maintenance from '../public/assets/maintenance.png'

export const Maintenance = () =>{

    return (
        <section className='maintenanceContainer'>
            <Image className='maintenance' my-0 mx-auto  width={900} height={100} src={maintenance} />
        </section>
    )
}




