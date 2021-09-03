import React from 'react';
import { StyleSheet } from 'react-native';

const darkMode = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#212529',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 48,
        width: 48,
    },
    titleWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 14,
        color: '#A9ABB1',
        marginTop: 4,
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#A9ABB1',
        marginHorizontal: 20,
        marginTop: 16,
    },

    // App.js
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 16,
        backgroundColor: '#A9ABB1',
    },
});

export default darkMode;