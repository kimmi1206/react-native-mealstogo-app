import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-paper';
import { Camera, CameraType } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import styled from 'styled-components/native';
// import { useFocusEffect } from '@react-navigation/native';

const CameraContainer = styled(Camera)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled(View)`
  flex-direction: row;
  position: absolute;
  bottom: 1%;
  align-self: center;
`;

const ButtonCamera = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[2]};
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef();
  const [photo, setPhoto] = useState(
    'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400'
  );

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (cameraRef) {
      console.log(photo);

      const snapPic = await cameraRef.current.takePictureAsync();
      setPhoto(snapPic.uri);

      console.log(snapPic, photo);
    }
  };

  return (
    <SafeAreaContainer>
      <CameraContainer
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
      >
        <ButtonContainer>
          <ButtonCamera
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Ionicons name="camera-reverse" size={64} color="lightgray" />
          </ButtonCamera>
          <ButtonCamera onPress={snap}>
            <Ionicons name="image" size={64} color="lightgray" />
          </ButtonCamera>
        </ButtonContainer>
      </CameraContainer>
    </SafeAreaContainer>
  );
};
