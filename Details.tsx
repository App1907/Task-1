import React, { useState, useRef } from 'react';
import {
 View, Text, Image, TextInput, TouchableOpacity, FlatList, Modal,
 SafeAreaView, StyleSheet, TouchableWithoutFeedback, Dimensions
} from 'react-native';

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native';


type HomeProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const locations = ["The Great Street, Miami", "Sunset Blvd, LA", "Ocean Drive, Miami"];
const equipmentData = [
 { id: '1', name: 'Wheel Blaster Attachment', category: 'High Pressure Equipment', part: 10, location: 'TIRE_SEAL', tunnel: 'TUNNEL 1' },
 { id: '2', name: 'Wheel Blaster Attachment', category: 'High Pressure Equipment', part: 10, location: 'TIRE_SEAL', tunnel: 'TUNNEL 1' },
 { id: '3', name: 'Wheel Blaster Attachment', category: 'High Pressure Equipment', part: 10, location: 'TIRE_SEAL', tunnel: 'TUNNEL 1' },
 { id: '4', name: 'Wheel Blaster Attachment', category: 'High Pressure Equipment', part: 10, location: 'TIRE_SEAL', tunnel: 'TUNNEL 1' },
 { id: '5', name: 'Wheel Blaster Attachment', category: 'High Pressure Equipment', part: 10, location: 'TIRE_SEAL', tunnel: 'TUNNEL 1' },
 { id: '6', name: 'Wheel Blaster Attachment', category: 'High Pressure Equipment', part: 10, location: 'TIRE_SEAL', tunnel: 'TUNNEL 1' },
];

export default function FirstPage() {
 const navigation = useNavigation();

 const [selectedLocation, setSelectedLocation] = useState(locations[0]);
 const [locationModalVisible, setLocationModalVisible] = useState(false);
 const [moreOptionsVisible, setMoreOptionsVisible] = useState(false);
 const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
 const [selectedItemId, setSelectedItemId] = useState(null);
 const [deleteModalVisible, setDeleteModalVisible] = useState(false);

 const moreIconRefs = useRef({});
 const { width: screenWidth } = Dimensions.get('window');

 const handleDownloadPress = () => {
 // Navigate to Home screen
 navigation.navigate('Home');
 };

 const handleMoreOptionsPress = (itemId) => {
 setSelectedItemId(itemId);
 const ref = moreIconRefs.current[itemId];
 if (ref) {
 ref.measure((x, y, width, height, pageX, pageY) => {
 const maxWidth = screenWidth - 20; // 20 for padding
 const newLeft = Math.min(pageX + width - 55, maxWidth - 200); // 200 is the width of the modal

 setPopupPosition({
 top: pageY + height + 5, // Position below the icon with padding
 left: newLeft
 });
 setMoreOptionsVisible(true);
 });
 }
 };

 const handleOutsidePress = () => {
 setMoreOptionsVisible(false);
 setSelectedItemId(null);
 };

 const handleDeletePress = () => {
 setMoreOptionsVisible(false);
 setDeleteModalVisible(true);
 };

 const handleConfirmDelete = () => {
 // Handle delete action here
 setDeleteModalVisible(false);
 alert('Equipment deleted');
 };

 const handleCancelDelete = () => {
 setDeleteModalVisible(false);
 };

 const renderEquipmentItem = ({ item }) => (
 <View style={styles.equipmentContainer}>

 <View style={styles.row}>
 <Text style={styles.equipmentName}>{item.name}</Text>
 <TouchableOpacity onPress={() => handleMoreOptionsPress(item.id)}>
 <View style={styles.moreIconContainer} ref={ref => moreIconRefs.current[item.id] = ref}>
 <Image source={require('/Users/ai/Desktop/AwesomeProject/assets/more.png')} style={styles.icon} />
 </View>
 </TouchableOpacity>
 </View>

 <View style={styles.space} />

 <Text style={styles.category}>{item.category}</Text>
 <View style={styles.space} />
 <View style={styles.row}>
 <Text style={styles.locationAndTunnel}>{`${item.location} · ${item.tunnel}`}</Text>
 <View style={styles.partsContainer}>
 <Text style={styles.partsText}>{`Parts ${item.part}`}</Text>
 </View>
 </View>
 </View>
 );

 return (
 <SafeAreaView style={styles.container}>
 <View style={styles.header}>

 <TouchableOpacity>
 <View style={styles.iconContainerLeft}>
 <Image source={require('/Users/ai/Desktop/AwesomeProject/assets/left.png')} style={styles.icon} />
 </View>
 </TouchableOpacity>

 <View>
 <Text style={styles.headerTitle}>SITE LOCATION</Text>
 <TouchableOpacity onPress={() => setLocationModalVisible(true)} style={styles.locationstyle}>
 <Text style={styles.selectedLocation}>{selectedLocation}</Text>
 </TouchableOpacity>
 </View>

 <TouchableOpacity>
 <View style={styles.iconContainerRight}>
 <Image source={require('/Users/ai/Desktop/AwesomeProject/assets/bell.png')} style={styles.icon} />
 </View>
 </TouchableOpacity>


 </View>

 <View style={styles.infoSection}>
 <View>
 <Text style={styles.infoTitle}>Equipment Management</Text>
 <Text style={styles.lengthstyle}>{`${equipmentData.length} Equipment found`}</Text>
 </View>


 <TouchableOpacity onPress={handleDownloadPress}>
 <View style={styles.downloadIconContainer}>
 <Image source={require('/Users/ai/Desktop/AwesomeProject/assets/download.png')} style={styles.icon} />
 </View>
 </TouchableOpacity>


 </View>

 <View style={styles.searchSection}>

 <View style={styles.searchContainer}>
 <Image source={require('/Users/ai/Desktop/AwesomeProject/assets/search.png')} style={styles.searchIcon} />
 <TextInput
 placeholder="Search equipment name, category"
 style={styles.searchInput}
 />
 </View>


 <TouchableOpacity style={styles.menuIconContainer}>
 <Image source={require('/Users/ai/Desktop/AwesomeProject/assets/menu.png')} style={styles.icon} />
 </TouchableOpacity>
 </View>

 <FlatList
 data={equipmentData}
 renderItem={renderEquipmentItem}
 keyExtractor={item => item.id}
 contentContainerStyle={styles.flatListContent}
 />

 {/* Location Modal */}
 <Modal
 transparent={true}
 visible={locationModalVisible}
 onRequestClose={() => setLocationModalVisible(false)}
 >
 <TouchableWithoutFeedback onPress={() => setLocationModalVisible(false)}>
 <View style={styles.modalBackground}>
 <View style={styles.modalContainer}>
 {locations.map((location, index) => (
 <TouchableOpacity key={index} onPress={() => { setSelectedLocation(location); setLocationModalVisible(false); }}>
 <Text style={styles.modalText}>{location}</Text>
 </TouchableOpacity>
 ))}
 </View>
 </View>
 </TouchableWithoutFeedback>
 </Modal>

 {/* More Options Modal */}
 <Modal
 transparent={true}
 visible={moreOptionsVisible && selectedItemId !== null}
 onRequestClose={handleOutsidePress}
 >
 <TouchableWithoutFeedback onPress={handleOutsidePress}>
 <View style={styles.modalBackground}>
 <TouchableWithoutFeedback>
 <View style={[styles.modalContainerSmall, { top: popupPosition.top, left: popupPosition.left }]}>
 <TouchableOpacity onPress={handleDeletePress}>
 <Text style={styles.modalTextBold}>DELETE</Text>
 </TouchableOpacity>
 <TouchableOpacity onPress={() => alert('Edit option selected')}>
 <Text style={styles.modalTextBold}>EDIT</Text>
 </TouchableOpacity>
 <TouchableOpacity onPress={() => alert('Mark not in use selected')}>
 <Text style={styles.modalTextBold}>MARK NOT IN USE</Text>
 </TouchableOpacity>
 </View>
 </TouchableWithoutFeedback>
 </View>
 </TouchableWithoutFeedback>
 </Modal>

 {/* Delete Confirmation Modal */}
 <Modal
 transparent={true}
 visible={deleteModalVisible}
 onRequestClose={() => setDeleteModalVisible(false)}
 >
 <TouchableWithoutFeedback onPress={() => setDeleteModalVisible(false)}>
 <View style={styles.modalBackground}>
 <View style={styles.deleteModalContainer}>
 <Text style={styles.deleteModalHeading}>Delete Equipment</Text>
 <Text style={styles.deleteModalText}>Are you sure you would like to delete the equipment?</Text>
 <View style={styles.deleteModalButtonContainer}>
 <TouchableOpacity onPress={handleCancelDelete} style={styles.deleteModalButtonCancel}>
 <Text style={styles.deleteModalButtonText}>Cancel</Text>
 </TouchableOpacity>
 <TouchableOpacity onPress={handleConfirmDelete} style={styles.deleteModalButtonConfirm}>
 <Text style={styles.deleteModalButtonText2}>Confirm</Text>
 </TouchableOpacity>
 </View>
 </View>
 </View>
 </TouchableWithoutFeedback>
 </Modal>
 </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#f0f0f0',
 },
 header: {
 backgroundColor: '#427AA1',
 paddingVertical: 40,
 paddingHorizontal: 30,
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'space-between',
 position: 'absolute',
 width: '100%'
 },
 locationstyle: {

 },
 headerTitle: {
 padding: 30,
 flex: 1,
 color: '#fff',
 textAlign: 'center',
 fontSize: 18,
 fontWeight: 'bold',
 },
 selectedLocation: {
 color: '#fff',
 fontSize: 15,
 textAlign: 'center'
 },
 iconContainerLeft: {
 backgroundColor: '#fff',
 padding: 14,
 borderRadius: 5,
 },
 iconContainerRight: {
 backgroundColor: '#fff',
 padding: 14,
 borderRadius: 5,
 },
 downloadIconContainer: {
 backgroundColor: '#fff',
 padding: 13,
 borderRadius: 5,
 },
 menuIconContainer: {
 backgroundColor: '#fff',
 padding: 9.5,
 borderRadius: 5,
 alignItems: 'center',
 marginLeft: 10,
 },
 icon: {
 width: 20,
 height: 20,
 },
 infoSection: {
 padding: 20,
 flexDirection: 'row',
 justifyContent: 'space-between',
 alignItems: 'center',
 marginTop: 140,
 },
 lengthstyle: {
 color: 'gray',
 marginTop: 10,
 fontSize: 15
 },
 infoTitle: {
 fontSize: 24,
 fontWeight: 'bold',
 },
 searchSection: {
 flexDirection: 'row',
 marginTop: 5,
 alignItems: 'center',
 paddingHorizontal: 16,
 marginBottom: 12,
 },
 searchContainer: {
 flex: 1,
 flexDirection: 'row',
 alignItems: 'center',
 backgroundColor: '#fff',
 paddingHorizontal: 10,
 borderRadius: 5,
 },
 searchIcon: {
 width: 20,
 height: 20,
 },
 searchInput: {
 flex: 1,
 padding: 10,
 fontSize: 16,
 },
 flatListContent: {
 paddingBottom: 20,
 },
 equipmentContainer: {
 backgroundColor: '#fff',
 padding: 18,
 marginVertical: 8,
 marginHorizontal: 16,
 borderRadius: 10,
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 2 },
 shadowOpacity: 0.1,
 shadowRadius: 5,
 elevation: 3,
 },
 row: {
 flexDirection: 'row',
 alignItems: 'center',
 justifyContent: 'space-between'
 },
 equipmentName: {
 fontSize: 16,
 fontWeight: 'bold',
 },
 moreIconContainer: {
 backgroundColor: '#fff',
 padding: 5,
 borderRadius: 5,
 },
 category: {
 fontSize: 15,
 color: '#555',
 marginTop: -10,
 marginBottom: 5
 },
 locationAndTunnel: {
 fontSize: 14,
 color: '#555',
 flex: 1,
 },
 partsContainer: {
 backgroundColor: '#e6e6e6',
 borderRadius: 5,
 paddingHorizontal: 10,
 paddingVertical: 5,
 },
 partsText: {
 fontSize: 14,
 },
 space: {
 height: 10,
 },
 modalBackground: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: 'rgba(0, 0, 0, 0.5)',
 },
 modalContainer: {
 backgroundColor: '#fff',
 borderRadius: 10,
 padding: 20,
 width: '80%',
 maxHeight: '50%',
 },
 modalContainerSmall: {
 backgroundColor: '#fff',
 borderRadius: 10,
 padding: 10,
 width: 200,
 position: 'absolute',
 },
 modalText: {
 fontSize: 16,
 marginVertical: 10,
 },
 modalTextBold: {
 fontSize: 16,
 fontWeight: 'bold',
 paddingVertical: 10,
 paddingHorizontal: 15,
 },
 deleteModalContainer: {
 backgroundColor: '#fff',
 borderRadius: 10,
 padding: 20,
 width: '100%', // Full width of the device
 height: 250, // Increased height of the modal
 position: 'absolute',
 bottom: 0,
 justifyContent: 'space-between',
 },
 deleteModalHeading: {
 fontSize: 23,
 fontWeight: 'bold',
 marginBottom: 0,
 },
 deleteModalText: {
 fontSize: 20,
 color: '#555', // Subtext color changed to grey
 marginBottom: 5, // Space between text and buttons
 },
 deleteModalButtonContainer: {
 flexDirection: 'row',
 justifyContent: 'space-between',
 marginBottom: 20, // Space from the bottom

 },
 deleteModalButtonCancel: {
 backgroundColor: '#fff',
 padding: 10,
 borderRadius: 5,
 borderWidth: 1,
 justifyContent: 'center',
 borderColor: 'grey',
 flex: 1,
 marginRight: 5,
 height: 50,
 alignItems: 'center',
 },
 deleteModalButtonConfirm: {
 backgroundColor: '#427AA1', // Match the header color
 padding: 10,
 color: '#fff',
 justifyContent: 'center',
 borderRadius: 5,
 flex: 1,
 marginLeft: 5,
 alignItems: 'center',
 },
 deleteModalButtonText: {
 color: 'black',
 fontSize: 16,
 fontWeight: 'bold'
 },
 deleteModalButtonText2: {
 color: 'white',
 fontSize: 16,
 fontWeight: 'bold'
 }
});