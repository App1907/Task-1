import { Button, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../App';

const equipmentData = [
  {
    id: '1',
    title: 'Conveyor, Safety Control Panel Assy',
    startedDate: '15 Aug 2024',
    washesLeft: '10,000/16,000',
    qty: '15/30'
  },
  {
    id: '2',
    title: 'Conveyor, Safety Control Panel Assy',
    startedDate: '15 Aug 2024',
    washesLeft: '10,000/16,000',
    qty: '15/30'
  },
  {
    id: '3',
    title: 'Conveyor, Safety Control Panel Assy',
    startedDate: '15 Aug 2024',
    washesLeft: '10,000/16,000',
    qty: '15/30'
  },
  {
    id: '4',
    title: 'Conveyor, Safety Control Panel Assy',
    startedDate: '15 Aug 2024',
    washesLeft: '10,000/16,000',
    qty: '15/30'
  }, {
    id: '5',
    title: 'Conveyor, Safety Control Panel Assy',
    startedDate: '15 Aug 2024',
    washesLeft: '10,000/16,000',
    qty: '15/30'
  }, {
    id: '6',
    title: 'Conveyor, Safety Control Panel Assy',
    startedDate: '15 Aug 2024',
    washesLeft: '10,000/16,000',
    qty: '15/30'
  }, {
    id: '7',
    title: 'Conveyor, Safety Control Panel Assy',
    startedDate: '15 Aug 2024',
    washesLeft: '10,000/16,000',
    qty: '15/30'
  }, {
    id: '8',
    title: 'Conveyor, Safety Control Panel Assy',
    startedDate: '15 Aug 2024',
    washesLeft: '10,000/16,000',
    qty: '15/30'
  }, {
    id: '9',
    title: 'Conveyor, Safety Control Panel Assy',
    startedDate: '15 Aug 2024',
    washesLeft: '10,000/16,000',
    qty: '15/30'
  },
];

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const EquipmentCard = ({ item, navigation }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <Image style={styles.cardImage} source={{ uri: 'https://via.placeholder.com/60' }} />
      <View style={styles.cardDetails}>
        <Text style={styles.startedDate}>Started Using on {item.startedDate}</Text>

        <View style={styles.timerstyle}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Image source={{ uri: 'https://img.icons8.com/?size=100&id=116371&format=png&color=000000' }} style={styles.headerIcon} />
        </View>


        <View style={styles.washesContainer}>
          <Text style={styles.washesLeft}>
            <Text style={styles.number}>{item.washesLeft}</Text>
            {" "}Washes Left
          </Text>

          <Image source={{ uri: 'https://img.icons8.com/?size=100&id=H5dKJanZkZNk&format=png&color=000000' }} style={styles.iconImage} />
        </View>


      </View>
    </View>



    <View style={styles.bottomRow}>
      <View style={styles.qtystyle}><Text style={styles.qtyLabel}>Qty in Equipment/Inventory</Text>
        <Text style={styles.qtyValue}>{item.qty}</Text></View>


      <TouchableOpacity style={styles.replaceButton} onPress={() => navigation.navigate('Graphene')}>
        <Text style={styles.replaceButtonText}>Replace Part</Text>
      </TouchableOpacity>
    </View>


    <View style={styles.separator} />
  </View>
);

const EquipmentScreen = ({ navigation }: HomeProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Back arrow icon image */}
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
          <Image source={require('/Users/ai/Desktop/AwesomeProject/assets/backicon.png')} style={styles.headerIcon} />
        </TouchableOpacity>

        <View style={styles.icons}>
          {/* Search icon image */}
          <Image source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search.png' }} style={styles.headerIcon} />
          {/* Filter icon image */}
          <Image source={require('/Users/ai/Desktop/AwesomeProject/assets/menu.png')} style={styles.headerIcon} />
        </View>
      </View>

      <Text style={styles.headerTitle}>Sonny's TBG300 Rotating</Text>
      <Text style={styles.headerDescription}>Select Equipment Parts for Site 1</Text>

      {/* Equipment List */}
      <FlatList
        data={equipmentData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EquipmentCard item={item} navigation={navigation} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

// Styles for the EquipmentScreen component
const styles = StyleSheet.create({
  number: {
    color: 'black',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    padding: 15
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 11
  },
  headerDescription: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 16,
    paddingLeft: 15,

  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardImage: {
    width: 80,
    height: 107,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  cardDetails: {
    flex: 1,
  },
  startedDate: {
    fontSize: 12,
    color: '#757575',
  },
  timerstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 3
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 9,
    maxWidth: '60%'
  },
  washesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    padding: 4,
    marginTop: 4,
  },
  washesLeft: {
    fontSize: 14,
    color: '#757575',
    marginRight: 4,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  bottomRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  qtystyle: {
    flexDirection: 'column'
  },
  qtyLabel: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 7
  },
  qtyValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  replaceButton: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 9,
  },
  replaceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
    marginTop: 20,
  },
});

export default EquipmentScreen;