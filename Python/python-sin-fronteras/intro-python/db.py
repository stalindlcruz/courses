# import mysql.connector

# midb = mysql.connector.connect(
#     host='localhost',
#     user='chanchitofeliz',
#     password='Chanchito0102@',
#     database='prueba'
# )

# cursor = midb.cursor()

# cursor.execute('select * from Usuario')

# resultado = cursor.fetchall()
# # resultado = cursor.fetchone()

# print(resultado)


# import mysql.connector

# midb = mysql.connector.connect(
#     host='localhost',
#     user='chanchitofeliz',
#     password='Chanchito0102@',
#     database='prueba'
# )

# cursor = midb.cursor()

# cursor.execute('select * from Usuario')

# sql = 'insert into Usuario (email, username, edad) values (%s, %s, %s)'
# values = ('micorreo@correo.com', 'nombreusuario', 45)

# # cursor.execute('show create table Usuario')
# # cursor.execute(sql, values)

# # midb.commit()

# # print(cursor.rowcount)
# resultado = cursor.fetchall()

# print(resultado)


# import mysql.connector

# midb = mysql.connector.connect(
#     host='localhost',
#     user='chanchitofeliz',
#     password='Chanchito0102@',
#     database='prueba'
# )

# cursor = midb.cursor()

# # # Listar datos.
# # cursor.execute('select * from Usuario')
# # resultado = cursor.fetchall()
# # print(resultado)

# # # Ver definiciones de tablas.
# # cursor.execute('show create table Usuario')

# # Insertar dato.
# sql = 'insert into Usuario (email, username, edad) values (%s, %s, %s)'
# values = ('micorreo@correo.com', 'nombreusuario', 45)

# cursor.execute(sql, values)

# midb.commit()

# print(cursor.rowcount)


# import mysql.connector

# midb = mysql.connector.connect(
#     host='localhost',
#     user='chanchitofeliz',
#     password='Chanchito0102@',
#     database='prueba'
# )

# cursor = midb.cursor()

# # Listar datos.
# cursor.execute('select * from Usuario')
# resultado = cursor.fetchall()
# print(resultado)

# # # Ver definiciones de tablas.
# # cursor.execute('show create table Usuario')

# # # Insertar dato.
# # sql = 'insert into Usuario (email, username, edad) values (%s, %s, %s)'
# # values = ('micorreo@correo.com', 'nombreusuario', 45)

# # Actualizar datos
# # sql = 'update Usuario set email = %s where id = %s'
# # values = ('myemail@correo.com', 5)
# # cursor.execute(sql, values)

# # midb.commit()

# # print(cursor.rowcount)


import mysql.connector

midb = mysql.connector.connect(
    host='localhost',
    user='chanchitofeliz',
    password='Chanchito0102@',
    database='prueba'
)

cursor = midb.cursor()

# # Listar datos.
# cursor.execute('select * from Usuario')
# resultado = cursor.fetchall()
# print(resultado)

# Limitar los resultados
cursor.execute('select * from Usuario limit 2')
resultado = cursor.fetchall()
print(resultado)

# # Ver definiciones de tablas.
# cursor.execute('show create table Usuario')

# # Insertar dato.
# sql = 'insert into Usuario (email, username, edad) values (%s, %s, %s)'
# values = ('micorreo@correo.com', 'nombreusuario', 45)

# Actualizar datos
# sql = 'update Usuario set email = %s where id = %s'
# values = ('myemail@correo.com', 5)
# cursor.execute(sql, values)

# midb.commit()

# print(cursor.rowcount)

# # Eliminar datos
# sql = 'delete from Usuario where id = %s'
# values = (4,)
# cursor.execute(sql, values)
# midb.commit()