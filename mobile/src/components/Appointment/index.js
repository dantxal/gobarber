import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import en from 'date-fns/locale/en-US';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data, onCancel }) {
  const formattedURL = data.provider.avatar
    ? data.provider.avatar.url.replace(/localhost/, '10.0.2.2')
    : `https://api.adorable.io/avatars/206/${data.provider.name}@adorable.png`;

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: en,
      addSuffix: true,
    });
  }, [data.date]);
  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? formattedURL
              : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>
      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#F64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
