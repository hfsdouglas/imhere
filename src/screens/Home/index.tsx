import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ['Douglas', 'Rodrigo', 'Diego', 'João', 'Ana', 'Bianca', 'Bruno', 'Hugo', 'Mariana', 'Juliana']

  function handleParticipantAdd() {
    if (participants.includes("Douglas")) {
      return Alert.alert('Atenção', 'Já exite participante na lista com esse nome!')
    }
  }

  function participantRemove(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      { text: 'Sim', onPress: () => console.log("Deletou"), style: 'destructive'},
      { text: 'Não', style: 'cancel'},
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => participantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes no evento. </Text>
        )}
      />
    </View>
  )
}