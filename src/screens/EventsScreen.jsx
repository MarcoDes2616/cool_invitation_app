import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EventsScreen = ({ navigation }) => {
  const handleCreateEvent = () => {
    // Aquí irá la navegación a la pantalla de crear evento
    console.log('Crear nuevo evento');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis Eventos</Text>
        <Text style={styles.subtitle}>
          Crea y gestiona tus invitaciones digitales
        </Text>
      </View>

      {/* Botón para crear nuevo evento */}
      <TouchableOpacity 
        style={styles.createButton}
        onPress={handleCreateEvent}
      >
        <View style={styles.buttonContent}>
          <Ionicons name="add-circle" size={28} color="#667eea" />
          <Text style={styles.createButtonText}>Crear Nuevo Evento</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="#8e8e93" />
      </TouchableOpacity>

      {/* Lista de eventos (placeholder por ahora) */}
      <View style={styles.eventsContainer}>
        <Text style={styles.sectionTitle}>Tus Eventos Recientes</Text>
        
        <View style={styles.emptyState}>
          <Ionicons name="calendar" size={60} color="#e5e5ea" />
          <Text style={styles.emptyText}>Aún no tienes eventos</Text>
          <Text style={styles.emptySubtext}>
            Crea tu primer evento para empezar
          </Text>
        </View>
      </View>

      {/* Acciones rápidas */}
      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
        
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionCard}>
            <Ionicons name="share-social" size={24} color="#667eea" />
            <Text style={styles.actionText}>Invitar Amigos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionCard}>
            <Ionicons name="stats-chart" size={24} color="#667eea" />
            <Text style={styles.actionText}>Estadísticas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '70%',
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5ea',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  subtitle: {
    fontSize: 16,
    color: '#8e8e93',
    marginTop: 5,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5ea',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#667eea',
    marginLeft: 10,
  },
  eventsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 15,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5ea',
  },
  emptyText: {
    fontSize: 18,
    color: '#8e8e93',
    marginTop: 15,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#c7c7cc',
    marginTop: 5,
  },
  quickActions: {
    marginTop: 30,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e5ea',
    marginHorizontal: 5,
  },
  actionText: {
    fontSize: 14,
    color: '#1a1a2e',
    marginTop: 10,
    fontWeight: '500',
  },
});

export default EventsScreen;