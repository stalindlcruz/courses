# dato = input('Ingrese dato: ')
# print(dato)

# dato = input('Ingrese dato: ')

# lista = ['hola', 'mundo', 'chanchito', 'feliz', 'dragones']

# if lista.count(dato) > 0:
#     print('El dato existe:', dato)
# else:
#     print('El dato no existe :(', dato)

# primero = input('ingrese primer numero: ')
# segundo = input('ingrese segundo numero: ')
# print(primero + segundo)

# ocurre un error, no los esta sumando, los esta
# concatenando, esto es debido a que los datos 
# que ingresamos usando la funcion de (input) son
# interpretados como un string y no como un numero.
# para lograr la suma tenemos que transformar los datos
# a numeros enteros y para hacer esto debemos hacer uso
# de la funcion (int).

# primero = input('ingrese primer numero: ')
# segundo = input('ingrese segundo numero: ')

# PrimerNumero = int(primero)
# SegundoNumero = int(segundo)

# print(PrimerNumero + SegundoNumero)


# primero = input('ingrese primer numero: ')

# try:
#     primero = int(primero)
# except:
#     primero = 'chanchito feliz'

# segundo = input('ingrese segundo numero: ')

# try:
#     segundo = int(segundo)
# except:
#     segundo = 'chanchito feliz'

# if primero == 'chanchito feliz' or segundo == 'chanchito feliz':
#     print('Ingresaste mal un dato, prueba de nuevo solo con numeros')
# else:
#     print(primero + segundo)

# primero = input('ingrese primer numero: ')

# try:
#     primero = int(primero)
# except:
#     primero = 'chanchito feliz'

# if primero == 'chanchito feliz':
#     print('El valor ingresado no es un entero')
#     exit()

# segundo = input('ingrese segundo numero: ')

# try:
#     segundo = int(segundo)
# except:
#     segundo = 'chanchito feliz'

# if segundo == 'chanchito feliz':
#     print('El valor ingresado no es un entero')
#     exit()

# print(primero + segundo)

primero = input('ingrese primer numero: ')

try:
    primero = int(primero)
except:
    primero = 'chanchito feliz'

if primero == 'chanchito feliz':
    print('El valor ingresado no es un entero')
    exit()

segundo = input('ingrese segundo numero: ')

try:
    segundo = int(segundo)
except:
    segundo = 'chanchito feliz'

if segundo == 'chanchito feliz':
    print('El valor ingresado no es un entero')
    exit()

simbolo = input('Ingrese operacion: ')

if simbolo == '+':
    print('Suma:', primero + segundo)
elif simbolo == '-':
    print('Resta:', primero - segundo)
elif simbolo == '*':
    print('Multiplicacion:', primero * segundo)
elif simbolo == '/':
    print('Division:', primero / segundo)
else:
    print('El simbolo ingresado no es valido')