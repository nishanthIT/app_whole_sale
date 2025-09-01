import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatScreen = () => {
  const [activeTab, setActiveTab] = useState('group'); // 'group' or 'personal'
  const [message, setMessage] = useState('');
  const [groupMessages, setGroupMessages] = useState([]);
  const [personalChats, setPersonalChats] = useState([]);
  const [selectedPersonalChat, setSelectedPersonalChat] = useState(null);
  const [personalMessages, setPersonalMessages] = useState({});
  const [showUserList, setShowUserList] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const flatListRef = useRef(null);

  // Mock data - Replace with actual API calls
  useEffect(() => {
    // Initialize mock data
    initializeMockData();
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        addRandomMessage();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const initializeMockData = () => {
    // Mock group messages
    const mockGroupMessages = [
      {
        id: '1',
        sender: 'John Doe',
        senderId: '101',
        message: 'Hey everyone! Great to see the new wholesale prices updated.',
        timestamp: new Date(Date.now() - 3600000),
        avatar: 'https://via.placeholder.com/40',
        isOwn: false,
      },
      {
        id: '2',
        sender: 'You',
        senderId: 'currentUser',
        message: 'Yes, the new pricing structure looks much better!',
        timestamp: new Date(Date.now() - 3000000),
        avatar: 'https://via.placeholder.com/40',
        isOwn: true,
      },
      {
        id: '3',
        sender: 'Sarah Wilson',
        senderId: '102',
        message: 'Can someone help me understand the bulk discount rates?',
        timestamp: new Date(Date.now() - 1800000),
        avatar: 'https://via.placeholder.com/40',
        isOwn: false,
      },
    ];

    // Mock online users
    const mockUsers = [
      { id: '101', name: 'John Doe', avatar: 'https://via.placeholder.com/40', status: 'online', lastSeen: null },
      { id: '102', name: 'Sarah Wilson', avatar: 'https://via.placeholder.com/40', status: 'online', lastSeen: null },
      { id: '103', name: 'Mike Johnson', avatar: 'https://via.placeholder.com/40', status: 'offline', lastSeen: new Date(Date.now() - 900000) },
      { id: '104', name: 'Emily Davis', avatar: 'https://via.placeholder.com/40', status: 'online', lastSeen: null },
      { id: '105', name: 'Robert Brown', avatar: 'https://via.placeholder.com/40', status: 'offline', lastSeen: new Date(Date.now() - 1800000) },
    ];

    // Mock personal chats
    const mockPersonalChats = [
      {
        id: '101',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40',
        lastMessage: 'Thanks for the pricing info!',
        lastMessageTime: new Date(Date.now() - 1200000),
        unreadCount: 2,
        status: 'online',
      },
      {
        id: '102',
        name: 'Sarah Wilson',
        avatar: 'https://via.placeholder.com/40',
        lastMessage: 'Could you send me the catalog?',
        lastMessageTime: new Date(Date.now() - 2400000),
        unreadCount: 0,
        status: 'online',
      },
    ];

    // Mock personal messages
    const mockPersonalMessages = {
      '101': [
        {
          id: '1',
          sender: 'John Doe',
          senderId: '101',
          message: 'Hi! Do you have the latest price list for electronics?',
          timestamp: new Date(Date.now() - 3600000),
          isOwn: false,
        },
        {
          id: '2',
          sender: 'You',
          senderId: 'currentUser',
          message: 'Yes, I can share it with you. Let me send it over.',
          timestamp: new Date(Date.now() - 3000000),
          isOwn: true,
        },
        {
          id: '3',
          sender: 'John Doe',
          senderId: '101',
          message: 'Thanks for the pricing info!',
          timestamp: new Date(Date.now() - 1200000),
          isOwn: false,
        },
      ],
      '102': [
        {
          id: '1',
          sender: 'Sarah Wilson',
          senderId: '102',
          message: 'Hello! I need some help with bulk orders.',
          timestamp: new Date(Date.now() - 4800000),
          isOwn: false,
        },
        {
          id: '2',
          sender: 'Sarah Wilson',
          senderId: '102',
          message: 'Could you send me the catalog?',
          timestamp: new Date(Date.now() - 2400000),
          isOwn: false,
        },
      ],
    };

    setGroupMessages(mockGroupMessages);
    setOnlineUsers(mockUsers);
    setPersonalChats(mockPersonalChats);
    setPersonalMessages(mockPersonalMessages);
  };

  const addRandomMessage = () => {
    const randomUsers = ['John Doe', 'Sarah Wilson', 'Mike Johnson', 'Emily Davis'];
    const randomMessages = [
      'New products added to inventory!',
      'Special discount available this week.',
      'Delivery schedules updated.',
      'Quality check completed.',
    ];

    if (activeTab === 'group') {
      const newMessage = {
        id: Date.now().toString(),
        sender: randomUsers[Math.floor(Math.random() * randomUsers.length)],
        senderId: Math.floor(Math.random() * 1000).toString(),
        message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
        timestamp: new Date(),
        avatar: 'https://via.placeholder.com/40',
        isOwn: false,
      };
      setGroupMessages(prev => [...prev, newMessage]);
    }
  };

  const sendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      id: Date.now().toString(),
      sender: 'You',
      senderId: 'currentUser',
      message: message.trim(),
      timestamp: new Date(),
      avatar: 'https://via.placeholder.com/40',
      isOwn: true,
    };

    if (activeTab === 'group') {
      setGroupMessages(prev => [...prev, newMessage]);
    } else if (selectedPersonalChat) {
      setPersonalMessages(prev => ({
        ...prev,
        [selectedPersonalChat]: [...(prev[selectedPersonalChat] || []), newMessage],
      }));

      // Update last message in personal chats
      setPersonalChats(prev =>
        prev.map(chat =>
          chat.id === selectedPersonalChat
            ? { ...chat, lastMessage: message.trim(), lastMessageTime: new Date() }
            : chat
        )
      );
    }

    setMessage('');
    
    // Auto scroll to bottom
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const startPersonalChat = (userId) => {
    const existingChat = personalChats.find(chat => chat.id === userId);
    
    if (!existingChat) {
      const user = onlineUsers.find(u => u.id === userId);
      if (user) {
        const newChat = {
          id: userId,
          name: user.name,
          avatar: user.avatar,
          lastMessage: '',
          lastMessageTime: new Date(),
          unreadCount: 0,
          status: user.status,
        };
        setPersonalChats(prev => [...prev, newChat]);
        setPersonalMessages(prev => ({ ...prev, [userId]: [] }));
      }
    }
    
    setSelectedPersonalChat(userId);
    setShowUserList(false);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatLastSeen = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const renderGroupMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.isOwn && styles.ownMessageContainer]}>
      {!item.isOwn && (
        <Image source={{ uri: item.avatar }} style={styles.messageAvatar} />
      )}
      <View style={[styles.messageBubble, item.isOwn ? styles.ownMessageBubble : styles.otherMessageBubble]}>
        {!item.isOwn && <Text style={styles.senderName}>{item.sender}</Text>}
        <Text style={[styles.messageText, item.isOwn && styles.ownMessageText]}>
          {item.message}
        </Text>
        <Text style={[styles.messageTime, item.isOwn && styles.ownMessageTime]}>
          {formatTime(item.timestamp)}
        </Text>
      </View>
      {item.isOwn && (
        <Image source={{ uri: item.avatar }} style={styles.messageAvatar} />
      )}
    </View>
  );

  const renderPersonalMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.isOwn && styles.ownMessageContainer]}>
      {!item.isOwn && (
        <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.messageAvatar} />
      )}
      <View style={[styles.messageBubble, item.isOwn ? styles.ownMessageBubble : styles.otherMessageBubble]}>
        <Text style={[styles.messageText, item.isOwn && styles.ownMessageText]}>
          {item.message}
        </Text>
        <Text style={[styles.messageTime, item.isOwn && styles.ownMessageTime]}>
          {formatTime(item.timestamp)}
        </Text>
      </View>
      {item.isOwn && (
        <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.messageAvatar} />
      )}
    </View>
  );

  const renderPersonalChatItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.chatItem, selectedPersonalChat === item.id && styles.selectedChatItem]}
      onPress={() => setSelectedPersonalChat(item.id)}
    >
      <View style={styles.chatItemLeft}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: item.avatar }} style={styles.chatAvatar} />
          {item.status === 'online' && <View style={styles.onlineIndicator} />}
        </View>
        <View style={styles.chatInfo}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage || 'Start a conversation...'}
          </Text>
        </View>
      </View>
      <View style={styles.chatItemRight}>
        <Text style={styles.lastMessageTime}>
          {item.lastMessageTime ? formatTime(item.lastMessageTime) : ''}
        </Text>
        {item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadCount}>{item.unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderUserListItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userListItem}
      onPress={() => startPersonalChat(item.id)}
    >
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
        {item.status === 'online' && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userStatus}>
          {item.status === 'online' ? 'Online' : `Last seen ${formatLastSeen(item.lastSeen)}`}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const currentMessages = activeTab === 'group' 
    ? groupMessages 
    : selectedPersonalChat 
      ? personalMessages[selectedPersonalChat] || []
      : [];

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>
            {activeTab === 'group' ? 'Group Chat' : selectedPersonalChat ? 
              personalChats.find(chat => chat.id === selectedPersonalChat)?.name || 'Personal Chat'
              : 'Messages'}
          </Text>
          {activeTab === 'group' && (
            <Text style={styles.onlineCount}>
              {onlineUsers.filter(u => u.status === 'online').length} online
            </Text>
          )}
        </View>
        <View style={styles.headerRight}>
          {activeTab === 'personal' && !selectedPersonalChat && (
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => setShowUserList(true)}
            >
              <Icon name="account-plus" size={24} color="#007bff" />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => Alert.alert('Info', 'Chat settings and more options coming soon!')}
          >
            <Icon name="dots-vertical" size={24} color="#007bff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'group' && styles.activeTab]}
          onPress={() => {
            setActiveTab('group');
            setSelectedPersonalChat(null);
          }}
        >
          <Icon 
            name="account-group" 
            size={20} 
            color={activeTab === 'group' ? '#007bff' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'group' && styles.activeTabText]}>
            Group Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'personal' && styles.activeTab]}
          onPress={() => setActiveTab('personal')}
        >
          <Icon 
            name="message-text" 
            size={20} 
            color={activeTab === 'personal' ? '#007bff' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'personal' && styles.activeTabText]}>
            Personal
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Area */}
      <View style={styles.contentContainer}>
        {activeTab === 'personal' && !selectedPersonalChat ? (
          // Personal chat list
          <View style={styles.chatListContainer}>
            <FlatList
              data={personalChats}
              renderItem={renderPersonalChatItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Icon name="message-outline" size={60} color="#ccc" />
                  <Text style={styles.emptyText}>No conversations yet</Text>
                  <Text style={styles.emptySubText}>Start a new conversation by tapping the + button</Text>
                </View>
              }
            />
          </View>
        ) : (
          // Chat messages
          <FlatList
            ref={flatListRef}
            data={currentMessages}
            renderItem={activeTab === 'group' ? renderGroupMessage : renderPersonalMessage}
            keyExtractor={(item) => item.id}
            style={styles.messagesList}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Icon 
                  name={activeTab === 'group' ? 'account-group' : 'message-text'} 
                  size={60} 
                  color="#ccc" 
                />
                <Text style={styles.emptyText}>
                  {activeTab === 'group' ? 'No messages yet' : 'Start the conversation'}
                </Text>
                <Text style={styles.emptySubText}>
                  {activeTab === 'group' 
                    ? 'Be the first to send a message to the group' 
                    : 'Send a message to get started'}
                </Text>
              </View>
            }
          />
        )}
      </View>

      {/* Message Input */}
      {(activeTab === 'group' || selectedPersonalChat) && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
            placeholderTextColor="#999"
            multiline
            maxLength={500}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Icon name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}

      {/* User List Modal */}
      <Modal
        visible={showUserList}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowUserList(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Start New Chat</Text>
              <TouchableOpacity onPress={() => setShowUserList(false)}>
                <Icon name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={onlineUsers}
              renderItem={renderUserListItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              style={styles.userList}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  onlineCount: {
    fontSize: 12,
    color: '#e6f2ff',
    marginTop: 2,
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerButton: {
    marginLeft: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#e6f2ff',
  },
  tabText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: '#007bff',
  },
  contentContainer: {
    flex: 1,
  },
  chatListContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedChatItem: {
    backgroundColor: '#e6f2ff',
  },
  chatItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    position: 'relative',
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  chatInfo: {
    marginLeft: 15,
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
  chatItemRight: {
    alignItems: 'flex-end',
  },
  lastMessageTime: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  unreadBadge: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  messagesList: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  ownMessageContainer: {
    justifyContent: 'flex-end',
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 8,
  },
  messageBubble: {
    maxWidth: '70%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  ownMessageBubble: {
    backgroundColor: '#007bff',
    borderBottomRightRadius: 5,
  },
  otherMessageBubble: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  senderName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 20,
  },
  ownMessageText: {
    color: '#fff',
  },
  messageTime: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  ownMessageTime: {
    color: '#e6f2ff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    maxHeight: 100,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#999',
    marginTop: 15,
  },
  emptySubText: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userList: {
    paddingHorizontal: 20,
  },
  userListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userStatus: {
    fontSize: 14,
    color: '#666',
  },
});

export default ChatScreen;
