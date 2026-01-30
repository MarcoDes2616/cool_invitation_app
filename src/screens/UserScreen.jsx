import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserScreen = ({ navigation }) => {
  // Datos de ejemplo del usuario
  const userData = {
    name: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    eventsCreated: 0,
    plan: 'Gratuito',
    avatar: null, // URL de la imagen o null
  };

  const menuItems = [
    { icon: 'settings', label: 'Configuración', screen: 'Settings' },
    { icon: 'notifications', label: 'Notificaciones', screen: 'Notifications' },
    { icon: 'card', label: 'Suscripción', screen: 'Subscription' },
    { icon: 'help-circle', label: 'Ayuda', screen: 'Help' },
    { icon: 'information-circle', label: 'Acerca de', screen: 'About' },
    { icon: 'log-out', label: 'Cerrar Sesión', screen: 'Logout' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header del perfil */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          {userData.avatar ? (
            <Image 
              source={{ uri: userData.avatar }} 
              style={styles.avatar} 
            />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={50} color="#ffffff" />
            </View>
          )}
          <TouchableOpacity style={styles.editAvatarButton}>
            <Ionicons name="camera" size={18} color="#667eea" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.userName}>{userData.name}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userData.eventsCreated}</Text>
            <Text style={styles.statLabel}>Eventos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userData.plan}</Text>
            <Text style={styles.statLabel}>Plan</Text>
          </View>
        </View>
      </View>

      {/* Menú de opciones */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.menuItem}
            onPress={() => console.log(`Navegar a: ${item.screen}`)}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons 
                name={item.icon} 
                size={24} 
                color="#667eea" 
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Información de la app */}
      <View style={styles.appInfo}>
        <Text style={styles.appName}>Cool Invitation</Text>
        <Text style={styles.appVersion}>Versión 1.0.0</Text>
        <Text style={styles.appCopyright}>© 2024 Todos los derechos reservados</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5ea',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#667eea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#ffffff',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#667eea',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: '#8e8e93',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#667eea',
  },
  statLabel: {
    fontSize: 14,
    color: '#8e8e93',
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#e5e5ea',
  },
  menuContainer: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e5e5ea',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5ea',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuLabel: {
    fontSize: 16,
    color: '#1a1a2e',
  },
  appInfo: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#667eea',
  },
  appVersion: {
    fontSize: 14,
    color: '#8e8e93',
    marginTop: 5,
  },
  appCopyright: {
    fontSize: 12,
    color: '#c7c7cc',
    marginTop: 10,
  },
});

export default UserScreen;