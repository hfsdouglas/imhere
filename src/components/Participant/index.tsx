import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Participant() {
    function handleParticipantRemove() {
        console.log('Clicou em remover')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Douglas Faria</Text>

            <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}