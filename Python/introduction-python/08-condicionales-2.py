#Ejemplos con elif
ocupacion = 'Estudiante'

if ocupacion == 'Estudiante':
    print('Tienes 50% de descuento')
else:
    print('Debes pagar el 100%')

ocupacion = 'Jubilado'

if ocupacion == 'Estudiante':
    print('Tienes 50% de descuento')
else:
    print('Debes pagar el 100%')

ocupacion = 'Jubilado'

if ocupacion == 'Estudiante':
    print('Tienes 50% de descuento')
elif ocupacion == 'Jubilado':
    print('Tienes 75% de descuent0')
else:
    print('Debes pagar el 100%')

ocupacion = 'Desempleado'

if ocupacion == 'Estudiante':
    print('Tienes 50% de descuento')
elif ocupacion == 'Jubilado':
    print('Tienes 75% de descuent0')
elif ocupacion == 'Desempleado':
    print('Tienes 10% de descuent0')
else:
    print('Debes pagar el 100%')

ocupacion = 'Nada'

if ocupacion == 'Estudiante':
    print('Tienes 50% de descuento')
elif ocupacion == 'Jubilado':
    print('Tienes 75% de descuent0')
elif ocupacion == 'Desempleado':
    print('Tienes 10% de descuent0')
else:
    print('Debes pagar el 100%')