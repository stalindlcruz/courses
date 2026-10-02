# from tkinter import *

# root =Tk()
# root.title('Hola Mundo')
# root.geometry('700x500')

# # label = Label(root, text='Hola mundo! mi primera etiqueta.')
# l1 = label = Label(root, text='Hola mundo! mi primera etiqueta.')
# l2 = label = Label(root, text='Hola mundo! mi primera etiqueta.')
# l3 = label = Label(root, text='Hola mundo! mi primera etiqueta.')

# l1.pack()
# l2.pack()
# l3.pack()

# # # Esta es otra manera de hacerlo ya que python es un lenguaje orientado a objeto
# # # Y no necesita ser asignado a una variable. Pero es mucho mas ordenado agregarlo a una variable.

# # Label(root, text='Hola mundo! mi primera etiqueta.').pack()

# root.mainloop()


from tkinter import *

root =Tk()
root.title('Hola Mundo')
root.geometry('700x500')

l1 = Label(root, text='Hola mundo! primera etiqueta.')
l2 = Label(root, text='Segunda etiqueta.')
l3 = Label(root, text='Yo soy la tercera etiqueta')

l1.grid(row=0, column=0)
l2.grid(row=1, column=1)
l3.grid(row=10, column=10)

root.mainloop()