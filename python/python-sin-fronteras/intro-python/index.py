# Aqui va un comentario.

# if 3 > 5:   # Aqui va un comentario.
#     print('Esto no se va a imprimir')

# if 5 > 3:
#     print('5 es mayor a 3')

x = 5
y = 'chanchito feliz'
print(x, y)

email = 'chanchito@feliz.com'
print(email)

MiVar = 'chanchito'
MIVAR = 'chanchito'

a, b, c, = 'lala', 'lele', 'lili'
# print(a, b, c)

valor1 = valor2 = valor3 = 'chanchito feliz'
# print(valor1, valor2, valor3)

inicio = 'Hola'
final = 'Mundo'
# print(inicio + final)

inicio = 'Hola '
final = 'Mundo'
# print(inicio + final)

inicio = 'Hola'
final = 'Mundo'
# print(inicio, final)

palabra = 'hola mundo'  #string
oracion = "hola mundo comillas dobles"  #string

entero = 20 #integer
ConDecimales = 20.2 #float

complejo = 2j
# print(palabra, oracion, entero, ConDecimales, complejo)
lista = []
# print(lista)

lista = ['Hola', 'Mundo', 'Chanchito Felis']
lista2 = lista.copy()
lista.append('Chanchito Triste')
# lista.clear()
# print(lista, lista2.count(3))
# print(len(lista), len(lista2))

largoLista = len(lista)
largoLista2 = len(lista2)

# print(largoLista, largoLista2)
# print(lista[0])
# print(lista[1])
# print(lista[2])
# lista.pop()   # Eliminar el ultimo elemento de una lista.
# lista.remove('Chanchito Felis')   # Este elimina un elemento por su valor.

lista.reverse()
lista.sort()

tupla = ('hola', 'mundo', 'somos', 'tupla')
listaDeTupla = list(tupla)
listaDeTupla.append('chanchito')
# print(tupla.count('mundo'))   # count cuenta los elementos que existen de ese elemento
# print(listaDeTupla)     # index nos devuelve la posisicion de donde encontro un elemento.
rango = range(6)
# print(rango)

diccionario = {
    'Nombre': 'chanchito feliz',
    'Raza': 'persa',
    'Edad': 5
}

# print(diccionario)
# print(diccionario['Nombre'])
# print(diccionario['Raza'])
# print(diccionario.get('Nombre'))
diccionario['Nombre'] = 'Fluffy'

# print(diccionario)
# print(len(diccionario))

# Agregar propiedad o valor al dccionario
diccionario['ronronea'] = 'si'
# print(diccionario)
# Eliminar propiedad o valor al dccionario
# diccionario.pop('ronronea')   # Eliminar una llave o valor en especifico.
# diccionario.popitem()   # Elimina el ultimo valor que se agrego
# copiaGatito = diccionario.copy()    # Hacer copia a un diccionario
copiaGatito = dict(diccionario)     # Otra forma de hacer copia a un diccionario
# del diccionario['ronronea']     # Eliminar una llave o valor en especifico.
diccionario.clear()
# print(diccionario)

# Diccionarios anidados.
# gatitos = {
#     "Fluffy": {
#         "nombre": "Fluffy",
#         "edad": 4
#     },
#     "Mamba": {
#         "nombre": "Black Mamba",
#         "edad": 12
#     }
# }

Fluffy = {
    "Nombre": "Fluffy",
    "Edad": 4
}

Mamba ={
    "Nombre": "Black Mamba",
    "Edad": 12
}

gatitos = {
    "fluffy": Fluffy,
    "mamba": Mamba
}

print(gatitos)

# diccionarios con dict
perritos = dict(Nombre="Chanchito Feliz", Edad=6)
print(perritos)

# Tipos de datos Booleanos
verdadero = True
falso = False

print(verdadero, falso)