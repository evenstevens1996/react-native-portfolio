import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { FIELDS } from '../shared/fields';

const DirectoryScreen = ({ navigation }) => {
const [fields, setFields] = useState(FIELDS);
    
    const renderDirectoryItem = ({ item: field }) => {
        return (
            <ListItem
                onPress={() =>
                    navigation.navigate('FieldInfo', { field })
                }
            >
                <Avatar source={field.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{field.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {field.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList
            data={props.fields}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;