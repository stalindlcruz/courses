print('Responde las siguientes preguntas con (si o no), segun corresponda')

calificacion = 0

pregunta_1 = input('Te gusta python? \r\n')

if pregunta_1 == 'si':
    calificacion += 1
    print('Respuesta correcta, ganaste 1 punto.')
else:
    print('Respuesta incorrecta, perdiste 1 punto')

pregunta_2 = input('Python es un lenguaje malo? \r\n')

if pregunta_2 == 'no':
    calificacion += 1
    print('Respuesta correcta, ganaste 1 punto.')
else:
    print('Respuesta incorrecta, perdiste 1 punto')

pregunta_3 = input('Debes estudiar mucho para ser buen programador? \r\n')

if pregunta_3 == 'si':
    calificacion += 1
    print('Respuesta correcta, ganaste 1 punto.')
else:
    print('Respuesta incorrecta, perdiste 1 punto')

if calificacion >= 2:
    print(f'Felicitaciones tu calificacion es {calificacion} has paso el examen')
else:
    print(f'Los siento tu calificacion es {calificacion} debes intentarlo again')