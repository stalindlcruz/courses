#Iniciar un diccionario vacio
Jugador = {}
print(Jugador)

#Se une un jugador
Jugador['Nombre'] = 'Juan'
Jugador['Puntaje'] = 0
print(Jugador)

#Incrementando el puntaje
Jugador['Puntaje'] = 100
print(Jugador)

#Incrementando el puntaje
Jugador['Puntaje'] = 200
print(Jugador)

#Acceder a un valor
print(Jugador.get('consola'))

#Acceder a un valor
print(Jugador.get('consola', 'No existe un valor'))

#Iterar en el diccionario
for llave, valor in Jugador.items():
    print(llave)
    print(valor)

for llave, valor in Jugador.items():
    print(valor)

#Eliminar jugador y puntaje
del Jugador['Nombre']
del Jugador['Puntaje']
print(Jugador)