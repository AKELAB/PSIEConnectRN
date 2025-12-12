import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Send, Bot, User } from 'lucide-react-native';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const CoachScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis votre coach carrière IA. Comment puis-je vous aider aujourd\'hui ?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Je traite votre demande...',
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.botIcon}>
            <Bot color="#FFFFFF" size={24} />
          </View>
          <View>
            <Text style={styles.title}>Coach IA</Text>
            <Text style={styles.subtitle}>Toujours disponible pour vous aider</Text>
          </View>
        </View>
      </View>

      {/* Messages */}
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Posez votre question..."
          value={inputText}
          onChangeText={setInputText}
          placeholderTextColor="#9CA3AF"
          multiline
        />
        <TouchableOpacity
          style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
          onPress={handleSend}
          disabled={!inputText.trim()}
        >
          <Send color="#FFFFFF" size={20} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  return (
    <View
      style={[
        styles.messageBubble,
        message.isBot ? styles.botBubble : styles.userBubble,
      ]}
    >
      <View style={styles.messageHeader}>
        {message.isBot ? (
          <Bot color="#005B96" size={16} />
        ) : (
          <User color="#FFFFFF" size={16} />
        )}
        <Text
          style={[
            styles.messageText,
            message.isBot ? styles.botText : styles.userText,
          ]}
        >
          {message.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  botIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#005B96',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#E6F4FA',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#005B96',
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  messageText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  botText: {
    color: '#1A1A1A',
  },
  userText: {
    color: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1A1A1A',
    maxHeight: 100,
  },
  sendButton: {
    width: 48,
    height: 48,
    backgroundColor: '#005B96',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});
