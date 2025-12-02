import { ViewServices } from './viewServices';
import { ViewServicesProps } from './viewServices';

export const ViewServicesBlock: React.FC<ViewServicesProps> = ({ title, subtitle, subsubtitle, links }) => {
    return (
        <ViewServices title={title} subtitle={subtitle} subsubtitle={subsubtitle} links={links} />
    )
}
