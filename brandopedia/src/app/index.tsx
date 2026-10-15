
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          Doc<Text style={{ color: '#027878' }}>Connect</Text>
        </Text>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.profile}>
          <Image
            source={require('../../assets/Profile image/Image-3.png')}
            style={styles.profileImage}
          />

          <View style={styles.connect}>
            <Text style={styles.connectText}>●  2 Connects</Text>
          </View>

          <Text style={styles.name}>Dr. Arjun Mehta</Text>
          <Text style={styles.job}>Cardiology</Text>
        </View>

        {/* First Post */}
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image
              source={require('../../assets/Profile image/Image-1.png')}
              style={styles.smallImage}
            />

            <View>
              <Text style={styles.postName}>Docconnect</Text>
              <Text style={styles.postJob}>Healthcare Technology</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Welcome to Docconnect! We're building India's largest
            healthcare professional network. Connect with doctors,
            nurses, pharmacists, and medical students across the
            country. Let's transform healthcare collaboration
            together. 🇮🇳
          </Text>

          <Image
            source={require('../../assets/Post image/doctorimg.png')}
            style={styles.postImage}
            resizeMode="cover"
          />

          <View style={styles.likes}>
            <Text style={styles.likeText}>♡ 5</Text>
            <Text style={styles.likeText}>➤ 3</Text>
          </View>
        </View>

        {/* Second Post */}
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image
              source={require('../../assets/Profile image/Image-1.png')}
              style={styles.smallImage}
            />

            <View>
              <Text style={styles.postName}>Docconnect</Text>
              <Text style={styles.postJob}>Healthcare Technology</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Welcome to Docconnect! We're building India's largest
            healthcare professional network. Connect with doctors,
            nurses, pharmacists, and medical students across the
            country. Let's transform healthcare collaboration
            together. 🇮🇳
          </Text>

          <Image
            source={require('../../assets/Post image/senior-care.png')}
            style={styles.postImage}
            resizeMode="cover"
          />

          <View style={styles.likes}>
            <Text style={styles.likeText}>♡ 5</Text>
            <Text style={styles.likeText}>➤ 3</Text>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.activeIcon}>◆</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push('/discover')}
        >
          <Text style={styles.navIcon}>⌕</Text>
        </TouchableOpacity>

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

  header: {
    height: 68,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  logo: {
    fontSize: 25,
    color: '#29292B',
  },

  addButton: {
    width: 45,
    height: 45,
    backgroundColor: '#02B6B6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addText: {
    color: '#FFFFFF',
    fontSize: 28,
  },

  profile: {
    height: 289,
    alignItems: 'center',
    paddingTop: 24,
    backgroundColor: '#F7F7F8',
    marginBottom: 6,
  },

  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#FFFFFF',
  },

  connect: {
    marginTop: 12,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#F1FAFA',
    borderRadius: 25,
  },

  connectText: {
    color: '#7F7F80',
    fontSize: 14,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#29292B',
    marginTop: 13,
  },

  job: {
    fontSize: 16,
    color: '#7F7F80',
    marginTop: 4,
  },

  post: {
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginTop: 10,
  },

  smallImage: {
    width: 47,
    height: 47,
    borderRadius: 25,
    marginRight: 9,
  },

  postName: {
    fontSize: 16,
    color: '#29292B',
  },

  postJob: {
    fontSize: 14,
    color: '#7F7F80',
    marginTop: 2,
  },

  description: {
    fontSize: 14,
    lineHeight: 19,
    color: '#29292B',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },

  postImage: {
    width: '100%',
    height: 480,
  },

  likes: {
    height: 57,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  likeText: {
    fontSize: 16,
    color: '#777777',
  },

  bottom: {
    height: 64,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  activeIcon: {
    fontSize: 28,
    color: '#027878',
  },

  navIcon: {
    fontSize: 30,
    color: '#858585',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


});
