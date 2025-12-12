import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { User, Mail, Phone, MapPin, Briefcase, Award, Settings } from 'lucide-react-native';
import { useStore } from '../../store/useStore';

export const ProfileScreen: React.FC = () => {
  const { user } = useStore();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Chargement...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <User color="#FFFFFF" size={48} />
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.title}>{user.title}</Text>
      </View>

      {/* Bio */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>À propos</Text>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Briefcase color="#005B96" size={20} />
          <Text style={styles.statNumber}>{user.experienceYears}</Text>
          <Text style={styles.statLabel}>Années d'exp.</Text>
        </View>
        <View style={styles.statCard}>
          <Award color="#008751" size={20} />
          <Text style={styles.statNumber}>{user.skills.length}</Text>
          <Text style={styles.statLabel}>Compétences</Text>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compétences</Text>
        <View style={styles.skillsContainer}>
          {user.skills.slice(0, 6).map((skill, index) => (
            <View key={index} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill.name}</Text>
              <View style={styles.skillLevel}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.skillDot,
                      i < skill.level && styles.skillDotActive,
                    ]}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formation</Text>
        {user.education.slice(0, 2).map((edu, index) => (
          <View key={index} style={styles.eduCard}>
            <Text style={styles.eduDegree}>{edu.degree}</Text>
            <Text style={styles.eduInstitution}>{edu.institution}</Text>
            <Text style={styles.eduYear}>{edu.year}</Text>
          </View>
        ))}
      </View>

      {/* Actions */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.actionButton}>
          <Settings color="#005B96" size={20} />
          <Text style={styles.actionButtonText}>Modifier le profil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    padding: 24,
    paddingTop: 48,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  avatarContainer: {
    width: 96,
    height: 96,
    backgroundColor: '#005B96',
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  title: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  skillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  skillLevel: {
    flexDirection: 'row',
    gap: 3,
  },
  skillDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E5E7EB',
  },
  skillDotActive: {
    backgroundColor: '#005B96',
  },
  eduCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  eduDegree: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  eduInstitution: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  eduYear: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#E6F4FA',
    padding: 16,
    borderRadius: 12,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#005B96',
  },
});
