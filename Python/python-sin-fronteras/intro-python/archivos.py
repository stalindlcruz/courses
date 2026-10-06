# c = open('chanchito.txt')
# print(c.read())

# c = open('chanchito.txt')
# print(c.readline())
# print(c.readline())
# print(c.readline())
# print(c.readline())
# print(c.readline())

# c = open('chanchito.txt')

# for x in c:
#     print(x)

# c.close()

# c = open('chanchito.txt', 'a')

# c.write('\nAgregaremos una nueva linea a nuestro archivo')

# c.close()

# c = open('chanchito.txt', 'a')

# c.close()

# x = open('chanchito.txt')

# print(x.read())

# c = open('chanchito.txt', 'w')

# c.write('\nAgregaremos una nueva linea a nuestro archivo')

# c.close()

# x = open('chanchito.txt')

# print(x.read())


# Eliminar archivos y carpetas

# import os

# os.remove('chanchito.txt')

import os
if os.path.exists('chanchito.txt'):     # Verificar si existe.
    os.remove('chanchito.txt')          # Eliminarlo si exite.
else:
    print('El archivo no existe')

os.rmdir('micarpeta')