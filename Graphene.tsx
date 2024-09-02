import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Button, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../App';

type GrapheneProps = NativeStackScreenProps<RootStackParamList, 'Graphene'>



// Importing images from assets
const backIcon = require('/Users/ai/Desktop/AwesomeProject/assets/backicon.png');
const saveIcon = require('/Users/ai/Desktop/AwesomeProject/assets/Frame.png');
const shareIcon = require('/Users/ai/Desktop/AwesomeProject/assets/share.png');
const productImage = require('/Users/ai/Desktop/AwesomeProject/assets/imggreen.png');

const Graphene = ({ navigation }: GrapheneProps) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Image with Icons */}
      <View style={styles.imageContainer}>
        <Image source={productImage} style={styles.image} />
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.iconSize} />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <Image source={saveIcon} style={styles.iconSize} />
          <Image source={shareIcon} style={styles.iconSize} />
        </View>
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.productHeader}>
          <Text style={styles.productName}>Graphene Xtreme</Text>
          <Text style={[styles.price, styles.productName]}>$499</Text>
        </View>
        <Text style={styles.productId}>#40010795  •  In Stock: 428</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.specButton]}>
            <Text style={styles.specButtonText}>Specifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.detailsButton]}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>

        {/* Used On Section */}
        <Text style={styles.sectionTitle}>USED ON</Text>
        <Text style={styles.listItem}>•  Sonny's Pendulum</Text>
        <Text style={styles.listItem}>•  Sonny's Tire Brush</Text>
        <Text style={styles.listItem}>•  Sonny's Tire Seal</Text>

        {/* Other Details Section */}
        <Text style={styles.sectionTitle}>OTHER DETAILS</Text>

        {/* Brand and Shaft Diameter in one row */}
        <View style={styles.detailRow}>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Brand</Text>
            <Text style={styles.detailValue}>AMI Bearings, Inc.</Text>
          </View>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Shaft Diameter</Text>
            <Text style={styles.detailValue}>1-1/4in</Text>
          </View>
        </View>

        {/* Manufacturer Part in a separate row */}
        <View style={styles.detailRow}>
          <View style={styles.fullWidthColumn}>
            <Text style={styles.detailLabel}>Manufacturer Part</Text>
            <Text style={styles.detailValue}>#UCTB207-20CEPBOXE</Text>
          </View>
        </View>

        {/* Bearing Insert and Housing in one row */}
        <View style={styles.detailRow}>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Bearing Insert</Text>
            <Text style={styles.detailValue}>UC207-20</Text>
          </View>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Housing</Text>
            <Text style={styles.detailValue}>TB207</Text>
          </View>
        </View>

        {/* Lubrication Fitting Tap in a separate row */}
        <View style={styles.detailRow}>
          <View style={styles.fullWidthColumn}>
            <Text style={styles.detailLabel}>Lubrication Fitting Tap</Text>
            {/* The value for "Lubrication Fitting Tap" can be added here */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    backgroundColor: '#e0e0e0',
    height: 300, // Increased height for a bigger image
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  backIcon: {
    position: 'absolute',
    left: 10,
    top: 55, // Adjusted to prevent overlapping with status bar
  },
  headerIcons: {
    position: 'absolute',
    right: 10,
    top: 55, // Adjusted to prevent overlapping with status bar
    flexDirection: 'row',
  },
  iconSize: {
    width: 22,
    height: 22,
    marginLeft: 16,
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    color: '#000', // Matching the color of "Graphene Xtreme"
  },
  productId: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align buttons to the start
    marginBottom: 12,
  },
  button: {
    paddingVertical: 8, // Uniform vertical padding
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 90, // Minimum width for both buttons
    height: 50, // Ensure both buttons have the same height
  },
  specButton: {
    backgroundColor: '#ffffff', // White background for the "Specifications" button
    borderColor: '#000', // Black border for the "Specifications" button
    borderWidth: 1,
    paddingHorizontal: 18,
    marginRight: 8, // Add margin to the right of the Specifications button
  },
  specButtonText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#000', // Text color should be black to match the border
  },
  detailsButton: {
    backgroundColor: '#ffffff', // White background for the "Details" button
    borderColor: '#cfcfcf', // Grey border for the "Details" button
    borderWidth: 1,
  },
  detailsButtonText: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#000', // Text color should match the border color
  },
  sectionTitle: {
    fontSize: 17,
    color: '#757575',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10, // Add padding between bullet and text
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  detailColumn: {
    flex: 1,
    paddingRight: 8, // Adds spacing between columns
  },
  fullWidthColumn: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 15,
    fontWeight: 'semibold',
    color: '#757575',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 15,
    color: '#000',
    marginBottom: 8,
  },
});

export default Graphene;