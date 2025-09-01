import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  Modal,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const PromotionScreen = ({ navigation }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Mock promotional data - Replace with your actual promotions
  const bannerPromotions = [
    {
      id: '1',
      title: 'MEGA SALE',
      subtitle: 'Up to 70% OFF',
      description: 'Biggest sale of the year on electronics & gadgets',
      image: 'https://via.placeholder.com/350x150/FF6B6B/FFFFFF?text=MEGA+SALE',
      color: '#FF6B6B',
      textColor: '#FFFFFF',
    },
    {
      id: '2',
      title: 'BULK ORDERS',
      subtitle: 'Special Discounts',
      description: 'Extra 15% off on orders above $1000',
      image: 'https://via.placeholder.com/350x150/4ECDC4/FFFFFF?text=BULK+ORDERS',
      color: '#4ECDC4',
      textColor: '#FFFFFF',
    },
    {
      id: '3',
      title: 'NEW ARRIVALS',
      subtitle: 'Fresh Stock',
      description: 'Latest products from top brands',
      image: 'https://via.placeholder.com/350x150/45B7D1/FFFFFF?text=NEW+ARRIVALS',
      color: '#45B7D1',
      textColor: '#FFFFFF',
    },
  ];

  const featuredOffers = [
    {
      id: '1',
      title: 'Electronics Bonanza',
      discount: '50% OFF',
      description: 'Mobile phones, laptops, and accessories',
      image: 'https://via.placeholder.com/150x100/6C5CE7/FFFFFF?text=Electronics',
      validTill: '2025-09-15',
      category: 'Electronics',
    },
    {
      id: '2',
      title: 'Home Appliances',
      discount: '40% OFF',
      description: 'Kitchen & home essentials',
      image: 'https://via.placeholder.com/150x100/00B894/FFFFFF?text=Home',
      validTill: '2025-09-20',
      category: 'Home',
    },
    {
      id: '3',
      title: 'Fashion Collection',
      discount: '60% OFF',
      description: 'Clothing, shoes, and accessories',
      image: 'https://via.placeholder.com/150x100/E17055/FFFFFF?text=Fashion',
      validTill: '2025-09-25',
      category: 'Fashion',
    },
    {
      id: '4',
      title: 'Sports & Fitness',
      discount: '35% OFF',
      description: 'Gym equipment and sports gear',
      image: 'https://via.placeholder.com/150x100/00CEC9/FFFFFF?text=Sports',
      validTill: '2025-09-30',
      category: 'Sports',
    },
  ];

  // Auto-scroll banner every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => 
        prevIndex === bannerPromotions.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const showOfferDetails = (offer) => {
    setSelectedOffer(offer);
    setShowOfferModal(true);
  };

  const proceedToApp = () => {
    // Navigate to the List tab
    navigation.navigate('ListFlow');
  };

  const renderBanner = () => (
    <View style={styles.bannerContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentBannerIndex(index);
        }}
      >
        {bannerPromotions.map((banner) => (
          <View key={banner.id} style={[styles.bannerSlide, { backgroundColor: banner.color }]}>
            <View style={styles.bannerContent}>
              <Text style={[styles.bannerTitle, { color: banner.textColor }]}>
                {banner.title}
              </Text>
              <Text style={[styles.bannerSubtitle, { color: banner.textColor }]}>
                {banner.subtitle}
              </Text>
              <Text style={[styles.bannerDescription, { color: banner.textColor }]}>
                {banner.description}
              </Text>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
            <Icon 
              name="sale" 
              size={80} 
              color={banner.textColor} 
              style={styles.bannerIcon} 
            />
          </View>
        ))}
      </ScrollView>
      
      {/* Banner Indicators */}
      <View style={styles.bannerIndicators}>
        {bannerPromotions.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentBannerIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.appName}>Wholesale Hub</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon name="fire" size={24} color="#FFD700" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main Banner */}
        {renderBanner()}

        {/* Featured Offers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="star" size={24} color="#FFD700" />
            <Text style={styles.sectionTitle}>Featured Offers</Text>
          </View>
          
          {/* Manual grid rendering to avoid VirtualizedList nesting */}
          <View style={styles.offersGrid}>
            {featuredOffers.map((item, index) => {
              if (index % 2 === 0) {
                const nextItem = featuredOffers[index + 1];
                return (
                  <View key={`row-${index}`} style={styles.offerRow}>
                    <TouchableOpacity
                      style={styles.offerCard}
                      onPress={() => showOfferDetails(item)}
                    >
                      <View style={styles.offerImageContainer}>
                        <Image source={{ uri: item.image }} style={styles.offerImage} />
                        <View style={styles.discountBadge}>
                          <Text style={styles.discountText}>{item.discount}</Text>
                        </View>
                      </View>
                      <View style={styles.offerInfo}>
                        <Text style={styles.offerTitle}>{item.title}</Text>
                        <Text style={styles.offerDescription} numberOfLines={2}>
                          {item.description}
                        </Text>
                        <Text style={styles.validTill}>Valid till: {item.validTill}</Text>
                      </View>
                    </TouchableOpacity>
                    
                    {nextItem && (
                      <TouchableOpacity
                        style={styles.offerCard}
                        onPress={() => showOfferDetails(nextItem)}
                      >
                        <View style={styles.offerImageContainer}>
                          <Image source={{ uri: nextItem.image }} style={styles.offerImage} />
                          <View style={styles.discountBadge}>
                            <Text style={styles.discountText}>{nextItem.discount}</Text>
                          </View>
                        </View>
                        <View style={styles.offerInfo}>
                          <Text style={styles.offerTitle}>{nextItem.title}</Text>
                          <Text style={styles.offerDescription} numberOfLines={2}>
                            {nextItem.description}
                          </Text>
                          <Text style={styles.validTill}>Valid till: {nextItem.validTill}</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              }
              return null;
            })}
          </View>
        </View>

        {/* Special Announcement */}
        <View style={styles.announcementCard}>
          <Icon name="bullhorn" size={30} color="#007bff" />
          <View style={styles.announcementContent}>
            <Text style={styles.announcementTitle}>🎉 Special Announcement</Text>
            <Text style={styles.announcementText}>
              Join our VIP program and get exclusive early access to all sales and new arrivals!
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={proceedToApp}
          >
            <Icon name="shopping" size={20} color="#fff" />
            <Text style={styles.primaryButtonText}>Start Shopping</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.secondaryButton}>
            <Icon name="bell-outline" size={20} color="#007bff" />
            <Text style={styles.secondaryButtonText}>Get Notifications</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Offer Details Modal */}
      <Modal
        visible={showOfferModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowOfferModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedOffer && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>{selectedOffer.title}</Text>
                  <TouchableOpacity onPress={() => setShowOfferModal(false)}>
                    <Icon name="close" size={24} color="#333" />
                  </TouchableOpacity>
                </View>
                
                <Image source={{ uri: selectedOffer.image }} style={styles.modalImage} />
                
                <View style={styles.modalBody}>
                  <View style={styles.modalDiscountBadge}>
                    <Text style={styles.modalDiscountText}>{selectedOffer.discount}</Text>
                  </View>
                  
                  <Text style={styles.modalDescription}>{selectedOffer.description}</Text>
                  
                  <View style={styles.modalDetails}>
                    <View style={styles.modalDetailItem}>
                      <Icon name="tag" size={16} color="#666" />
                      <Text style={styles.modalDetailText}>Category: {selectedOffer.category}</Text>
                    </View>
                    <View style={styles.modalDetailItem}>
                      <Icon name="calendar" size={16} color="#666" />
                      <Text style={styles.modalDetailText}>Valid till: {selectedOffer.validTill}</Text>
                    </View>
                  </View>
                  
                  <TouchableOpacity 
                    style={styles.modalButton}
                    onPress={() => {
                      setShowOfferModal(false);
                      proceedToApp();
                    }}
                  >
                    <Text style={styles.modalButtonText}>Shop This Category</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: Platform.OS === 'ios' ? 50 : 25,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    paddingRight: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: '#e6f2ff',
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerContainer: {
    height: 180,
    marginBottom: 20,
  },
  bannerSlide: {
    width: width,
    height: 180,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bannerSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  bannerDescription: {
    fontSize: 14,
    marginBottom: 15,
    opacity: 0.9,
  },
  bannerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  bannerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bannerIcon: {
    opacity: 0.3,
    marginLeft: 20,
  },
  bannerIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    width: '100%',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#fff',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  offersGrid: {
    paddingHorizontal: 0,
  },
  offerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  offerCard: {
    width: (width - 50) / 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  offerImageContainer: {
    position: 'relative',
  },
  offerImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  offerInfo: {
    padding: 12,
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  offerDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  validTill: {
    fontSize: 11,
    color: '#999',
  },
  announcementCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  announcementContent: {
    flex: 1,
    marginLeft: 15,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  announcementText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  actionButtons: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  secondaryButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: width * 0.9,
    maxHeight: height * 0.8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  modalImage: {
    width: '100%',
    height: 150,
  },
  modalBody: {
    padding: 20,
  },
  modalDiscountBadge: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  modalDiscountText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
  },
  modalDetails: {
    marginBottom: 20,
  },
  modalDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalDetailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  modalButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PromotionScreen;
