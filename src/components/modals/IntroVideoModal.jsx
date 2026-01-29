// src/components/modals/IntroVideoModal.jsx
import React, { useEffect } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Text
} from 'react-native';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const IntroVideoModal = ({ visible, onClose }) => {

  // 2. Crear y configurar el reproductor de video
  // El archivo local se pasa con require()
  const player = useVideoPlayer(require('../../../assets/intro.mp4'), (player) => {
    // Configuración inicial: no loop y reproducir automáticamente cuando el modal sea visible
    player.loop = true;
    if (visible) {
      player.play();
    }
  });

  // 3. Escuchar el estado de reproducción
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player?.playing });

  // 4. Efecto para pausar/reproducir según la visibilidad del modal
  useEffect(() => {
    if (!visible && player) {
      player.pause();
      // Opcional: rebobinar al inicio cuando se cierra
      // player.seekTo(0);
    }
    // Reproducir automáticamente cuando el modal se abre
    if (visible && player && !player.playing) {
      player.play();
    }
  }, [visible, player]);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Botón de cerrar */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close-circle" size={32} color="#FFFFFF" />
          </TouchableOpacity>

          {/* Contenedor del video con VideoView */}
          <View style={styles.videoContainer}>
            <VideoView
              style={styles.video}
              player={player}
              allowsFullscreen={false} // Puedes activarlo si lo deseas
              allowsPictureInPicture={false}
              nativeControls={true} // Usamos nuestros controles personalizados
            />
          </View>

          {/* Texto descriptivo (opcional, mantenido de tu versión) */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>¡Bienvenido a Cool Invitation! 🎉</Text>
            <Text style={styles.description}>
              Crea invitaciones digitales increíbles para tus eventos
            </Text>
          </View>

          {/* Botón para saltar/empezar */}
          <TouchableOpacity style={styles.skipButton} onPress={onClose}>
            <Text style={styles.skipButtonText}>Comenzar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

// Tus estilos pueden permanecer prácticamente iguales
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.9,
    maxWidth: 400,
    backgroundColor: '#1a1a2e',
    borderRadius: 20,
    overflow: 'hidden',
    padding: 20,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    padding: 5,
  },
  videoContainer: {
    width: '100%',
    height: height * 0.65,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '110%',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 24,
    padding: 5,
  },
  controlButton: {
    marginHorizontal: 10,
  },
  descriptionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#CCCCCC',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  skipButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default IntroVideoModal;