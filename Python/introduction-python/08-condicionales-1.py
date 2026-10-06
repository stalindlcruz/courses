#Revisar si una condicion es mayor a
# balance = 500
# if balance > 0:
#     print('Puedes pagar')

#En esta no se imprime nada, porque no se cumple la condicion
# balance = 500
# if balance > 501:
#     print('Puedes pagar')

# balance = 0
# if balance > 0:
#     print('puedes pagar')
# else:
#     print('No tienes saldo suficiente')

# balance = 500
# if balance > 0:
#     print('puedes pagar')
# else:
#     print('No tienes saldo suficiente')

#Likes
# likes = 200
# if likes == 200:
#     print('Excelente, 200 likes')

# likes = 200
# if likes > 200:
#     print('Excelente, 200 likes')
# else:
#     print('Casi llegas a los 200 likes')

# likes = 200
# if likes > 199:
#     print('Excelente, 200 likes')
# else:
#     print('Casi llegas a los 200 likes')

# likes = 200
# if likes >= 200:
#     print('Excelente, 200 likes')
# else:
#     print('Casi llegas a los 200 likes')

#if con textos
# lenguaje = 'Python'
# if lenguaje == 'Python':
#     print('Excelente decision')

# lenguaje = 'PHP'
# if not lenguaje == 'Python':
#     print('Excelente decision')

#Evaluar un boolean
# usuario_autenticado = True

# if usuario_autenticado == True:
#     print('Acceso al sistema')
# else:
#     print('Debes iniciar sesion')

#Cuando evaluas un true o un false no necesitas colocar el operador, se evalua automaticamente
# if usuario_autenticado:
#     print('Acceso al sistema')
# else:
#     print('Debes iniciar sesion')

#Evaluar un elemento de una lista
# lenguajes = ['python', 'Kotlin', 'Java', 'JavaScript']

# if 'python' in lenguajes:
#     print('python existe en la lista')
# else:
#     print('No existe en la lista')

# if 'PHP' in lenguajes:
#     print('PHP existe en la lista')
# else:
#     print('No existe en la lista')

#If anidados
usuario_autenticado = True
usuario_admin = True

if usuario_autenticado:
    if usuario_admin:
        print('Acceso total')
    else:
        print('Accseso al sistema')
else:
    print('Debes iniciar sesion')

usuario_autenticado = True
usuario_admin = False

if usuario_autenticado:
    if usuario_admin:
        print('Acceso total')
    else:
        print('Accseso al sistema')
else:
    print('Debes iniciar sesion')

usuario_autenticado = False
usuario_admin = False

if usuario_autenticado:
    if usuario_admin:
        print('Acceso total')
    else:
        print('Accseso al sistema')
else:
    print('Debes iniciar sesion')