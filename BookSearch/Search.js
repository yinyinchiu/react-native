'use strict';

var React = require('react-native');

var {
	StyleSheet,
	View,
	Text,
	Component
} = React;

var styles = StyleSheet.create({
	description: {
		fontSize: 20,
		backgroundColor: 'white'
	},
	containter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

class Search extends Component {
	render() {
		return (
			<View style={styles.containter}>
				<Text style={styles.description}>
					Search Tab
				</Text>
			</View>
		);
	}
}

module.exports = Search;
