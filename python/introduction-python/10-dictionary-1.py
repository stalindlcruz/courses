#Creando un diccionario simple
cancion = {
    'Artista' : 'Lil Wayne',
    'Cancion' : 'How to love',
    'Lanzamiento' : '2005',
    'Likes' : '3,200'
}

print(cancion)

#Acceder a los elementos del diccionario
cancion = {
    'Artista' : 'Lil Wayne',
    'Cancion' : 'How to love',
    'Lanzamiento' : '2005',
    'Likes' : '3,200'
}

print(cancion['Artista'])
print(cancion['Lanzamiento'])

#Mezclar con string
artista = cancion['Artista']
print(f'Estoy escuchando a {artista}')

#Agregar nuevos valores
cancion['playlist'] = 'Rap'
print(cancion)

#Reemplazar valor
cancion['Lanzamiento'] = '2004'
print(cancion)

#Eliminar un valor
del cancion['Likes']
print(cancion)