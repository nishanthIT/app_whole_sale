


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Switch, Alert, Platform } from 'react-native';

const AccountScreen = ({ navigation }) => {
  const [isNotificationEnabled, setIsNotificationEnabled] = React.useState(false);

  const toggleSwitch = () => {
    setIsNotificationEnabled((previousState) => !previousState);
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            // Clear any stored user data here (AsyncStorage, etc.)
            // For now, navigate back to login flow
            navigation.navigate('loginFlow');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with user's profile picture
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>johndoe@example.com</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Subscription Section */}
      <View style={styles.subscriptionContainer}>
        <Text style={styles.subscriptionTitle}>Subscription</Text>
        <View style={styles.subscriptionDetails}>
          <Text style={styles.subscriptionType}>Premium Plan</Text>
          <Text style={styles.subscriptionPrice}>$19.99/month</Text>
          <Text style={styles.subscriptionValidity}>Valid till: 31 Dec 2025</Text>
        </View>
        <TouchableOpacity style={styles.manageSubscriptionButton}>
          <Text style={styles.manageSubscriptionText}>Manage Subscription</Text>
        </TouchableOpacity>
      </View>

      {/* Invite Friends Section */}
      <View style={styles.inviteFriendsContainer}>
        <Text style={styles.sectionTitle}>Invite Friends</Text>
        <Text style={styles.inviteFriendsText}>
          Invite your friends and earn rewards!
        </Text>
        <TouchableOpacity style={styles.inviteButton}>
          <Text style={styles.inviteButtonText}>Invite Now</Text>
        </TouchableOpacity>
      </View>

      {/* Earn by Updating Price Section */}
      <View style={styles.earnSectionContainer}>
        <Text style={styles.sectionTitle}>Earn by Updating Price</Text>
        <Text style={styles.earnSectionText}>
          Update your correct Product price and earn rewards.
        </Text>
        <TouchableOpacity style={styles.earnButton}>
          <Text style={styles.earnButtonText}>Update Price</Text>
        </TouchableOpacity>
      </View>

      {/* Default Options */}
      <View style={styles.optionsContainer}>
        <Text style={styles.sectionTitle}>Options</Text>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Privacy Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Language Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>

      {/* Settings */}
      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            trackColor={{ false: '#ccc', true: '#007bff' }}
            thumbColor={isNotificationEnabled ? '#fff' : '#fff'}
            onValueChange={toggleSwitch}
            value={isNotificationEnabled}
          />
        </View>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: '#ccc', true: '#007bff' }}
            thumbColor={'#fff'}
          />
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      
      {/* Extra spacing for bottom navigation */}
      <View style={{ height: Platform.OS === 'android' ? 100 : 95 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  profileContainer: {
    backgroundColor: '#007bff',
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 15,
    marginTop: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileEmail: {
    fontSize: 14,
    color: '#f8f9fa',
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 15,  // Added margin-bottom for spacing
  },
  editProfileText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  subscriptionContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  subscriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  subscriptionDetails: {
    marginBottom: 15,
  },
  subscriptionType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
  subscriptionPrice: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  subscriptionValidity: {
    fontSize: 14,
    color: '#666',
  },
  manageSubscriptionButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  manageSubscriptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inviteFriendsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  inviteFriendsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  inviteButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  inviteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  earnSectionContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  earnSectionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  earnButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  earnButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  optionsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  optionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  settingsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AccountScreen;
