import {View} from 'react-native';
import styled from 'styled-components/native';
import {Colors, Responsive, Fonts,Images} from '../../Theme';

export const ContainerView = styled.SafeAreaView`
  flex: 0.9;
  padding: 20px;

  background-color: ${Colors.white};
`;
export const MainHeaderView = styled.View`

padding: 20px;
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
export const HVMainView = styled.View`
flex-direction: row;

width: 100%;
`
export const SearchTextInput = styled.TextInput`
width: 234px;
height: 55px;
background: #F7F8FB;
border-radius: 15px;
padding-left: 10px;
font-size: 15px;
`

export const NotifView = styled.TouchableOpacity`
flex: 0.25;
justify-content: center;
align-items: center;
/* background: #000; */
`

export const SearchView = styled.View`
flex: 1;
flex-direction: row;
background: #F7F8FB;
justify-content: center;
align-items: center;
padding-left: 10px;
border-radius: 15px;
`

export const NotifInnerview = styled.View`
height: 55px;
width: 55px;
background: #F7F8FB;
border-radius: 15px;
justify-content: center;
align-items: center;
`

export const BView = styled.TouchableOpacity`
margin-top: 5%;
`

export const CView = styled.FlatList`
padding-left: 20px;
`
export const FlatView = styled.View`

`
export const FlatItemTouchable = styled.TouchableOpacity`
padding: 11px;
/* background: ${props => (props.select ? "#F7F8FB" : "#000")}; */
background: ${props => props.select ? "#FF7465" : "#F7F8FB"};
margin-right: 10px;
padding-left: 20px;
padding-right: 20px;
border-radius: 20px;
`
export const FlatText = styled.Text`
`