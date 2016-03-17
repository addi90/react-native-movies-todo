import React, { Component, PropTypes, View, Text, Image } from 'react-native';
import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';

export default class Navigation extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired,
        navigator: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            route: null
        }
    }

    changeView = (path, name) => {
        const { drawer, navigator } = this.context;

        this.setState({
            route: path
        });
        navigator.to(path, name);
        drawer.closeDrawer();
    };

    render() {
        const { route } = this.state;

        return (
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('./../img/nav.jpg')} />}>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={{ uri: "http://facebook.github.io/react-native/img/opengraph.png?2" }}/>} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}> Task list everyday</Text>
                    </View>
                </Drawer.Header>

                <Drawer.Section
                    items={[{
                        icon: 'home',
                        value: 'Home',
                        active: !route || route === 'home',
                        onPress: () => this.changeView('home'),
                        onLongPress: () => this.changeView('home')
                    }]}
                />

                <Drawer.Section
                    title="Archive"
                    items={[{
                        icon: 'face',
                        value: 'Archive',
                        label: '12',
                        active: route === 'avatars',
                        onPress: () => this.changeView('archive'),
                        onLongPress: () => this.changeView('archive')
                    }]}
                />
                <Divider style={{ marginTop: 8 }} />
                <Drawer.Section
                    title="Choose Themes"
                    items={[{
                        icon: 'invert-colors',
                        value: 'Change Theme',
                        label: '24',
                        active: route === 'themes',
                        onPress: () => this.changeView('themes'),
                        onLongPress: () => this.changeView('themes')
                    }]}
                />

            </Drawer>
        );
    }
}

const styles = {
    header: {
        paddingTop: 16
    },
    text: {
        marginTop: 20
    }
};
