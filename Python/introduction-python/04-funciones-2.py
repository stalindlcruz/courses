def informacion(nombre):
    print(f'Soy {nombre}')  #Cuando mezclas string con variables, debes agregarle f al comienzo.

informacion('Pedro')
informacion('Itzel')
informacion('Juan')

def informacion(nombre, puesto):
    print(f'Soy {nombre} y soy {puesto}')

informacion('Pedro', 'Programador')
informacion('Itzel', 'Designer')
informacion('Juan', 'No hace nada')

def informacion(nombre, puesto = 'Desconocido'):
    print(f'Soy {nombre} y soy {puesto}')

informacion('Pedro', 'Programador')
informacion('Itzel', 'Designer')
informacion('Juan')