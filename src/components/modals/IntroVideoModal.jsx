// src/components/modals/IntroVideoModal.jsx
import { useState, useRef, useEffect } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { Video, ResizeMode } from 'expo-audio';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const IntroVideoModal = ({ visible, onClose }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Resetear estado cuando se cierra/reabre
  useEffect(() => {
    if (visible) {
      setIsPlaying(true);
      setHasError(false);
    }
  }, [visible]);

  // Reproducir automáticamente cuando es visible
  useEffect(() => {
    if (visible && videoRef.current) {
      playVideo();
    }
  }, [visible]);

  const playVideo = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Error al reproducir video:', error);
      setHasError(true);
    }
  };

  const pauseVideo = async () => {
    try {
      if (videoRef.current && isPlaying) {
        await videoRef.current.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log('Error al pausar video:', error);
    }
  };

  const replayVideo = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.replayAsync();
        setIsPlaying(true);
        setHasError(false);
      }
    } catch (error) {
      console.log('Error al reiniciar video:', error);
    }
  };

  const handleClose = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.pauseAsync();
      }
    } catch (error) {
      console.log('Error al pausar video al cerrar:', error);
    }
    onClose();
  };

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setIsPlaying(false);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Botón de cerrar */}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Ionicons name="close-circle" size={32} color="#FFFFFF" />
          </TouchableOpacity>

          {/* Contenedor del video */}
          <View style={styles.videoContainer}>
            <Video
              ref={videoRef}
              source={require('../../../assets/intro.mp4')}
              style={styles.video}
            //   resizeMode={ResizeMode.CONTAIN}
              shouldPlay={isPlaying}
              isLooping={false}
              onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
              onError={() => setHasError(true)}
            />

            {/* Controles personalizados */}
            <View style={styles.controlsContainer}>
              {hasError ? (
                <TouchableOpacity style={styles.replayButton} onPress={replayVideo}>
                  <Ionicons name="reload-circle" size={48} color="#FFFFFF" />
                </TouchableOpacity>
              ) : (
                <>
                  {!isPlaying && (
                    <TouchableOpacity style={styles.playButton} onPress={playVideo}>
                      <Ionicons name="play-circle" size={48} color="#FFFFFF" />
                    </TouchableOpacity>
                  )}
                  {isPlaying && (
                    <TouchableOpacity style={styles.playButton} onPress={pauseVideo}>
                      <Ionicons name="pause-circle" size={48} color="#FFFFFF" />
                    </TouchableOpacity>
                  )}
                </>
              )}
            </View>
          </View>

          {/* Mensaje de error */}
          {hasError && (
            <View style={styles.errorContainer}>
              <Ionicons name="warning" size={24} color="#FF6B6B" />
              <Text style={styles.errorText}>
                No se pudo cargar el video. Intenta nuevamente.
              </Text>
            </View>
          )}

          {/* Texto descriptivo */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.title}>¡Bienvenido a Cool Invitation! 🎉</Text>
            <Text style={styles.description}>
              Crea invitaciones digitales increíbles para tus eventos
            </Text>
            <Text style={styles.steps}>
              1. Registra tu evento{"\n"}
              2. Diseñamos tu invitación{"\n"}
              3. Invita a tus contactos{"\n"}
              4. ¡Celebra con estilo!
            </Text>
          </View>

          {/* Botón para saltar */}
          <TouchableOpacity style={styles.skipButton} onPress={handleClose}>
            <Text style={styles.skipButtonText}>Saltar introducción</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

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
    height: height * 0.35,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 24,
    padding: 5,
  },
  replayButton: {
    backgroundColor: 'rgba(255, 107, 107, 0.7)',
    borderRadius: 24,
    padding: 5,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  errorText: {
    color: '#FF6B6B',
    marginLeft: 10,
    fontSize: 14,
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
  steps: {
    color: '#4ECDC4',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
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