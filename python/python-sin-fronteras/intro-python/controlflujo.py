# if 2 < 5:
#     print('2 es menor que 5')

# a == b    (Si dos variables son iguales)
# a < b     (Si una variable es menor que la otra)
# a > b     (Si una variable es mayor que la otra)
# a != b    (Si es distinta a la otra)
# a <= b    (Si una variable es menor o igual que la otra)
# a >= b    (Si una variable es mayor o igual que la otra)

# if 2 == 2:
#     print('2 es igual a 2')

# if 2 == 3:
#     print('2 es igual a 3')

# if 2 > 5:
#     print('2 es mayor a 5')

# if 5 > 2:
#     print('5 es mayor a 2')

# if 2 != 2:
#     print('2 es distinto 2')

# if 3 != 2:
#     print('3 es distinto 2')

# if 3 >= 2:
#     print('3 es mayor o igual a 2')

# if 3 <= 3:
#     print('3 es menor o igual a 3')

if 2 > 5:
    print('lala')
elif 2 < 5:
    print('2 es menor a 5 en elif')

if 2 < 5:
    print('2 es menor a 5 en if')
elif 2 < 5:
    print('2 es menor a 5 en elif')

if 2 > 5:
    print('2 es menor a 5 en if')
elif 2 > 5:
    print('2 es menor a 5 en elif')
else:
    print('Yo me imprimo solo si todo lo anterior evalua en falso')

if 2 > 5:
    print('2 es menor a 5 en if')
elif 2 > 5:
    print('2 es menor a 5 en elif')
elif 2 < 5:
    print('2 menor a 5 en segundo elif')
else:
    print('Yo me imprimo solo si todo lo anterior evalua en falso')

if 2 > 5:
    print('2 es menor a 5 en if')
else:
    print('Yo me imprimo solo si todo lo anterior evalua en falso 2')

# Primero evaluara que la condicion se cumpla en if,
# si no se cumple continuara con elif y en caso que
# la primera condicion (if) sea verdadera (elif)
# no se ejecuutara. La condicion (else) evaluara todas
# las condiciones if y elif, si estas evaluan en falso
# se ejecutara la instruccion dentro del (else).
# Podemos encadenar elif todas las veces que queramos.
# Tambien se puede combinar (if) con (else) sin necesidad
# de tener (elif) en el medio.

# Otras alternativas en una linea.
if 2 < 5: print('if de una linea')

print('Cuando devuelve true') if 5 > 2 else print('Cuando devuelve false')

# and & or
# La palabra reservada de and va a necesitar que la 
# primera condicion devuelva true y la que coloquemos
# a la derecha tambien devuelva true, en que caso
# de que una de las dos devuelva (false), la instruccion
# ejecuda dentro de este (if) no sera ejecudada, ambas
# deben devolver true.

if 2 < 5 and 3 > 2:
    print('ambas devuelven true')

if 2 < 5 and 3 < 2:
    print('hay una falsa, esto no se mostrara')

# (or) lo que hara es que si la condicion de la
# izquierda devuelve (true), todo se evalua en
# true & si la evaluacion de la derecha devuelve true
# independiente de el valor de la izquierda, tambien
# hara que toda la evaluacion sea evaluada como true.

if 1 < 0 or 1 > 0:  # Si una condicion evalua en true se ejecuta la instruccion
    print('una de las dos condiciones devolvio true')

if 1 > 0 or 1 > 0:
    print('una de las dos condiciones devolvio true')

if 1 < 0 or 1 < 0:  # Si ambas condiciones son falsas, entonces no se ejecuta.
    print('si ambas condicione evaluan en false, no se ejecuta nada')