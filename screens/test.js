import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class SingleImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Image 1',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
        {
          id: 2,
          title: 'Image 2',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
        {
          id: 3,
          title: 'Image 3',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
        {
          id: 4,
          title: 'Image 4',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
        {
          id: 5,
          title: 'Image 5',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
        {
          id: 6,
          title: 'Image 6',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
        {
          id: 7,
          title: 'Image 7',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
        {
          id: 8,
          title: 'Image 8',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
        {
          id: 9,
          title: 'Image 9',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
        {
          id: 9,
          title: 'Image 10',
          count: 4,
          image:
            'https://3.bp.blogspot.com/-taBI-sheN6o/VC1x-31h1fI/AAAAAAAAZB8/Z8b8QTH3PXs/s1600/android-application-istall-error.png',
        },
      ],
    };
  }

  testingImage = () => {
    Alert.alert('yo laa');
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={post => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image style={styles.cardImage} source={{uri: item.image}} />
                </View>
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.count}>({item.count})</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 10,
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: 'space-between',
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: '#778899',
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: '#B0C4DE',
  },
});
