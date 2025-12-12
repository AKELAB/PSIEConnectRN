import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Info, Briefcase, TrendingUp, Bell } from 'lucide-react-native';
import { useStore } from '../../store/useStore';

export const DashboardScreen: React.FC = () => {
  const { user, localJobs } = useStore();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Bonjour,</Text>
          <Text style={styles.userName}>{user?.name || 'Utilisateur'}</Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Bell color="#005B96" size={24} />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      {/* Mission PSIE Card */}
      <View style={styles.missionCard}>
        <View style={styles.missionHeader}>
          <Info color="#FCD116" size={24} />
          <Text style={styles.missionTitle}>Mission PSIE</Text>
        </View>
        <Text style={styles.missionText}>
          Promouvoir l'insertion socio-professionnelle des jeunes diplômés au Bénin.
        </Text>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, styles.statCardBlue]}>
          <Briefcase color="#005B96" size={20} />
          <Text style={styles.statNumber}>{localJobs.length}</Text>
          <Text style={styles.statLabel}>Offres</Text>
        </View>
        <View style={[styles.statCard, styles.statCardGreen]}>
          <TrendingUp color="#008751" size={20} />
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Matchs</Text>
        </View>
      </View>

      {/* News Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actualités</Text>
        <View style={styles.newsCard}>
          <View style={styles.newsBadge}>
            <Text style={styles.newsBadgeText}>Nouveau</Text>
          </View>
          <Text style={styles.newsTitle}>
            Lancement du programme de formation digitale PSIE 2025
          </Text>
          <Text style={styles.newsDate}>Il y a 2 heures</Text>
        </View>
        <View style={styles.newsCard}>
          <Text style={styles.newsTitle}>
            Salon de l'emploi à Cotonou - 15 Décembre
          </Text>
          <Text style={styles.newsDate}>Hier</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actions rapides</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Briefcase color="#FFFFFF" size={20} />
          <Text style={styles.actionButtonText}>Voir les offres</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#FFFFFF',
  },
  greeting: {
    fontSize: 14,
    color: '#6B7280',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  notificationButton: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    backgroundColor: '#DC2626',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  missionCard: {
    margin: 16,
    padding: 16,
    backgroundColor: '#005B96',
    borderRadius: 16,
  },
  missionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  missionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FCD116',
  },
  missionText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  statCardBlue: {
    backgroundColor: '#E6F4FA',
  },
  statCardGreen: {
    backgroundColor: '#E6F7F0',
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
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  newsCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    position: 'relative',
  },
  newsBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FCD116',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  newsBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
    paddingRight: 60,
  },
  newsDate: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#005B96',
    padding: 16,
    borderRadius: 12,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
