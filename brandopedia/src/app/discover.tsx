
import { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function DiscoverScreen() {
    const [search, setSearch] = useState('');

    const people = [
        { id: 1, name: 'Dr. Arjun Mehta', job: 'Cardiology', image: require('../../assets/Profile image/Image-3.png') },
        { id: 2, name: 'Dr. Arjun Mehta', job: 'Cardiology', image: require('../../assets/Profile image/Image-1.png') },
        { id: 3, name: 'Dr. Arjun Mehta', job: 'Cardiology', image: require('../../assets/Profile image/Image-4.png') },
        { id: 4, name: 'Dr. Arjun Mehta', job: 'Cardiology', image: require('../../assets/Profile image/Image-2.png') },
        { id: 5, name: 'Dr. Arjun Mehta', job: 'Cardiology', image: require('../../assets/Profile image/Image-1.png') },
        { id: 6, name: 'Dr. Arjun Mehta', job: 'Cardiology', image: require('../../assets/Profile image/Image-3.png') },
    ];

    return (
        <View style={styles.container}>

            {/* Search */}
            <View style={styles.searchArea}>
                <View style={styles.searchBox}>
                    <Text style={styles.searchIcon}>⌕</Text>
                    <TextInput
                        placeholder="Search profiles, organizations..."
                        placeholderTextColor="#929292"
                        value={search}
                        onChangeText={setSearch}
                        style={styles.input}
                    />
                </View>

                <Text style={styles.heading}>People you may know</Text>
            </View>

            {/* People cards */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.people}>
                    {people
                        .filter((person) =>
                            person.name.toLowerCase().includes(search.toLowerCase()) ||
                            person.job.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((person) => (
                            <View key={person.id} style={styles.card}>

                                <View style={styles.connectTop}>
                                    <Text style={styles.connectText}>●  2 Connects</Text>
                                </View>

                                <View style={styles.cardContent}>
                                    <Image
                                        source={person.image}
                                        style={styles.personImage}
                                        resizeMode="contain"
                                    />

                                    <Text style={styles.name}>{person.name}</Text>
                                    <Text style={styles.job}>{person.job}</Text>

                                    <TouchableOpacity
                                        style={styles.connectButton}
                                        onPress={() => { }}
                                    >
                                        <Text style={styles.buttonText}>♟  Connect</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        ))}
                </View>
            </ScrollView>

            {/* Bottom navigation */}
            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => { }}
                >
                    <Text style={styles.navIcon}>⌂</Text>
                </TouchableOpacity>

                <View style={styles.navButton}>
                    <Text style={styles.activeIcon}>⌕</Text>
                </View>

                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navIcon}>➤</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F8',
    },

    searchArea: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 20,
        borderBottomWidth: 5,
        borderBottomColor: '#F0F0F0',
    },

    searchBox: {
        height: 58,
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
    },

    searchIcon: {
        fontSize: 30,
        color: '#555555',
        marginRight: 10,
    },

    input: {
        flex: 1,
        fontSize: 16,
        color: '#29292B',
    },

    heading: {
        marginTop: 24,
        fontSize: 18,
        color: '#696969',
    },

    people: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingTop: 18,
    },

    card: {
        width: '48.5%',
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        overflow: 'hidden',
        marginBottom: 18,
    },

    connectTop: {
        height: 38,
        backgroundColor: '#F1FAFA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    connectText: {
        fontSize: 16,
        color: '#696969',
    },

    cardContent: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 28,
        paddingBottom: 12,
        minHeight: 350,
    },

    personImage: {
        width: 84,
        height: 84,
        borderRadius: 42,
    },

    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#29292B',
        textAlign: 'center',
        marginTop: 22,
    },

    job: {
        fontSize: 16,
        color: '#7F7F80',
        marginTop: 7,
    },

    connectButton: {
        height: 48,
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#02B6B6',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    bottom: {
        height: 70,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    navButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    navIcon: {
        fontSize: 32,
        color: '#858585',
    },

    activeIcon: {
        fontSize: 34,
        color: '#027878',
    },
});
