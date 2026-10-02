import string

first = input('Ingrese primer numero:')

try:
    first = int(first)
except:
    first = string

if first == string:
    print('No has ingresado un numero')
    exit()


second = input('Ingrese segundo numero:')

try:
    second = int(second)
except:
    second = string

if second == string:
    print('No has ingresado un numero')
    exit()

simbolo = input('Ingresa la operacion')

if simbolo == '+':
    print('Suma:', first + second)
elif simbolo == '-':
    print('Resta:', first - second)
elif simbolo == '*':
    print('Multiplicacion:', first * second)
elif simbolo == '/':
    print('Division:', first / second)
else:
    print('El simbolo ingresado no es valido')