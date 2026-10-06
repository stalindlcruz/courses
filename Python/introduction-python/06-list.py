lenguajes = ['python', 'Kotlin', 'Java', 'JavaScript']

print(lenguajes)

#Los arrays (list) comienzan en la posicion cero
print(lenguajes[0]) #Pyhton

#Ordenar los elementos
lenguajes.sort()
print(lenguajes)

#Acceder a un elemento dentro de un texto
aprendiendo = f'Estoy aprendiendo {lenguajes[3]}'
print(aprendiendo)

#Modificando valores de un arreglo (list)
lenguajes[2] = 'PHP'
print(lenguajes)

#Agregar elementos a un arreglo (list)
lenguajes.append('Ruby')
print(lenguajes)

#Eliminar elementos de un arreglo (list)
del lenguajes[1]
print(lenguajes)

#Eliminar el ultimo elemento de un arreglo (list)
lenguajes.pop()
print(lenguajes)

#Eliminar con .pop una posicion en especifico
lenguajes.pop(0)
print(lenguajes)

#Eliminar por nombre
lenguajes.remove('PHP')
print(lenguajes)