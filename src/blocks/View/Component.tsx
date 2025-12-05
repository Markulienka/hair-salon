import { View } from './viewServices';
import { ViewProps } from './viewServices';

export const ViewBlock: React.FC<ViewProps> = (props) => {
    return (
        <View {...props} />
    )
}
