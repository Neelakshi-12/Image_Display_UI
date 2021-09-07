import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import data from '../data';

class SingleImageDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allData: data.info,
    };
  }

  render() {
    const {route} = this.props;
    const {itemTitle, itemPhoto, itemCount} = route.params;

    return (
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={{margin: 10}}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'serif',
              marginTop: 10,
              textAlign: 'center',
            }}>
            {itemTitle}
          </Text>

          <TouchableOpacity style={{margin: 15}}>
            <Image
              source={{uri: itemPhoto}}
              style={{
                height: 300,
                width: '100%',
                borderRadius: 20,
              }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
            {itemCount}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default SingleImageDisplay;
