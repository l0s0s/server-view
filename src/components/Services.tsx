import { url } from 'inspector';
import config from '../config.json';

const Services = () => {
    return (
        <div className="services">
            {config.services.map(
                (service: { name: string; url: string }) => (
                    <div className="service">
                        <a href={service.url}><h3>{service.name}</h3></a>
                    </div>
                )
            )}
        </div >
    );
};

export default Services;