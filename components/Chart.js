import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { ChartDot, ChartPath, ChartPathProvider, ChartYLabel } from '@rainbow-me/animated-charts';
import { useSharedValue } from 'react-native-reanimated';
export const { width: SIZE } = Dimensions.get('window');

const Chart = ({ currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline }) => {
    const latestCurrentPrice = useSharedValue(currentPrice);
    const [chartReady, setChartReady] = useState(false)

    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

    useEffect(() => {
        latestCurrentPrice.value = currentPrice;

        setTimeout(() => {
            setChartReady(true);
        }, 0)
        
    }, [currentPrice])

    const formatUSD = value => {
        'worklet';
        if (value === '') {
          return `$${latestCurrentPrice.value.toLocaleString('en-US', { currency: 'USD' })}`;
        }

        const formattedValue = `$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`

        return formattedValue;
      };


    return (
        <ChartPathProvider data={{ points: sparkline, smoothingStrategy: 'bezier' }}>
            <View style={styles.chartWrapper}>

                {/* titles */}
                <View style={styles.titlesWrapper}>


                    <View style={styles.uppperTitle}>
                        <View style={styles.uppperLeftTitle}>
                            <Image source={{ uri: logoUrl }} style={styles.image} />
                            <Text style={styles.subtitle}>{name} ({symbol.toUpperCase()})</Text>
                        </View>
                        <Text style={styles.subtitle}>7d</Text>
                    </View>

                    <View style={styles.lowerTitles}>
                        <ChartYLabel
                            format={formatUSD}
                            style={styles.boldTitle}
                        />
                        <Text style={[styles.title, { color: priceChangeColor }]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                    </View>
                </View>

                { chartReady ?
                    (
                        <View style={styles.chartLineWrapper}>
                            <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
                            <ChartDot style={{ backgroundColor: 'black' }} />
                        </View>
                    )
                    :
                    null
                }
            </View>
        </ChartPathProvider>
    )
}

const styles = StyleSheet.create({
    chartWrapper: {
        marginVertical: 16,
    },
    titlesWrapper: {
        marginHorizontal: 16,
    },
    uppperTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    uppperLeftTitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#A9ABB1',
    },
    lowerTitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boldTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 18,
    },
    chartLineWrapper: {
        marginTop: 40,
    }

})

export default Chart
