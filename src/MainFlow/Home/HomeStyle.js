import {View} from 'react-native';
import styled from 'styled-components/native';
import {Colors, Responsive, Fonts} from '../../Theme';

export const ContainerView = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.white};
`;
export const MainHeaderView = styled.View`
flex-direction: row;
`
export const LogoutView = styled.View`
flex: 1;
padding-right: 20px;
align-items: flex-end;
`

export const LogoutTouchableOpacity = styled.TouchableOpacity`
/* align-self: flex-end; */
background: #000;
height: 50px;
width: 50px;
`