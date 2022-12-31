import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderField = ({ field }) => {
    if (field) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={field.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {field.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{field.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderField;