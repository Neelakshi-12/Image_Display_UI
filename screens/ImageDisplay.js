import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import data from '../data';
import AntIcon from 'react-native-vector-icons/AntDesign';
export default class ImageDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: [],
      page: 1,
      perPage: 6,
      loadMoreVisible: true,
      text: '',
      allData: data.info,
    };
    this.arrayholder = [];
  }
  componentDidMount() {
    this.setNewData();
    // console.log('alldata', this.state.allData);
    // {
    //   this.state.allData.map((item, index) => {
    //     return console.log(item.images.length);
    //   });
    // }
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
  };

  loadMore() {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.setNewData();
      },
    );
  }

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
                      itemTitle: item.title,
                      itemPhoto: item.photo,
                    });
                  }}
                  style={{flex: 1}}>
                  <Image
                    source={{uri: item.photo}}
                    style={{
                      resizeMode: 'cover',
                      flex: 1,
                      aspectRatio: 1,
                      borderRadius: 10,
                    }}
                  />
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    {/* {console.log('item.images', item.images)}
                    {console.log(item.images.length)} */}
                    <Text style={styles.title}>{item.images.length}</Text>
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
                          color: 'green',
                          fontWeight: 'bold',
                          fontSize: 18,
                          marginRight: 4,
                        }}>
                        {' '}
                        Load More
                      </Text>
                      <AntIcon name="loading1" color="green" size={20} />
                    </View>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          )}
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
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    backgroundColor: '#FFFF',
  },
  title: {
    fontSize: 18,
    flex: 1,
    color: 'grey',
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: '#B0C4DE',
    fontWeight: 'bold',
  },
});
