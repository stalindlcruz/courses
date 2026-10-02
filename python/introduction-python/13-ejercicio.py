playlist = {} #Dicciorario vacio
playlist['Canciones'] = [] #Lista vacia de canciones

#Funcion principal
def app():
    #Agregar playlist
    agregar_playlist = True

    while agregar_playlist:
        nombre_playlist = input('Como deseas nombrar la playlist?\r\n')
        if nombre_playlist:
            playlist['nombre'] = nombre_playlist

            #Ya tenemos un nombre, desactivar el true
            agregar_playlist = False
            #Mandar a llamar la funcion para agregar canciones
            agregar_canciones()

def agregar_canciones():
    #Bandera para agregar canciones
    agregar_cancion = True

    while agregar_cancion:
        #Preguntar al usuario que cancion desean agregar
        nombre_playlist = playlist['nombre']
        pregunta = f'\r\nAgregar canciones para la playlist {nombre_playlist}:\r\n'
        pregunta += 'Escribe "x" para dejar de agregar canciones\r\n'

        cancion = input(pregunta)
        #Dejar de agregar canciones
        if cancion == 'x':
            agregar_cancion = False

            #Mostrar resumen de la playlist
            mostrar_resumen()

        else:
            #Agregar las canciones a la playlist
            playlist['Canciones'].append(cancion)

def mostrar_resumen():
    nombre_playlist = playlist['nombre']
    print(f'\r\nplaylist: {nombre_playlist}\r\n')
    print('canciones:\r\n')
    for cancion in playlist['Canciones']:
        print(cancion)

app()