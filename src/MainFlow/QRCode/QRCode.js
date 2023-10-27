import React , {useEffect, useState ,} from "react";
import {View , Text} from 'react-native'
import {useSelector, useDispatch} from 'react-redux';

const QRCode = () => {
    const [cartLenth, setCartLenth] = useState(0);
    const cartData = useSelector(state => state.reducer);
    useEffect(() => {
      setCartLenth(cartData);
    }, [cartData]);
  console.log(cartLenth);
    return(
        <View>
            <Text>QRCode</Text>
        </View>
    )
}

export default QRCode