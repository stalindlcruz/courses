# import modulos

# print(modulos.mascotas)
# modulos.saludo('Nicolas')

# import modulos as xs

# print(xs.mascotas)
# xs.saludo('Nicolas')

# from modulos import saludo

# saludo('Nicolas')

# from modulos import saludo, mascotas

# print(mascotas)
# saludo('Nicolas')

import modulos as xs
from camelcase import CamelCase

print(xs.mascotas)
xs.saludo('Nicolas')

c = CamelCase()
s = 'Esta oracion necesita CamelCase'

camelcased = c.hump(s)
print(camelcased)