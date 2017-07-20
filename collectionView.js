import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import GridView from 'react-native-gridview';

const itemsPerRow = 3;

const data = Array(20)
    .fill(null)
    .map((item, index) => index + 1);

const randomData = [];
for (let i = 0; i < data.length; i) {
    const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
    randomData.push(data.slice(i, endIndex));
    i = endIndex;
}
const dataSource = new GridView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
}).cloneWithRows(randomData);

export default function MyGrid(props) {
    return (
        <GridView
            data={data}
            dataSource={props.randomizeRows ? dataSource : null}
            itemsPerRow={itemsPerRow}
            renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
                return (
                    <TouchableHighlight>
                    <View style={{ flex: 1, borderWidth: 1 }}>
                        <Text onpress={() => alert('sdfsd')} style={{padding:5, color:'black', fontSize:16, alignSelf:'center'}}>{`${item}`}</Text>
                    </View>
                    </TouchableHighlight>
                );
            }}
        />
    );
}