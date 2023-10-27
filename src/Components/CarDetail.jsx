import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { useDispatch, useSelector } from "react-redux"
import { Ionicons } from '@expo/vector-icons';
import { carByIdSelector, isLoadingSelector, isSuccessSelector } from "../store/cars/selector"
import { useRoute } from "@react-navigation/native"
import { getCarByIdAsyncThunk } from "../store/cars/thunk"
import * as dimension from '../utils/dimension'
import colors from '../utils/color';
import { useEffect } from 'react';
import Loading from './base-component/loading';
import { resetBehaviorStateAction } from '../store/cars/slice';


const CarDetail = () => {
    const height = dimension.height
    const dispatch = useDispatch()
    const car = useSelector(carByIdSelector)
    const isSuccess = useSelector(isSuccessSelector)
    const isLoading = useSelector(isLoadingSelector)
    const { params } = useRoute()

    useEffect(() => {
        dispatch(getCarByIdAsyncThunk({
            id: params?.id
        }))
    }, [params?.id])

    console.log(isSuccess)

    useEffect(() => {
        return () => {
            if (isSuccess === true && isLoading === false) {
                dispatch(resetBehaviorStateAction())
            }
        }
    }, [isLoading, isSuccess])

    return (
    <>
    {isSuccess === false ? <Loading /> : isSuccess === true ?
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ImageBackground
            style={{
              padding: 10 * 2,
              height: height / 2.5,
              padding: 10 * 2,
              paddingTop: 10 * 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            source={{
                uri: car.image
            }}
          >
            <TouchableOpacity
              style={{
                height: 10 * 4.5,
                width: 10 * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10 * 2.5,
              }}
            >
              <Ionicons name="arrow-back" size={10 * 2.5} color={colors.gray} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 10 * 4.5,
                width: 10 * 4.5,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10 * 2.5,
              }}
            >
              <Ionicons name="share" size={10 * 2.5} color={colors.gray} />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              padding: 10 * 2,
              paddingTop: 10 * 3,
              marginTop: -10 * 3,
              borderTopLeftRadius: 10 * 3,
              borderTopRightRadius: 10 * 3,
              backgroundColor: colors.white,
            }}
          >
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10 * 3,
                alignItems: 'center',
              }}
            >
              <View style={{ width: '70%' }}>
                <Text
                  style={{
                    fontSize: 10 * 3,
                    color: colors.black,
                    fontWeight: '700',
                  }}
                >
                  {car.name}
                </Text>
              </View>
              <View
                style={{
                  padding: 10,
                  paddingHorizontal: 10 * 3,
                  backgroundColor: colors.yellow,
                  flexDirection: 'row',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name="star" color={colors.black} size={10 * 1.7} />
                <Text
                  style={{
                    fontSize: 10 * 1.6,
                    fontWeight: '600',
                    marginLeft: 10 / 2,
                    color: colors.black,
                  }}
                >
                  {car.rating}
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View
                style={{
                  padding: 10,
                  paddingHorizontal: 10 * 2,
                  backgroundColor: colors.light,
                  flexDirection: 'row',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name="heart" color={colors.gray} size={10 * 1.7} />
                <Text
                  style={{
                    fontSize: 10 * 1.6,
                    fontWeight: '600',
                    marginLeft: 10 / 2,
                    color: colors.gray,
                  }}
                >
                  {car.isMyFavorite}
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 10 * 3 }}>
              <Text
                style={{
                  fontSize: 10 * 2,
                  fontWeight: '700',
                  color: colors.dark,
                }}
              ></Text>
            </View>
            <Text
              style={{
                fontSize: 10 * 2,
                fontWeight: '700',
                color: colors.dark,
                marginBottom: 10,
              }}
            >
              Description
            </Text>
            <Text
              style={{
                fontSize: 10 * 1.7,
                fontWeight: '500',
                color: colors.gray,
              }}
            >
              {car.description}
            </Text>
            <View style={{ marginTop: 10 }}>
                <Text>Year: {car.year}</Text>
                <Text>Style: {car.style}</Text>
                <Text>Origin: {car.origin}</Text>
                <Text>Gearbox: {car.gearbox}</Text>
                <Text>Gasoline: {car.gasoline}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView>
        <View style={{ padding: 10 * 2 }}>
          <TouchableOpacity
            style={{
              width: '100%',
              padding: 10 * 2,
              backgroundColor: colors.black,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10 * 2,
            }}
          >
            <Text
              style={{
                fontSize: 10 * 2,
                color: colors.white,
                fontWeight: '700',
              }}
            >
              Choose this for
            </Text>
            <Text
              style={{
                fontSize: 10 * 2,
                color: colors.yellow,
                fontWeight: '700',
                marginLeft: 10 / 2,
              }}
            >
              $ {car.price}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      </> : <></>}
    </>
    )
}

export default CarDetail