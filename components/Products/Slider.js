import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated, Image } from 'react-native'

const { width, height } = Dimensions.get('window')
let flatList


const Slider = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)

    useEffect(() => {
        setDataList(data)

    })

    return (
        <View>
            <FlatList data={data}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Image
                                source={{ uri: `http://dev-rohto-cmsapi.niw.com.vn/` + item }}
                                style={{
                                    width: width - 52,
                                    height: 180,
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8,
                                    marginVertical: 10
                                }}
                                resizeMode='center'
                            />
                        </View>
                    )
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                )}
            />

            {/* <View>
                {data.map((_, i) => {
                    let opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    })
                    if(data.length > 1) {
                        return (
                            <View styles={styles.dotView}>
                                <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#0072bc', margin: 8, borderRadius: 5 }}
                            />
                            </View>
                        )
                    }
                    
                })}

            </View> */}
        </View>
    )

}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center', marginTop: -25 }
})

export default Slider