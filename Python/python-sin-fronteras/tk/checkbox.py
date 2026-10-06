from tkinter import *

root = Tk()
root.title('Hola Mundo')
root.geometry('500x500')

var = StringVar()
var.set('chanchito feliz')

def mostrar():
    l = Label(root, text=var.get())
    l.pack()

c = Checkbutton(root, text='Soy un checkbox', variable=var, onvalue='si', offvalue='chanchito feliz')
c.pack()

btn = Button(root, text='Click', command=mostrar)
btn.pack()

root.mainloop()