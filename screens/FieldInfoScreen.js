import RenderField from '../features/fields/RenderField';

const FieldInfoScreen = ({ route }) => {
    const { field } = route.params;
    return <RenderField field={field} />;
};

export default FieldInfoScreen;