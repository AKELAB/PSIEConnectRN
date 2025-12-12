import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Search, Sparkles, MapPin, Briefcase } from 'lucide-react-native';
import { useStore } from '../../store/useStore';
import type { Job } from '../../types';

export const JobsScreen: React.FC = () => {
  const { localJobs, setLocalJobs } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const filteredJobs = React.useMemo(() => {
    if (!searchTerm.trim()) return localJobs;

    const term = searchTerm.toLowerCase();
    return localJobs.filter(job =>
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term)
    );
  }, [localJobs, searchTerm]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Offres d'emploi</Text>
        <Text style={styles.subtitle}>{filteredJobs.length} opportunité(s)</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search color="#9CA3AF" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher..."
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholderTextColor="#9CA3AF"
          />
        </View>
        <TouchableOpacity style={styles.smartMatchButton}>
          <Sparkles color="#FCD116" size={20} />
        </TouchableOpacity>
      </View>

      {/* Jobs List */}
      <ScrollView style={styles.jobsList}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#005B96" />
            <Text style={styles.loadingText}>Chargement...</Text>
          </View>
        ) : filteredJobs.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Aucune offre trouvée</Text>
          </View>
        ) : (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <TouchableOpacity style={styles.jobCard}>
      <View style={styles.jobHeader}>
        <Text style={styles.jobTitle}>{job.title}</Text>
        <View style={styles.jobBadge}>
          <Text style={styles.jobBadgeText}>{job.type}</Text>
        </View>
      </View>
      <Text style={styles.jobCompany}>{job.company}</Text>
      <View style={styles.jobFooter}>
        <View style={styles.jobLocation}>
          <MapPin color="#6B7280" size={14} />
          <Text style={styles.jobLocationText}>{job.location}</Text>
        </View>
        <Text style={styles.jobDate}>{job.postedAt}</Text>
      </View>
      <Text style={styles.jobDescription} numberOfLines={2}>
        {job.description}
      </Text>
    </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: '#1A1A1A',
  },
  smartMatchButton: {
    width: 48,
    height: 48,
    backgroundColor: '#005B96',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobsList: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#6B7280',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  jobTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginRight: 8,
  },
  jobBadge: {
    backgroundColor: '#E6F4FA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  jobBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#005B96',
  },
  jobCompany: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  jobFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  jobLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  jobLocationText: {
    fontSize: 12,
    color: '#6B7280',
  },
  jobDate: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  jobDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});
