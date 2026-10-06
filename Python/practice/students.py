grado = {}
grado['Students'] = []

def app():
    nombrar_grado = True

    while nombrar_grado:
        nombre_grado = input('Cual es tu grado?\r\n')

        if nombre_grado:
            grado['Grado'] = nombre_grado

            nombrar_grado = False

            agregar_students()

def agregar_students():

    agregar_student = True

    while agregar_student:
        nombre = f'\r\nCual es tu nombre?\r\n'
        nombre += 'Escribe tu nombre para agregarte al grado o "exit" para salir\r\n'

        student = input(nombre)

        if student == 'exit':
            agregar_student = False
        else:
            grado['Students'].append(student)

    print(grado)

app()