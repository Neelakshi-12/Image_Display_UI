import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import data from '../data';
import AntIcon from 'react-native-vector-icons/AntDesign';

export default class EBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: [],
      page: 1,
      perPage: 5,
      loadMoreVisible: true,

      text: '',
      allData: data.info,
    };
    this.arrayholder = [];
  }
  componentDidMount() {
    this.setNewData();
    console.log(
      'alllllllllllllllllllllllll daaaaaaaaaaaatttttttttttttttaaaaaaaaaaaaaa',
      this.state.allData,
    );
  }

  setNewData = async () => {
    var tempArray = [];
    if (data.info.length == this.state.dataSource.length) {
      this.setState({
        loadMoreVisible: false,
      });
    } else {
      for (var i = 0; i < this.state.page * this.state.perPage; i++) {
        tempArray.push(data.info[i]);
      }
      this.setState({
        dataSource: tempArray,
        loadMoreVisible: true,
      });
      this.arrayholder = data.info;
    }
    console.log('this.arrayHolder', this.arrayholder);
  };

  loadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
        loadMoreVisible: true,
      },
      () => {
        this.setNewData();
      },
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
              <View style={styles.listItem}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('SingleImageDisplay', {
                      itemId: item.id,
                      itemTitle: item.title,
                      itemPhoto: item.photo,
                    });
                  }}>
                  <Image
                    source={{uri: item.photo}}
                    style={{
                      resizeMode: 'cover',
                      flex: 1,
                      height: 155,
                      width: 155,
                      borderRadius: 10,
                    }}
                  />
                  <View>
                    <Text style={{color: '#727375'}}>{item.title}</Text>
                    <View>
                      <Text style={{color: '#3c4869'}}>
                        ({item.images.length})
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          ListFooterComponent={() => (
            <View>
              {this.state.loadMoreVisible == true ? (
                <View
                  style={{
                    width: 100,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 150,
                  }}>
                  <TouchableOpacity onPress={() => this.loadMore()}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: 18,
                          marginRight: 4,
                        }}>
                        {' '}
                        Load More
                      </Text>
                      <ActivityIndicator size="large" color="grey" />
                    </View>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          )}
          onEndReachedThreshold={0.01}
          onEndReached={this.loadMore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 10,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    flex: 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});
