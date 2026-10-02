# while loop: Es algo que se va a repetir hasta que se cumpla una condicion
#  de salida.

i = 0

# while i < 5:
#     print(i)
#     i += 1      # i = i + 1 (other form)

# while break and continue

# while i < 5:
#     print(i)
#     if i == 3:
#         break
#     i += 1

# while i < 5:
#     i += 1
#     if i == 3:
#         continue
#     print(i)


# for loop: Se utiliza cuando queremos iterar sobre listas o tuplas,
# pero generalmente sobre una secuencia de datos, incluso tambien se
# utilizan para iterar los diccionarios.

# usuarios = ['chanchito feliz', 'felipe', 'roberto', 'nicolas']

# for usuario in usuarios:
#     print(usuario)

# usuario = 'chanchito feliz'

# for c in usuario:
#     print(c)

# En este caso la 'c' imprime cada uno de los caracteres.

# usuarios = ['chanchito feliz', 'felipe', 'roberto', 'nicolas']

# for usuario in usuarios:
#     if usuario == 'roberto':
#         break
#     print(usuario)

# usuarios = ['chanchito feliz', 'felipe', 'roberto', 'nicolas']

# for usuario in usuarios:
#     if usuario == 'roberto':
#         continue
#     print(usuario)

# for x in range(6):
#     print(x)

# for x in range(1, 6):
#     print(x)

# for x in range(3, 30):
#     print(x)

# for x in range(3, 30, 3):
#     print(x)

# for x in range(3, 30, 5):
#     print(x)
# else:
#     print('Hemos terminado')

# En los for loops 'else' se ejecuta cuando hemos terminado
# de iterar todos los elementos dentro de un listado o de un 'range'.

# usuarios = ['chanchito feliz', 'felipe', 'roberto', 'nicolas']

# edades = [24, 25, 26, 35]

# for usuario in usuarios:
#     for edad in edades:
#         print(usuario, edad)