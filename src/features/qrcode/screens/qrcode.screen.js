import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import styled from 'styled-components/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const QrCodeContainer = styled(View)`
  padding: ${(props) => props.theme.space[2]};
  width: 100%;
`;

const ButtonQr = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
`;

export const QrCodeScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaContainer>
      <QrCodeContainer>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <ButtonQr
            title={'Tap to Scan Again'}
            onPress={() => setScanned(false)}
          />
        )}
      </QrCodeContainer>
    </SafeAreaContainer>
  );
};
